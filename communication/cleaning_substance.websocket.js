const { choosen_color_code } = require("./dataMapper/variableAdresess")

function ControllerCleaningSubstance(websocket, plcConnection) {
    websocket.on('change.cleaning_substance.refilling', (cleaning_substance) => {
        
        console.log(choosen_color_code)
        
        plcConnection.writeItems([`cleaning_substance.refill`], [cleaning_substance.refill])
    })
}

module.exports = ControllerCleaningSubstance