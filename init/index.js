
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Conneted to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongoUrl);
}


 const inDB = async () =>{
    await Listing.insertMany(initData.data);
    //await Listing.deleteMany({})
    console.log("data Inserted Successfully");
 }

 inDB();