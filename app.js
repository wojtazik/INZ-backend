const express = require('express')
const SocketIO = require('socket.io')

const MixerWorkingController = require('./communication/mixer_working.websocket')

const app = express()
const port = 3001

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/', (req, res) => {
    res.send('Hello world')
})

const server = app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port)
})

const io = SocketIO(server, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.info(`Connection success, ready to getting data...`)

    MixerWorkingController(socket)
        // socket.emit('message', {
        //     aaa: 'bbb'
        // })

    // socket.on('message', (eee) => {
    //     console.log(eee)
    //     socket.emit('test', {
    //         'test': 'test'
    //     })
    // })
})