const refreshDataMapper = require("./dataMapper/refreshDataMapper")

function useDataRefresher(socket, plcConnection) {
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
    }, 200)

    socket.on('disconnect', () => {
        clearInterval(dataRefresher)
    })
}

module.exports = useDataRefresher