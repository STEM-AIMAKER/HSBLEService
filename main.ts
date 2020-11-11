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
    //% help=bluetooth/uart-write-string weight=80
    //% blockId=bluetooth_uart_write block="bluetooth uart|write string %data" blockGap=8
    //% parts="hsbleservice" shim=hsbleservice::uartWriteString
    export function uartWriteString(data: string): void {
        console.log(data)
    }

    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% help=bluetooth/uart-write-line weight=79
    //% blockId=bluetooth_uart_line block="bluetooth uart|write line %data" blockGap=8
    //% parts="hsbleservice"
    export function uartWriteLine(data: string): void {
        uartWriteString(data + serial.NEW_LINE);
    }
	
	/**
     *  Reads from the Bluetooth UART service buffer, returning its contents when the specified delimiter character is encountered.
     */
    //% help=bluetooth/uart-read-until weight=75
    //% blockId=bluetooth_uart_read block="bluetooth uart|read until %del=serial_delimiter_conv"
    //% parts="hsbleservice" shim=hsbleservice::uartReadUntil
    export function uartReadUntil(del: string): string {
        // dummy implementation for simulator
        return ""
    }
}