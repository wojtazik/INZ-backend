function ControllerMixerWorking(websocket, plcConnection) {
    websocket.on('change.mixer_working', (mixer_working, callback) => {
        plcConnection.writeItems(['mixer_working_manual'], [mixer_working])  
    })
}

module.exports = ControllerMixerWorking