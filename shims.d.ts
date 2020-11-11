// Auto-generated. Do not edit.


    /**
     * Support for additional Bluetooth services.
     */
    //% color=#0082FB weight=96 icon="\uf294" block="HANSHIN: Bluetooth BLE Service"
declare namespace hsbleservice {

    /**
     *  Starts the Bluetooth UART service
     */
    //% weight=18 blockId=startBLEService block="hsbleservice | start ble service"
    //% parts="hsbleservice" shim=hsbleservice::startBLEService
    function startBLEService(): void;

    /**
     * Sends a buffer of data via Bluetooth UART
     */
    //% shim=hsbleservice::bleWriteBuffer
    function bleWriteBuffer(buffer: Buffer): void;

    /**
     * Reads buffered UART data into a buffer
     */
    //% shim=hsbleservice::bleReadBuffer
    function bleReadBuffer(): Buffer;

    /**
     * Registers an event to be fired when one of the delimiter is matched.
     * @param delimiters the characters to match received characters against.
     */
    //% weight=18 blockId=onBLEDataReceived block="hsbleservice | on ble data received %delimiters=serial_delimiter_conv"
    //% parts="hsbleservice" shim=hsbleservice::onBLEDataReceived
    function onBLEDataReceived(delimiters: string, body: () => void): void;

    /**
     * Register code to run when the micro:bit is connected to over Bluetooth
     * @param body Code to run when a Bluetooth connection is established
     */
    //% blockId=onBLEConnected block="hsbleservice | on ble connected" blockGap=8
    //% parts="hsbleservice" shim=hsbleservice::onBLEConnected
    function onBLEConnected(body: () => void): void;

    /**
     * Register code to run when a bluetooth connection to the micro:bit is lost
     * @param body Code to run when a Bluetooth connection is lost
     */
    //% blockId=onBLEDisconnected block="hsbleservice | on ble disconnected"
    //% parts="hsbleservice" shim=hsbleservice::onBLEDisconnected
    function onBLEDisconnected(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
