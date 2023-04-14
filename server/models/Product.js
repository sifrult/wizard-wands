// this is now replacing wands
// core
// felxabilites
// length
// colortype
// woodtype

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  core: {
    type: String,
    required: true,
    //possible choice - y/n
  },
  flexibility: {
    type: String,
    required: true,
    choices: [
      "Quite Bendy",
      "Fairly Bendy",
      "Very Flexible",
      "Quite Flexible",
      "Surprisingly Swishy",
      "Swishy",
      "Slightly Springy",
      "Supple",
      "Reasonably Supple",
      "Pliant",
      "Brittle",
      "Hard",
      "Solid",
      "Stiff",
      "Rigid",
      "Unbending",
      "Slightly Yielding",
      "Unyielding",
    ],
  },
  length: {
    type: Number,
    min: 9.5,
    max: 14.5,
    required: true,
  },
  woodtype: {
    type: String,
    required: true,
    choices: [
      "Acacia",
      "Alder",
      "Apple",
      "Ash",
      "Aspen",
      "Beech",
      "Black Walnut",
      "Blackthorn",
      "Cedar",
      "Cherry",
      "Chestnut",
      "Cypress",
      "Dogwood",
      "Ebony",
      "Elder",
      "Elm",
      "English Oak",
      "Fir",
      "Hawthorn",
      "Hazel",
      "Holly",
      "Hornbeam",
      "Larch",
      "Laurel",
      "Maple",
      "Pear",
      "Pine",
      "Poplar",
      "Red Oak",
      "Redwood",
      "Rowan",
      "Silver Lime",
      "Spruce",
      "Sycamore",
      "Vine",
      "Walnut",
      "Willow",
      "Yew",
    ],
  },
  wandtype: {
    type: String,
    required: true,
    choices: [
      "classic",
      "crookedSpiral",
      "natural",
      "notched",
      "ringed",
      "softSpiral",
      "spiral",
      "stalk",
    ],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
