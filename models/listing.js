
const mongoose = require("mongoose");

const Schema =  mongoose.Schema;

const ListingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        set:(v) => v === "" ? " " :v,
    },
    price:Number,
    location:String,
    country:String
});

const listing = mongoose.model("listing", ListingSchema);
module.exports = listing;