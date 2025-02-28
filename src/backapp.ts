import express from 'express';
import {Producto}  from './models/producto'; 
const app = express();
const productos: Producto[] = [
  { nombre: "Laptop", precio: 1200, cantidad: 10 },
  { nombre: "Mouse", precio: 25, cantidad: 50 },
  { nombre: "Teclado", precio: 405, cantidad: 30 },
  { nombre: "Monitor", precio: 300, cantidad: 15 },
  { nombre: "Auriculares", precio: 80, cantidad: 20 },
];
 
/*  DotEnv  */
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
 
app.get('/', (req, res) => {
  res.json(productos);
});
 
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});