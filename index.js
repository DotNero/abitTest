require('dotenv').config()
const pg = require('pg');
const express = require('express');
const axios = require('axios');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')

const client = new pg.Client({
    host: '127.0.0.1',
    port: 5334,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
})


const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await client.connect()
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()