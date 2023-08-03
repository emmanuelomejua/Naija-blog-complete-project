'use strict';

require('dotenv').config()

const mongoose = require('mongoose')
const {log, error} = require('console')

const {set, connect } = mongoose

set('strictQuery', true)

const db_url = process.env.DB_URI 

connect(db_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=> log('DB connection successful!'))
.catch((err)=> error(err.message))
