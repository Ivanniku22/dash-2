const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./Database.js");

app.use(cors());

require('dotenv').config();
const PORT = process.env.PORT;

const bodyparser = require("body-parser");
app.use(bodyparser.json())
 
//user top list
app.get('/TopBox', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('select * from dealer_tbl d LEFT JOIN order_tbl o ON o.dlr_id = d.id');
        const TopBox = result.rows;
        client.release();
        res.json(TopBox);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error retrieving products');
    }

});

// Get Products //
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

//Users Get method
app.get('/users', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('select * from employee_tbl');

        const products = result.rows;
        client.release();
        res.json(products);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error retrieving orders');
    }

});


// Orders Get method
app.get('/orders', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('select * from order_tbl o  JOIN user_tbl u on o.sales_e_id = u.user_e_id LEFT JOIN employee_tbl e ON e.id  = u.user_e_id');

        const products = result.rows;
        client.release();
        res.json(products);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error retrieving orders');
    }

});


//Dealers Get Method
app.get('/dealers', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM dealer_tbl');

        const products = result.rows;
        client.release();
        res.json(products);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error retrieving orders');
    }

});


//port is run //
app.listen(PORT, () => {
    console.log(`this server is listening the port: ${PORT}`);
});