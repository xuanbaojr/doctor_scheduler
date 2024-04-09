const scheduleRoute = require('./scheduleRoute.js')
const chatRoute = require('./chatRoute.js')
const threads = require('./threadsRoute.js')

function routesInit(app) {
    app.use("/", scheduleRoute )
    app.use("/", chatRoute)
    app.use("/", threads)
}

module.exports = routesInit