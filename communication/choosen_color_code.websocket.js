function ControllerChoosenColorCode(websocket, plcConnection) {
    websocket.on('change.choosen_color_code', (choosen_color_code, callback) => {
        plcConnection.writeItems(['choosen_color_code'], [choosen_color_code])
    })

    websocket.on('change.choosen_color_name', (choosen_color_name, callback) => {
        plcConnection.writeItems(['choosen_color_name'], [choosen_color_name])
    })
}

module.exports = ControllerChoosenColorCode