const constants = require("../../constants/constants")

function refreshDataMapper(values) {
    return {
        cleaning_substance: {
            refill: values['cleaning_substance.refill'],
            current_volume: values['cleaning_substance.current_volume'],
            valve_open: values['cleaning_substance.valve_open'],
            max_level: values['cleaning_substance.max_level'],
            min_level: values['cleaning_substance.min_level'],

        },
        process_running: values.process_running,
        mixer_working: values.mixer_working,
        paints: [{
                name: constants.colors.cyan,
                refill: values['paints.cyan.refill'],
                current_volume_liters: values['paints.cyan.current_volume'],
                valve_open: values['paints.cyan.valve_open'],
                max_level: values['paints.cyan.max_level'],
                min_level: values['paints.cyan.min_level']
            },
            {
                name: constants.colors.magenta,
                refill: values['paints.magenta.refill'],
                current_volume_liters: values['paints.magenta.current_volume'],
                valve_open: values['paints.magenta.valve_open'],
                max_level: values['paints.magenta.max_level'],
                min_level: values['paints.magenta.min_level']
            },
            {
                name: constants.colors.yellow,
                refill: values['paints.yellow.refill'],
                current_volume_liters: values['paints.yellow.current_volume'],
                valve_open: values['paints.yellow.valve_open'],
                max_level: values['paints.yellow.max_level'],
                min_level: values['paints.yellow.min_level']
            },
            {
                name: constants.colors.white,
                refill: values['paints.white.refill'],
                current_volume_liters: values['paints.white.current_volume'],
                valve_open: values['paints.white.valve_open'],
                max_level: values['paints.white.max_level'],
                min_level: values['paints.white.min_level']
            },
            {
                name: constants.colors.black,
                refill: values['paints.black.refill'],
                current_volume_liters: values['paints.black.current_volume'],
                valve_open: values['paints.black.valve_open'],
                max_level: values['paints.black.max_level'],
                min_level: values['paints.black.min_level']
            }
        ],
        mixing_tank: {
            valve_open: values['mixing_tank.valve_open'],
            mixing_time_seconds_remaining: values['mixing_tank.time_seconds_remaining'],
            current_volume: values['mixing_tank.current_volume']
        }

    }
}

module.exports = refreshDataMapper