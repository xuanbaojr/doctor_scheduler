const scheduleRoute = require('./scheduleRoute.js')
const chatRoute = require('./chatRoute.js')

function routesInit(app) {
    app.use("/", scheduleRoute )
    app.use("/", chatRoute)
}

module.exports = routesInit