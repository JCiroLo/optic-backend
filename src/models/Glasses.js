const { Schema, model } = require("mongoose");

const glassesSchema = new Schema({
    brand: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true
    },
    shape: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = model("Glasses", glassesSchema);