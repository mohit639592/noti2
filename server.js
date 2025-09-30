const app = require("./src/app");
const connect = require("./src/database/db")
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("SERVER CONNECTED SUCESS");
    connect();
})