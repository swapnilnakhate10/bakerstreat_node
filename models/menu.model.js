const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
        default : 10
    },
    quantity : {
        type : Number,
        default : 1
    },
    description : {
        type : String
    },
    categoryId : {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    active : {
        type : Boolean,
        default : true
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Menu', menuSchema);