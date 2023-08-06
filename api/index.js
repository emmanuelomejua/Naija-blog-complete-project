'use strict';

require('dotenv').config()

const express = require('express')
const { json, urlencoded } = express

const morgan = require('morgan')
const cors = require('cors')
const { log, error } = require('console')
const path = require('path')

//import routes
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')
const categoryRoute = require('./routes/categoryRoute')

//bind with http server
const app = express()

//DB connection
const connectDB = require('./config/db')

//middlewares
app.use(morgan('common'))
app.use(json())
app.use(urlencoded({
    extended: true, 
    limit: '20mb'
}))

//cross-origin resource
app.use(cors({
    origin: '*',
    methods: ['PUT', 'GET', 'UPDATE', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

//routes use
app.use('/blog', authRoute )
app.use('/blog/user', userRoute )
app.use('/blog/post', postRoute )
app.use('/blog/category', categoryRoute)

//connection to port
const port = process.env.PORT

app.listen(port, (err) => {
    if(!err){
        log(`Server active at ${port}`)
    } else {
        error(err)
    }
})