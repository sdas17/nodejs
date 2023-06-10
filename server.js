//import
// 


import express from "express";
import dotenv from 'dotenv';
import colors from 'colors'
import cors from 'cors';
import morgan from "morgan";
import connectDB from './config/db.js';
import testroutes from './routers/testroutes.js';

//Dot env config
dotenv.config();
//rest

//MONGODB CONNECTION
connectDB()
const app = express();


//middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/v1/test', testroutes);

//listen
app.listen(process.env.Port, () => {
    console.log('server', `${process.env.DEV_MODE} ${process.env.Port}`.bgCyan.yellow);
})
