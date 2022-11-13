
// Dependences
const url = require('url')
const { StringDecoder } = require('string_decoder')
const routes = require('../routes')
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandlers')

const handler = {}

handler.handleReqRes = (req, res) => {
    //request Handeling
    const parseUrl = url.parse(req.url, true)
    const path = parseUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const queryStringObject = parseUrl.query
    const headersObjects = req.headers

    const requistProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObjects
    }

    const decoder = new StringDecoder('utf-8')
    let realData = ''

    const choosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    choosenHandler(requistProperties, (statusCode, payload) => {
        statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
        payload = typeof (payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload)

        //Return The final Response
        res.writeHead(statusCode);
        res.end(payloadString);
    })

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData)
        // response Handeling
        res.end("Hello programmers")
    })
}

module.exports = handler