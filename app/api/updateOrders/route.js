import { NextResponse } from "next/server";
import Orders from "../../../models/Order"; // Adjust the path based on your project structure

export const POST = async (req) => {
  try {
    const { orderId, status } = await req.json(); // Parse JSON body

    // Filter out empty or null values from the update data
    const updateData = {};
    if (typeof status === "string" && status.trim() !== "") {
      updateData.status = status.trim();
    }

    const updatedOrder = await Orders.findOneAndUpdate(
      { _id: orderId },
      updateData,
      { new: true } // Return the updated document
    );

    return NextResponse.json({
      message: "Order updated successfully",
      status: "ok",
      updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
