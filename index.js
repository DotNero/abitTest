require('dotenv').config()
// const pg = require('pg');
const express = require('express');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')


// var connection = mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password: "root",
// })

// const client = new pg.Client({
//     host: "localhost",
//     port: 5432,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
// })


const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        // await client.connect()
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()