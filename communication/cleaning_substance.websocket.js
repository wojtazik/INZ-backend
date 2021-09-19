const { choosen_color_code } = require("./dataMapper/variableAdresess")

function ControllerCleaningSubstance(websocket, plcConnection) {
    websocket.on('change.cleaning_substance.refilling', (refilling) => {
        plcConnection.writeItems([`cleaning_substance.refill`], [refilling])
    })

    websocket.on('change.cleaning_substance.valve_open', (open) => {
        plcConnection.writeItems(['cleaning_substance.valve_open'], [open])
    })
}

module.exports = ControllerCleaningSubstance