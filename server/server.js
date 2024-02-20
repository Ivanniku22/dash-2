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
// DB code end //
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
// add new product 
app.post('/product_smit', async (req, res) => {
    const { id, cat_id, part_no, short_part_no, ah, stock_qty, dlr_price, mrp, wnty_cat_id, p_status } = req.body;

    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO product_tbl (id,cat_id, part_no, short_part_no, ah, stock_qty, dlr_price, mrp, wnty_cat_id,p_status) VALUES ($1, $2, $3, $4, $5 ,$6, $7, $8 ,$9,$10)', [id, cat_id, part_no, short_part_no, ah, stock_qty, dlr_price, mrp, wnty_cat_id, p_status]);
        client.release();
        res.status(200).send('Products submitted successfully');
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Products not submitted');
        console.log(client.query)
    }
});
// DELETE endpoint
app.delete('/productdlt/:id', async (req, res) => {
    const pid = req.params.pid;

    try {
        const client = await pool.connect();
        await client.query('DELETE FROM product_tbl WHERE id = $1', [pid]);
        client.release();
        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.put('/producetedit/:id', async (req, res) => {
    const id = req.params.id;
    const { updatedUser } = req.body;

    try {
        const client = await pool.connect();
        await client.query('UPDATE your_table SET product_tbl = $1 WHERE id = $2', [updatedUser, id]);
        client.release();
        res.json({ message: 'Value updated successfully' });
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


//port is run //
app.listen(PORT, () => {
    console.log(`this server is listening the port: ${PORT}`);
});