const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/*",], // the base api route you can change it
    createProxyMiddleware({
      target: "http://localhost:3000", // the local server endpoint 
    })
  );
};