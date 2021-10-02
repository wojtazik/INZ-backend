const variablesMapping = {
    'mixer_working': 'DB2,X79.6',
    'mixer_working_manual': 'DB2,X52.4',
    'choosen_color_code': 'DB2,S84.255',
    'choosen_color_name': 'DB2,INT926',

    'process_running_settable': 'DB2,X81.6',
    'process_running': 'DB2,X81.7',
    'process_running_stop': 'DB2,X340.0',
    'manual_work': 'DB2,X340.1',

    'paints.cyan.refill': 'DB2,X82.1', //TD
    'paints.cyan.current_volume': 'DB3,REAL0', //TD
    'paints.cyan.count_liters': 'DB2,REAL50', 
    'paints.cyan.valve_open': 'DB2,X80.3',
    'paints.cyan.max_level': 'DB2,X0.6',
    'paints.cyan.min_level': 'DB2,X0.0',

    'paints.magenta.refill': 'DB2,X82.2', //TD
    'paints.magenta.current_volume': 'DB3,REAL4', //TD
    'paints.magenta.count_liters': 'DB2,REAL54',
    'paints.magenta.valve_open': 'DB2,X80.4',
    'paints.magenta.max_level': 'DB2,X0.7',
    'paints.magenta.min_level': 'DB2,X0.1',

    'paints.yellow.refill': 'DB2,X82.3', //TD
    'paints.yellow.current_volume': 'DB3,REAL8',
    'paints.yellow.count_liters': 'DB2,REAL58',
    'paints.yellow.valve_open': 'DB2,X80.5',
    'paints.yellow.max_level': 'DB2,X1.0',
    'paints.yellow.min_level': 'DB2,X0.2',

    'paints.white.refill': 'DB2,X82.5', //TD
    'paints.white.current_volume': 'DB3,REAL16', //TD
    'paints.white.count_liters': 'DB2,REAL66',
    'paints.white.valve_open': 'DB2,X80.7',
    'paints.white.max_level': 'DB2,X1.1',
    'paints.white.min_level': 'DB2,X0.4',

    'paints.black.refill': 'DB2,X82.4', //TD
    'paints.black.current_volume': 'DB3,REAL12', //TD
    'paints.black.count_liters': 'DB2,REAL62',
    'paints.black.valve_open': 'DB2,X80.6',
    'paints.black.max_level': 'DB2,X1.1',
    'paints.black.min_level': 'DB2,X0.3',

    'cleaning_substance.refill': 'DB2,X82.0', //TD
    'cleaning_substance.current_volume': 'DB3,REAL20', //TD
    'cleaning_substance.valve_open': 'DB2,X78.5',
    'cleaning_substance.max_level': 'TODO',
    'cleaning_substance.min_level': 'TODO',
    'cleaning_substance.cleaning_time': 'DB2,INT364',
    'cleaning_substance.cleaning_time_remaining': 'DB2,INT382',

    'mixing_tank.valve_open': 'DB2,X340.2',
    'mixing_tank.valve_open_read': 'DB2,X80.1',

    'mixing_tank.current_volume': 'DB3,REAL24',
    'mixing_tank.volume_to_gain': 'TODO',
    'mixing_tank.time_seconds': 'DB2,INT342',
    'mixing_tank.time_seconds_remaining': 'DB2,INT356',

    'alarm.0.safety_switch.date': 'DB1,DTL0',
    'alarm.0.safety_switch.message': 'DB1,S12.256',
    'alarm.0.safety_switch.error_code': 'DB1,S268.256',
    'alarm.0.safety_switch.switcher_state': 'DB1,X780.0'
}

module.exports = variablesMapping