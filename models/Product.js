import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String },
  about: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  vendor: { type: String },
  mainImage: { type: String },
  additionalImages: [String],
  availableColors: [String],
  availableSize: [String],
  brand: { type: String },
  isBestSeller: { type: Boolean },
  isNewArrival: { type: Boolean },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
