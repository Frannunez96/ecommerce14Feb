const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    stock: { type: Number, required: true },
    baje: { type: Boolean, default: false } 
});

module.exports = mongoose.model("Producto", ProductoSchema);
