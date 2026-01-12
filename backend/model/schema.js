const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    id: { type: String },
    iname: { type: String, required: true }
  },
 
);

const ToppingSchema = new mongoose.Schema(
  {
    id: { type: String },
    tname: { type: String, required: true },
    price: { type: Number, required: true }
  },
 
);

const PizzaSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      enum: ["veg", "nonveg"],
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    image: {
      type: String
    },

    description: {
      type: String
    },

    ingredients: {
      type: [IngredientSchema],
      default: []
    },

    topping: {
      type: [ToppingSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Pizza", PizzaSchema);
