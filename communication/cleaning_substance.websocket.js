const { choosen_color_code } = require("./dataMapper/variableAdresess")

function ControllerCleaningSubstance(websocket, plcConnection) {
    websocket.on('change.cleaning_substance.refilling', (refilling) => {
        
        plcConnection.writeItems([`cleaning_substance.refill`], [refilling])
    })
}

module.exports = ControllerCleaningSubstance