const express = require('express')
const app=require("./app");
const dotenv =require("dotenv")
app.get('/', (req, res) => {
  res.send('Asslam O Alaikum');
})
 let port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})