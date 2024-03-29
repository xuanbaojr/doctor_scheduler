const scheduleRoute = require('./scheduleRoute.js')

function routesInit(app) {
    app.use("/", scheduleRoute )
}

module.exports = routesInit