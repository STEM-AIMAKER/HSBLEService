// Auto-generated. Do not edit.


    /**
     * Support for additional Bluetooth services.
     */
    //% color=#0082FB weight=96 icon="\uf294" block="HANSHIN: Bluetooth BLE Service"
declare namespace hsble {

    /**
     *  Starts the Bluetooth UART service
     */
    //% blockId=startBLEService block="hsbleservice start ble service"
    //% parts="hsble" advanced=true shim=hsble::startBLEService
    function startBLEService(): void;

    /**
     * Sends a buffer of data via Bluetooth UART
     */
    //% shim=hsble::bleWriteBuffer
    function bleWriteBuffer(buffer: Buffer): void;

    /**
     * Reads buffered UART data into a buffer
     */
    //% shim=hsble::bleReadBuffer
    function bleReadBuffer(): Buffer;

    /**
     * Registers an event to be fired when one of the delimiter is matched.
     * @param delimiters the characters to match received characters against.
     */
    //% weight=18 blockId=onBLEDataReceived block="on ble data received %delimiters=serial_delimiter_conv"
    //% parts="hsble" shim=hsble::onBLEDataReceived
    function onBLEDataReceived(delimiters: string, body: () => void): void;

    /**
     * Register code to run when the micro:bit is connected to over Bluetooth
     * @param body Code to run when a Bluetooth connection is established
     */
    //% blockId=onBLEConnected block="on ble connected" blockGap=8
    //% parts="hsble" shim=hsble::onBLEConnected
    function onBLEConnected(body: () => void): void;

    /**
     * Register code to run when a bluetooth connection to the micro:bit is lost
     * @param body Code to run when a Bluetooth connection is lost
     */
    //% blockId=onBLEDisconnected block="on ble disconnected"
    //% parts="hsble" shim=hsble::onBLEDisconnected
    function onBLEDisconnected(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
