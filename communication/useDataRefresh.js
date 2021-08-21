const refreshDataMapper = require("./dataMapper/refreshDataMapper")

function useDataRefresher(socket, plcConnection) {
    // const dataRefresher = setInterval(() => {
    // socket.emit('refresh.data', {
    //     success: true,
    //     data: {
    //         choosen_color_code: '#FF00FF'
    //     }
    // })
    console.log('aaa')
    const dataMock = {
        'mixer_working': false,
        'process_running': false,

        'paints.cyan.refill': false, //TD
        'paints.cyan.current_volume': 500, //TD
        'paints.cyan.valve_open': false,
        'paints.cyan.max_level': false,
        'paints.cyan.min_level': false,

        'paints.magenta.refill': true, //TD
        'paints.magenta.current_volume': 300, //TD
        'paints.magenta.valve_open': false,
        'paints.magenta.max_level': false,
        'paints.magenta.min_level': false,

        'paints.yellow.refill': false, //TD
        'paints.yellow.current_volume': 139,
        'paints.yellow.valve_open': false,
        'paints.yellow.max_level': false,
        'paints.yellow.min_level': false,

        'paints.white.refill': false, //TD
        'paints.white.current_volume': 782, //TD
        'paints.white.valve_open': false,
        'paints.white.max_level': false,
        'paints.white.min_level': false,

        'paints.black.refill': false, //TD
        'paints.black.current_volume': 100, //TD
        'paints.black.valve_open': false,
        'paints.black.max_level': false,
        'paints.black.min_level': false,

        'cleaning_substance.refill': false, //TD
        'cleaning_substance.current_volume': 180, //TD
        'cleaning_substance.valve_open': false,
        'cleaning_substance.max_level': false,
        'cleaning_substance.min_level': false,

        'mixing_tank.valve_open': false,
        'mixing_tank.time_seconds_remaining': 0,
        'mixing_tank.current_volume': 520,

        'alarm.0.safety_switch.date': '2021-08-16_2137',
        'alarm.0.safety_switch.message': 'Błąd otwarcia zaworu',
        'alarm.0.safety_switch.error_code': '216',
        'alarm.0.safety_switch.switcher_state': 'false'
    }

    socket.emit('refresh.data', {
        success: true,
        data: refreshDataMapper(dataMock)
    })

    // plcConnection.readAllItems((error, values) => {
    //         if (error) {
    //             console.error(error)
    //         } else {
    //             socket.emit('refresh.data', {
    //                 success: true,
    //                 data: refreshDataMapper(values)
    //             })
    //         }
    //     })
    // }, 200)

    socket.on('disconnect', () => {
        // clearInterval(dataRefresher)
    })
}

module.exports = useDataRefresher