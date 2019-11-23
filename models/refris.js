const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//marca color tamaño, numero de puertas
var refriSchema = Schema({
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    nPuertas: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("refris", refriSchema);