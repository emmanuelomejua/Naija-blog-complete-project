'use strict';

require('dotenv').config()

const express = require('express')
const { json, urlencoded } = express

const morgan = require('morgan')
const cors = require('cors')
const { log, error } = require('console')
const multer = require('multer')
const path = require('path')

//import routes
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')
const categoryRoute = require('./routes/categoryRoute')


const app = express()

//DB connection
const connectDB = require('./config/db')

//middlewares
app.use('/images', express.static(path.join(__dirname, '/images')))
app.use(morgan('common'))
app.use(urlencoded({extended: false}))
app.use(json())

//cross-origin resource
app.use(cors({
    origin: '*',
    methods: ['PUT', 'GET', 'UPDATE', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

//routes use
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (reqq, file, cb) => {
        cb(null, req.body.name)
    },
})

const upload = multer({storage: storage})
app.post('/blog/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded')
})

app.use('/blog', authRoute )
app.use('/blog/user', userRoute )
app.use('/blog/post', postRoute )
app.use('/blog/category', categoryRoute)

//connection to port
const port = process.env.PORT || 4003

app.listen(port, (err) => {
    if(!err){
        log(`Server active at ${port}`)
    } else {
        error(err)
    }
})