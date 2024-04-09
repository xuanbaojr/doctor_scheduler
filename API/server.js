const routesInit = require('./routes/indexRoute')


const cors = require('cors')
const express = require("express")
const app = express();
app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors())

routesInit(app)


app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});


// npm install @supabase/supabase-js