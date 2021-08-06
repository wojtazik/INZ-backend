const refreshDataMapper = require("./dataMapper/refreshDataMapper")

function useDataRefresher(socket, plcConnection) {
    const dataRefresher = setInterval(() => {
        socket.emit('refresh.data', {
            success: true,
            data: {
                choosen_color_code: '#FF00FF'
            }
        })

        // plcConnection.readAllItems((error, values) => {
        //     if (error) {
        //         console.error(error)
        //     } else {
        //         socket.emit('refresh.data', {
        //             success: true,
        //             data: refreshDataMapper(values)
        //         })
        //     }
        // })
    }, 200)

    socket.on('disconnect', () => {
        clearInterval(dataRefresher)
    })
}

module.exports = useDataRefresher