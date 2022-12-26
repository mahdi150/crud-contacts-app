const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ContactRoute = require("./Component/Routes/Contact.route")
const dotenv = require("dotenv").config();
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECT);
mongoose.connection.on('connected',()=>{
    console.log("connected to DB ")
})
mongoose.connection.on('error',(err)=>{
    console.log("connection failed")
})
app.use("/api/contact",ContactRoute);
app.listen(process.env.APP_PORT , ()=>{
    console.log(`server listening on port ${process.env.APP_PORT}` );
})