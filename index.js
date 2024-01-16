const express=require('express')
const { connect } = require('./config/db')
const { jobRouter } = require('./routes/job.route')
const app=express()
require('dotenv').config()
app.use(express.json())

app.use('/api',jobRouter)

app.listen(process.env.Port, async()=>{
    try {
        await connect
        console.log('Connected to Database');
    } catch (err) {
        console.log(err.message);
    } console.log(`Server is running on Port ${process.env.Port}`);
})