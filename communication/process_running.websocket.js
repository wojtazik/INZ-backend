
function ControllerProcessRunning(websocket, plcConnection) {
    websocket.on('change.process_running', (process_running) => {
        if (process_running) {
            plcConnection.writeItems([
                `process_running_settable`,
                'process_running_stop'
            ], [
                process_running,
                false
            ])
        } else {
            plcConnection.writeItems([
                `process_running_settable`,
                'process_running_stop'
            ], [
                process_running,
                true
            ])
        }

    })
}

module.exports = ControllerProcessRunning