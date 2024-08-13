import { NextResponse } from "next/server";
import Product from "../../../models/Product"; // Adjust the path based on your project structure

export const POST = async (req) => {
  try {
    const { productId } = await req.json(); // Parse JSON body

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Product deleted" });
  } catch (err) {
    console.error("Error deleting product:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
