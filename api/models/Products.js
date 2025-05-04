const mongoose = requiere("mongoose");

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { Type: Number, required: true },
  comment: { Type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },

  reviews: [reviewSchema],
});

module.exports = mongoose.model("Product", productSchema);
