const express = require('express');
const Contenedor = require('./contenedor');
const app = express();
const port = 8080;

const server = app.listen(process.env.port || port, () => {
    console.log(`server listening on port ${port}`);
})

server.on('error', err => console.log(`error: ${err}`));

const products = new Contenedor ('products.txt');

app.get('/productos', async (req, res) => {
    const productos = await products.getAll();
    res.send(productos);
})


