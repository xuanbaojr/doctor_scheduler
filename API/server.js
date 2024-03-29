const routesInit = require('./routes/indexRoute')


const cors = require('cors')
const express = require("express")
const app = express();
app.use(cors())

routesInit(app)


app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});


// npm install @supabase/supabase-js