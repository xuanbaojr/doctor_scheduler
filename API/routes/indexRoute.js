const scheduleRoute = require("./scheduleRoute.js");
const chatRoute = require("./chatRoute.js");
const userRoute = require("./userRouter.js");
const threadRouter = require("./threadsRoute.js");
const customerRoute = require("./customerRoute.js");
const examinationRoute = require("./examinationRouter.js")
const profileRoute = require("./profileRouter.js")

function routesInit(app) {
  app.use("/", scheduleRoute);
  app.use("/", chatRoute);
  app.use("/", userRoute);
  app.use("/", threadRouter);
  app.use("/", customerRoute);
  app.use("/", examinationRoute)
  app.use("/", profileRoute)
  
}

module.exports = routesInit;
