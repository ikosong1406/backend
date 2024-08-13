import { NextResponse } from "next/server";
import Product from "../../../models/Product"; // Adjust path as necessary

export const POST = async (req) => {
  try {
    const {
      productId,
      name,
      about,
      description,
      price,
      category,
      isBestSeller,
      isNewArrival,
    } = await req.json(); // Parse JSON body

    const updateData = {};

    if (typeof name === "string" && name.trim() !== "") {
      updateData.name = name.trim();
    }
    if (typeof about === "string" && about.trim() !== "") {
      updateData.about = about.trim();
    }
    if (typeof description === "string" && description.trim() !== "") {
      updateData.description = description.trim();
    }
    if (typeof price === "number") {
      updateData.price = price;
    }
    if (typeof category === "string" && category.trim() !== "") {
      updateData.category = category.trim();
    }
    if (typeof isBestSeller === "boolean") {
      updateData.isBestSeller = isBestSeller;
    }
    if (typeof isNewArrival === "boolean") {
      updateData.isNewArrival = isNewArrival;
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      updateData,
      { new: true } // Return the updated document
    );

    return NextResponse.json({
      message: "Product updated successfully",
      status: "ok",
      updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
};
