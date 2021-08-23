//Require Express

const express = require('express');

const app = express()

//parse data
// require logger middleware
const logger = require ('./middleware/logger')
// use middleware
app.use(logger)


//serve the static file
app.use(express.static(__dirname + "/public"))
//strating the server
const PORT= 4000;
app.listen(PORT,(err)=>{

    err
    ?
    console.log(err)
    :
    console.log(`the server is running port ${PORT}...`);


})