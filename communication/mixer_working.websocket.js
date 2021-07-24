function ControllerMixerWorking(websocket) {
    websocket.on('change.mixer_working', (mixer_working, callback) => {
        // send data to PLC
        // get data from plc
        console.log('mixer working: ', mixer_working)
        const newData = mixer_working

        callback({
            data: newData,
            success: true
        })
    })
}

module.exports = ControllerMixerWorking