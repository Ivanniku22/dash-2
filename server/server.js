const express = require("express");
const app = express();
const { Pool } = require('pg');
const cors = require('cors');
app.use(cors());

require('dotenv').config();
const PORT = process.env.PORT;

const bodyparser = require("body-parser");
app.use(bodyparser.json())
// DB code start //
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'teraim',
    password: '9677',
    port: 5432,
});
app.get('/products', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM product_tbl');
        const products = result.rows;
        client.release();
        res.json(products);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error retrieving products');
    }

});
// DB code end //

app.get("/get", (request, response) => {
    response.send("hi I am mani");
});
app.post("/post", (request, response) => {
    const name = request.body;
    console.log("<><>", request.body);

    response.send("hi I am BE server");
});

//port is run //
app.listen(PORT, () => {
    console.log(`this server is listening the port: ${PORT}`);
});