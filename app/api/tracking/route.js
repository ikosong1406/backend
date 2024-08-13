import { NextResponse } from "next/server";
import Order from "../../../models/Order"; // Adjust path as necessary

export const POST = async (req) => {
  try {
    const { orderId } = await req.json(); // Parse JSON body

    const order = await Order.findById(orderId);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
