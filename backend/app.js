const express = require('express');
const app = express();
const cors = require('cors'); // need to install
const dotenv =require("dotenv") // need to install 
const bodypraser=require("body-parser") // same
const fileupload=require("express-fileupload"); // same
const errorMiddleware=require("./middleware/error")  // Todo
dotenv.config({path:'config/config.env'})    
const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
        origin:["http://localhost:5173"],
        credentials:true
    }
));
app.use(bodypraser.urlencoded({extended:true}))
app.use(fileupload());
const User=require("./routes/UserRoutes");
const Blog =require("./routes/BlogRoutes");
app.use("/api",User);
app.use("/api",Blog);
app.get('/', (req, res) => {
    res.send('Backend is working!')
  })

app.use(errorMiddleware); // add a middleware here
 module.exports=app;

 