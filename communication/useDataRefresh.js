const refreshDataMapper = require("./dataMapper/refreshDataMapper")

function useDataRefresher(socket, plcConnection) {
    
    // socket.emit('refresh.data', {
    //     success: true,
    //     data: {
    //         choosen_color_code: '#FF00FF'
    //     }
    // })
    // console.log('aaa')
    // const dataMock = {
    //     'mixer_working': 'DB2,X45.6',
    //     'process_running': false,

    //     'paints.cyan.refill': false, //TD
    //     'paints.cyan.current_volume': 'DB3,INT0.0', //TD
    //     'paints.cyan.valve_open': 'DB2,X44.0',
    //     'paints.cyan.max_level': 'DB2,X0.6',
    //     'paints.cyan.min_level': 'DB2,X0.0',

    //     'paints.magenta.refill': false, //TD
    //     'paints.magenta.current_volume': 'DB3,INT2.0', //TD
    //     'paints.magenta.valve_open': 'DB2,X44.1',
    //     'paints.magenta.max_level': 'DB2,X0.7',
    //     'paints.magenta.min_level': 'DB2,X0.1',

    //     'paints.yellow.refill': false, //TD
    //     'paints.yellow.current_volume': 'DB3,INT4.0',
    //     'paints.yellow.valve_open': 'DB2,X44.2',
    //     'paints.yellow.max_level': 'DB2,X1.0',
    //     'paints.yellow.min_level': 'DB2,X0.2',

    //     'paints.white.refill': false, //TD
    //     'paints.white.current_volume': 'DB3,INT8.0', //TD
    //     'paints.white.valve_open': 'DB2,X44.4',
    //     'paints.white.max_level': 'DB2,X1.1',
    //     'paints.white.min_level': 'DB2,X0.4',

    //     'paints.black.refill': false, //TD
    //     'paints.black.current_volume': 'DB3,INT6.0', //TD
    //     'paints.black.valve_open': 'DB2,X44.3',
    //     'paints.black.max_level': 'DB2,X1.1',
    //     'paints.black.min_level': 'DB2,X0.3',

    //     'cleaning_substance.refill': false, //TD
    //     'cleaning_substance.current_volume': 'DB3,INT10.0', //TD
    //     'cleaning_substance.valve_open': false,
    //     'cleaning_substance.max_level': false,
    //     'cleaning_substance.min_level': false,

    //     'mixing_tank.valve_open': 'DB2,X46.1',
    //     'mixing_tank.time_seconds_remaining': 0, // MOGE DAC ZMIENNA ILE JEST
    //     'mixing_tank.current_volume': 'DB3,INT12.0',

    //     'alarm.0.safety_switch.date': '2021-08-16_2137',
    //     'alarm.0.safety_switch.message': 'Błąd otwarcia zaworu',
    //     'alarm.0.safety_switch.error_code': '216',
    //     'alarm.0.safety_switch.switcher_state': 'false',

    // }

    // socket.emit('refresh.data', {
    //     success: true,
    //     data: refreshDataMapper(dataMock)
    //})
    const dataRefresher = setInterval(() => {
    plcConnection.readAllItems((error, values) => {
            if (error) {
                console.error(error)
            } else {
                socket.emit('refresh.data', {
                    success: true,
                    data: refreshDataMapper(values)
                })
            }
        })
    }, 300)

    socket.on('disconnect', () => {
        clearInterval(dataRefresher)
    })
}

module.exports = useDataRefresher