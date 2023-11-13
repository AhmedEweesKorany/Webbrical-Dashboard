const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)

// key here must be the name of the input in html form
const myData = new Schema({
  firstname: String,
  lastname: String,
  email:String,
  phone: Number,
  age:Number,
  country: String,
  gender: String
},{timestamps: true});  


// Create a model based on that schema
const User = mongoose.model("customers", myData);




// export the model
module.exports = User












