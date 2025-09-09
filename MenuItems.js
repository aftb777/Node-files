const mongoose = require('mongoose');

const menuItems = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    taste : {
        type : String,
        enum : ["Sweet", "Spicy", "Sour"],
        required : true
    },
    is_drink : {
        type : Boolean,
        default : false
    },  
    ingredeints : {
        type : String,
        default : []
    },
    num_sales : {
        type : Number,
        default : 0
    },
})

const MenuItems = mongoose.model("menu", menuItems)

module.exports = MenuItems;