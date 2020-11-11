 /**
 * Bluetooth BLE Service
 */
//% color=#0082FB weight=96 icon="\uf294" block="HANSHIN: Bluetooth BLE Service"
namespace hsbleservice
{
	export let NEW_LINE = "\r\n";
    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% blockId=bleWriteString block="ble write string %data" blockGap=8
    //% parts="hsbleservice" shim=hsbleservice::uartWriteString
    export function bleWriteString(data: string): void {
        console.log(data)
    }

    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% blockId=bleWriteLine block="ble write line %data" blockGap=8
    //% parts="hsbleservice"
    export function bleWriteLine(data: string): void {
        bleWriteString(data + serial.NEW_LINE);
    }
	
	/**
     *  Reads from the Bluetooth UART service buffer, returning its contents when the specified delimiter character is encountered.
     */
    //% help=bluetooth/uart-read-until weight=75
    //% blockId=bleReadUntil block="ble read until %del=serial_delimiter_conv"
    //% parts="hsbleservice" shim=hsbleservice::bleReadUntil
    export function bleReadUntil(del: string): string {
        // dummy implementation for simulator
        return ""
    }
}