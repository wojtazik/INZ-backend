const express = require('express')
const SocketIO = require('socket.io')
const nodes7 = require('nodes7')
const MixerWorkingController = require('./communication/mixer_working.websocket')
const useDataRefresher = require('./communication/useDataRefresh')
const variablesMapping = require('./communication/dataMapper/variableAdresess')

const ControllerChoosenColorCode = require('./communication/choosen_color_code.websocket')
const ControllerPaints = require('./communication/paints.websocket')
const ControllerCleaningSubstance = require('./communication/cleaning_substance.websocket')
const ControllerMixingTank = require('./communication/mixing_tank.websocket')
const ControllerProcessRunning = require('./communication/process_running.websocket')


const app = express()
const port = 3001
const plcConnection = new nodes7()
let plcConnectedSuccessfully = false

// https://github.com/plcpeople/nodeS7/blob/12d77c8488b6d4dcde337faa8194c785af0e42cb/nodeS7.js#L2313

app.get('/', (req, res) => {
    res.send('Hello world')
})

const server = app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port)
})

const io = SocketIO(server, { cors: { origin: '*' } })

plcConnection.initiateConnection({
    port: 102,
    host: '192.168.0.1',
    rack: 0,
    slot: 1
}, () => {
    plcConnectedSuccessfully = true
    plcConnection.setTranslationCB((tag) => variablesMapping[tag])

    plcConnection.addItems(Object.keys(variablesMapping))
})

io.on('connection', (socket) => {
    console.info(`Connection success, ready to getting data...`)
        // if (plcConnectedSuccessfully) {
    useDataRefresher(socket, plcConnection)
        // }

    MixerWorkingController(socket, plcConnection)
    ControllerChoosenColorCode(socket, plcConnection)
    ControllerPaints(socket, plcConnection)
    ControllerCleaningSubstance(socket, plcConnection)
    ControllerMixingTank(socket, plcConnection)
    ControllerProcessRunning(socket, plcConnection)
})