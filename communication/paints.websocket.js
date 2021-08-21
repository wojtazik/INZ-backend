function ControllerPaints(websocket, plcConnection) {
    websocket.on('change.paints', (paints, callback) => {
        console.log('changePaints', paints)
        const cyanToGain =  paints.find((paint) => paint.name === 'cyan')
            .count_liters.toFixed(2)
        const magentaToGain =  paints.find((paint) => paint.name === 'magenta')
            .count_liters.toFixed(2)
        const yellowToGain =  paints.find((paint) => paint.name === 'yellow')
            .count_liters.toFixed(2)
        const whiteToGain =  paints.find((paint) => paint.name === 'white')
            .count_liters.toFixed(2)
        const blackToGain =  paints.find((paint) => paint.name === 'black')
            .count_liters.toFixed(2)
        console.log(
            cyanToGain,
            magentaToGain,
            yellowToGain,
            whiteToGain,
            blackToGain
        )

        plcConnection.writeItems([
            'paints.cyan.count_liters',
            'paints.magenta.count_liters',
            'paints.yellow.count_liters',
            'paints.white.count_liters',
            'paints.black.count_liters',
        ],[
            cyanToGain,
            magentaToGain,
            yellowToGain,
            whiteToGain,
            blackToGain
        ])
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