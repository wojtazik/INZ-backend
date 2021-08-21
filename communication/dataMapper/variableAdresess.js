const variablesMapping = {
    'mixer_working': 'DB2,X45.6',
    'mixer_working_manual': 'DB2,X52.4',
    'choosen_color_code': 'DB2,S54.255',
    'process_running': 'TODO',

    'paints.cyan.refill': 'TODO', //TD
    'paints.cyan.current_volume': 'DB3,INT0', //TD
    'paints.cyan.count_liters': 'DB2,REAL310', 
    'paints.cyan.valve_open': 'DB2,X44.0',
    'paints.cyan.max_level': 'DB2,X0.6',
    'paints.cyan.min_level': 'DB2,X0.0',

    'paints.magenta.refill': 'TODO', //TD
    'paints.magenta.current_volume': 'DB3,INT2', //TD
    'paints.magenta.count_liters': 'DB2,REAL314',
    'paints.magenta.valve_open': 'DB2,X44.1',
    'paints.magenta.max_level': 'DB2,X0.7',
    'paints.magenta.min_level': 'DB2,X0.1',

    'paints.yellow.refill': 'TODO', //TD
    'paints.yellow.current_volume': 'DB3,INT4',
    'paints.yellow.count_liters': 'DB2,REAL318',
    'paints.yellow.valve_open': 'DB2,X44.2',
    'paints.yellow.max_level': 'DB2,X1.0',
    'paints.yellow.min_level': 'DB2,X0.2',

    'paints.white.refill': 'TODO', //TD
    'paints.white.current_volume': 'DB3,INT8', //TD
    'paints.white.count_liters': 'DB2,REAL326',
    'paints.white.valve_open': 'DB2,X44.4',
    'paints.white.max_level': 'DB2,X1.1',
    'paints.white.min_level': 'DB2,X0.4',

    'paints.black.refill': 'TODO', //TD
    'paints.black.current_volume': 'DB3,INT6', //TD
    'paints.black.count_liters': 'DB2,REAL322',
    'paints.black.valve_open': 'DB2,X44.3',
    'paints.black.max_level': 'DB2,X1.1',
    'paints.black.min_level': 'DB2,X0.3',

    'cleaning_substance.refill': 'TODO', //TD
    'cleaning_substance.current_volume': 'DB3,INT10', //TD
    'cleaning_substance.valve_open': 'TODO',
    'cleaning_substance.max_level': 'TODO',
    'cleaning_substance.min_level': 'TODO',

    'mixing_tank.valve_open': 'DB2,X46.1',
    'mixing_tank.time_seconds_remaining': 'TODO',
    'mixing_tank.current_volume': 'DB3,INT12.0',
    'mixing_tank.volume_to_gain': 'TODO',
    'mixing_tank.time_seconds': 'TODO',



    'alarm.0.safety_switch.date': 'DB1,DTL0',
    'alarm.0.safety_switch.message': 'DB1,S12.256',
    'alarm.0.safety_switch.error_code': 'DB1,S268.256',
    'alarm.0.safety_switch.switcher_state': 'DB1,X780.0'
}

module.exports = variablesMapping