//import
// 


import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'


//Dot env config
dotenv.config();
//rest
const app = express();

//routes
app.get('/', (req, res) => {
    res.send('<h1>welcome job portal</h1>')
})

//listen
app.listen(process.env.Port, () => {
    console.log('server', `${process.env.DEV_MODE} ${process.env.Port}`.bgCyan.yellow);
})
