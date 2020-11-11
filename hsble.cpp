#include "pxt.h"
#include "MESEvents.h"
#include "HSMicroBitUARTService.h"


using namespace pxt;

/**
 * Support for additional Bluetooth services.
 */
//% color=#0082FB weight=96 icon="\uf294" block="HANSHIN: Bluetooth BLE Service"
namespace hsbleservice {

    HSMicroBitUARTService *uart = NULL;    
    /**
    *  Starts the Bluetooth UART service
    */
    //% weight=18 blockId=startBLEService block="hsbleservice | start ble service"
    //% parts="hsbleservice"
    void startBLEService() {
        if (uart) return;
        // 61 octet buffer size is 3 x (MTU - 3) + 1
        // MTU on nRF51822 is 23 octets. 3 are used by Attribute Protocol header data leaving 20 octets for payload
        // So we allow a RX buffer that can contain 3 x max length messages plus one octet for a terminator character
        uart = new HSMicroBitUARTService(*uBit.ble, 61, 60);
    }
    
    //%
    void bleWriteString(String data) {
        startBLEService();
    	uart->send(MSTR(data));
    }    

    //%
    String bleReadUntil(String del) {
        startBLEService();
        return PSTR(uart->readUntil(MSTR(del)));
    }    


    /**
    * Sends a buffer of data via Bluetooth UART
    */
    //%
    void bleWriteBuffer(Buffer buffer) {
        startBLEService();
        uart->send(buffer->data, buffer->length);
    }

    /**
    * Reads buffered UART data into a buffer
    */
    //%
    Buffer bleReadBuffer() {
        startBLEService();
        int bytes = uart->rxBufferedSize();
        auto buffer = mkBuffer(NULL, bytes);
        int read = uart->read(buffer->data, buffer->length);
        // read failed
        if (read < 0) {
            decrRC(buffer);
            return mkBuffer(NULL, 0);
        }
        // could not fill the buffer
        if (read != buffer->length) {
            auto tmp = mkBuffer(buffer->data, read); 
            decrRC(buffer); 
            buffer = tmp;
        }
        return buffer;
    }

    /**
    * Registers an event to be fired when one of the delimiter is matched.
    * @param delimiters the characters to match received characters against.
    */
    //% weight=18 blockId=onBLEDataReceived block="hsbleservice | on ble data received %delimiters=serial_delimiter_conv"
    //% parts="hsbleservice"
    void onBLEDataReceived(String delimiters, Action body) {
      startBLEService();
      uart->eventOn(MSTR(delimiters));
      registerWithDal(MICROBIT_ID_BLE_UART, MICROBIT_UART_S_EVT_DELIM_MATCH, body);
    }

    /**
     * Register code to run when the micro:bit is connected to over Bluetooth
     * @param body Code to run when a Bluetooth connection is established
     */
    //% blockId=onBLEConnected block="hsbleservice | on ble connected" blockGap=8
    //% parts="hsbleservice"
    void onBLEConnected(Action body) {
        registerWithDal(MICROBIT_ID_BLE, MICROBIT_BLE_EVT_CONNECTED, body);
    }    

     /**
     * Register code to run when a bluetooth connection to the micro:bit is lost
     * @param body Code to run when a Bluetooth connection is lost
     */
    //% blockId=onBLEDisconnected block="hsbleservice | on ble disconnected"
    //% parts="hsbleservice"
    void onBLEDisconnected(Action body) {
        registerWithDal(MICROBIT_ID_BLE, MICROBIT_BLE_EVT_DISCONNECTED, body);
    } 
}

hsbleservice.startBLEService()