import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  status: { type: String, default: "processing" },
  date: { type: Date, default: Date.now },
  customer: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    specialNote: { type: String },
  },
  products: [
    {
      name: { type: String },
      quantity: { type: Number },
      price: { type: Number },
      mainImage: { type: String },
      selectedSize: { type: String },
      selectedColor: { type: String },
    },
  ],
  deliveryFee: { type: Number },
  subTotal: { type: Number },
  discount: { type: Number },
  total: { type: Number },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
