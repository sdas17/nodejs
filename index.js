const express = require('express');
let server = express();
const db=require('../nodejs/configuration/dbconfiguration');
const bodyParser = require('body-parser');

require('dotenv').config();

// middle ware
const demoMiddleware= (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next()
}
server.use(demoMiddleware); 

server.get('/',function (req,res){
    res.send('welcome to our new hotels')
})

server.use(bodyParser.json()); 

const personRoute= require('../nodejs/ROUTE/Persondemo');
server.use('/persons',personRoute);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server is started on http://localhost:' + port);
});
