function ControllerCleaningSubstance(websocket, plcConnection) {
    websocket.on('change.cleaning_substance.refilling', (cleaning_substance) => {
        plcConnection.writeItems([`cleaning_substance.refill`], [cleaning_substance.refill])
    })
}

module.exports = ControllerCleaningSubstance