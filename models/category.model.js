const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    active : {
        type : Boolean,
        default : true
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Category', categorySchema);