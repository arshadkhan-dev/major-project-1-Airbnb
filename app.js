
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing");
const path = require("path");
const mehtodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const WrapAsync = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {ListingSchema} = require("./schema.js");

const validateListing = (req,res,next)=>{
    let {error} = ListingSchema.validate(req.body);
    if(error){
    let errMsg = error.details.map((el) => el.message).join(","); 
    throw new ExpressError(400,errMsg);
   }
   else{
    next();
   }
}

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

app.post("/listings",validateListing, WrapAsync(async (req,res,next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

app.get("/listings/:id/edit", WrapAsync(async (req,res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("edit.ejs",{listing}); 
}));

app.put("/listings/:id",validateListing, WrapAsync(async (req,res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id,{...req.body.listing});
        res.redirect(`/listing/${id}`);
}));

app.delete("/listing/:id/delete", WrapAsync(async (req,res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));


app.get("/listing/:id", WrapAsync(async (req,res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("show.ejs",{listing});
}));

app.use((req,res,next) => {
    next(new ExpressError(404,"Page Not Found"));
});

app.use((err,req,res,next) => {
    let {statusCode,message} = err;
    res.status(statusCode).render("error.ejs",{message});
});

app.listen(port,() => {
    console.log("app is listening");
});