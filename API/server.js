require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const routesInit = require("./routes/indexRoute");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get(
  "/getUserId",
  ClerkExpressWithAuth({
    // Add options here
    // See the Middleware options section for more details
  }),
  (req, res) => {
    res.json(req.auth);
    console.log(req.auth.userId);
  }
);
routesInit(app);

var server = app.listen(3000, { cors: true }, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://192.168.1.208" + ":" + port);
}

// npm install @supabase/supabase-js
