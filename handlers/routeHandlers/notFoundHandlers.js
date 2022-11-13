
const handler = {}

handler.notFoundHandler = (requistProperties, callback) => {
    console.log(requistProperties)

    callback(404, {
        message: 'Your Requested URL was not found'
    })
}

module.exports = handler