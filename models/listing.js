const mongoose = require("mongoose");
const Schema = mongoose.Schema

const listingSchema = new Schema({
    title: String,
    description: String,
    image: {
        type: String,
        set: (v) => v === "" ? "https://www.freepik.com/free-ai-image/bengal-tiger-staring-beauty-nature-captured-generated-by-ai_47192171.htm#fromView=keyword&page=1&position=1&uuid=9dc15cd4-3b67-4e4c-8208-61cd0b9712c6&query=Zoology" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;