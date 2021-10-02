const { choosen_color_code } = require("./dataMapper/variableAdresess")

function ControllerCleaningSubstance(websocket, plcConnection) {
    websocket.on('change.cleaning_substance.refilling', (refilling) => {
        plcConnection.writeItems([`cleaning_substance.refill`], [refilling])
    })

    websocket.on('change.cleaning_substance.valve_open', (open) => {
        plcConnection.writeItems(['cleaning_substance.valve_open'], [open])
    })

    websocket.on('change.cleaning_substance.cleaning_time', (time) => {
        plcConnection.writeItems(['cleaning_substance.cleaning_time'], [time])
    })
}

module.exports = ControllerCleaningSubstance