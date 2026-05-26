
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing");
const path = require("path");
const mehtodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.use(mehtodOverride("_method"));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

main().then(() => {
    console.log("Conneted to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongoUrl);
}

const port = process.env.port || 8080;

app.listen(port,() => {
    console.log("app is listening");
});

app.get("/home",(req,res) => {
    res.redirect("/listings");
});


app.get("/listings", async (req,res) => {
    let AllListings = await Listing.find({});
    res.render("index.ejs",{AllListings});
});


app.get("/listings/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/listings", async (req,res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    
});

app.get("/listings/:id/edit", async (req,res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("edit.ejs",{listing}); 
});

app.put("/listings/:id", async (req,res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id,{...req.body.listing});
        res.redirect(`/listing/${id}`);
});

app.delete("/listing/:id/delete", async (req,res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});


app.get("/listing/:id", async (req,res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("show.ejs",{listing});
});