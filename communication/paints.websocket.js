function ControllerPaints(websocket, plcConnection) {
    websocket.on('change.paints', (paints, callback) => {
        // plcConnection.writeItems(['choosen_color_code'], [choosen_color_code]) //TODO
    })
}

module.exports = ControllerPaints