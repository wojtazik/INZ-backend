function ControllerMixingTank(websocket, plcConnection) {
    websocket.on('change.mixing_tank', (mixing_tank) => {
        plcConnection.writeItems([
            `mixing_tank.time_seconds`,
            'mixing_tank.volume_to_gain'
        ], [
            mixing_tank.mixing_time_seconds,
            mixing_tank.volume_to_gain
        ])
    })

    websocket.on('change.mixing_tank.valve_open', (valve_open) => {
        plcConnection.writeItems(['mixing_tank.valve_open'], [valve_open])
    })
}

module.exports = ControllerMixingTank