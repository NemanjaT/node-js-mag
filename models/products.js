var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var regexSlug =       new RegExp(/[^a-zA-Z\d]/g),
    regexDimensions = new RegExp(/\d+.?\d*x\d+\.?\d*x\d+\.?\d*/);

var productsSchema = new Schema({
    manufacturer: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String },
    basicInfo: {
        weight: { type: Number },
        dimensions: { type: String, match: regexDimensions },
        resolution: { type: String },
        processor: { type: String, required: true },
        battery: { type: String, default: 'no info' },
        screenSize: { type: Number, required: true }
    },
    backCamera: {
        pixel: { type: Number },
        resolution: { type: String },
        video: { type: String }
    },
    frontCamera: {
        pixel: { type: Number },
        resolution: { type: String },
        video: { type: String }
    },
    componentInfo: {
        ram: { type: Number, required: true },
        hdd: { type: Number },
        os: { type: String, required: true },
        osVersion: { type: String }
    },
    mainImage: { type: String },
    price: { type: Number, default: 0, required: true }
});

mongoose.model('products', productsSchema);

