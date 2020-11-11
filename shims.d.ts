// Auto-generated. Do not edit.


    /**
     * Support for additional Bluetooth services.
     */
    //% color=#0082FB weight=96 icon="\uf294" block="HANSHIN: Bluetooth BLE Service"
declare namespace hsbleservice {

    /**
     *  Starts the Bluetooth UART service
     */
    //% help=bluetooth/start-uart-service
    //% blockId=bluetooth_start_uart_service block="bluetooth uart service"
    //% parts="hsbleservice" advanced=true shim=hsbleservice::startUartService
    function startUartService(): void;

    /**
     * Sends a buffer of data via Bluetooth UART
     */
    //% shim=hsbleservice::uartWriteBuffer
    function uartWriteBuffer(buffer: Buffer): void;

    /**
     * Reads buffered UART data into a buffer
     */
    //% shim=hsbleservice::uartReadBuffer
    function uartReadBuffer(): Buffer;

    /**
     * Registers an event to be fired when one of the delimiter is matched.
     * @param delimiters the characters to match received characters against.
     */
    //% help=bluetooth/on-uart-data-received
    //% weight=18 blockId=bluetooth_on_data_received block="bluetooth|on data received %delimiters=serial_delimiter_conv" shim=hsbleservice::onUartDataReceived
    function onUartDataReceived(delimiters: string, body: () => void): void;

    /**
     * Register code to run when the micro:bit is connected to over Bluetooth
     * @param body Code to run when a Bluetooth connection is established
     */
    //% help=bluetooth/on-bluetooth-connected weight=20
    //% blockId=bluetooth_on_connected block="on bluetooth connected" blockGap=8
    //% parts="hsbleservice" shim=hsbleservice::onBluetoothConnected
    function onBluetoothConnected(body: () => void): void;

    /**
     * Register code to run when a bluetooth connection to the micro:bit is lost
     * @param body Code to run when a Bluetooth connection is lost
     */
    //% help=bluetooth/on-bluetooth-disconnected weight=19
    //% blockId=bluetooth_on_disconnected block="on bluetooth disconnected"
    //% parts="hsbleservice" shim=hsbleservice::onBluetoothDisconnected
    function onBluetoothDisconnected(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
