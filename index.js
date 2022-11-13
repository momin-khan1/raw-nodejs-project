/*
* Title: Uptime Monitoring Application
* Description: A Restful API monitor up or down time of user defink links
* Author: Momin Khan
* Start Date: 13/11/2022
 */

// Dependences
const http = require('http')
const { handleReqRes } = require('./helpers/handleReqRes')


// App object - Module Scaffolding
const app = {}

// Configiration
app.config = {
    port: 5000
}

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening The Port ${app.config.port}`)
    })
}

// Handle Request Response
app.handleReqRes = handleReqRes


// Start The Server
app.createServer();