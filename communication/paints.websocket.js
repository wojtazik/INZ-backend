function ControllerPaints(websocket, plcConnection) {
    websocket.on('change.paints', (paints, callback) => {

    })

    websocket.on('change.paint.refilling', (paint) => {
        plcConnection.writeItems([`paints.${paint.name}.refill`], [paint.refill])
    })

    websocket.on('change.paint.valve_open', (paint) => {
        console.log(paint)
        plcConnection.writeItems([`paints.${paint.name}.valve_open`], [paint.valve_open])
    })

    websocket.on('change.paints.refilling', () => {
        console.log('trololo')
        plcConnection.writeItems([
            `paints.cyan.refill`,
            `paints.magenta.refill`,
            `paints.yellow.refill`,
            `paints.white.refill`,
            `paints.black.refill`
        ], [
            true,
            true,
            true,
            true,
            true
        ])
    })
}

module.exports = ControllerPaints