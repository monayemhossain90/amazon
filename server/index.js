const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001
const authRoute = require("./routes/authRoute");
const bodyParser = require("body-parser");



// db connection
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use("/api/user",authRoute)

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})