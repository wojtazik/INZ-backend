const constants = require("../../constants/constants")

function refreshDataMapper(values) {
    return {
        mixer_working: values.mixer_working,
        paints: [
            {
                name: constants.colors.yellow,
                current_volume: values['tank_volume.current.yellow']
            }
        ]

    }
}

module.exports = refreshDataMapper