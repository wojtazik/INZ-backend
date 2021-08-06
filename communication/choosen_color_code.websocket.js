function ControllerChoosenColorCode(websocket, plcConnection) {
    websocket.on('change.choosen_color_code', (choosen_color_code, callback) => {
        // plcConnection.writeItems(['choosen_color_code'], [choosen_color_code]) //TODO
    })
}

module.exports = ControllerChoosenColorCode