const handler = {}

handler.sampleHandle = (requistProperties, callback) => {
    console.log(requistProperties)

    callback(200, {
        message: 'This is a sample url'
    })
}

module.exports = handler;