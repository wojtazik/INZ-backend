function ControllerManualWork(websocket, plcConnection) {
    websocket.on('change.manual_work', (manual_work, callback) => {
        plcConnection.writeItems(['manual_work'], [manual_work])  
    })
}

module.exports = ControllerManualWork