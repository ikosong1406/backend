import { NextResponse } from "next/server";
import Order from "../../../models/Order";
import connect from "@/lib/db";

export const GET = async () => {
  try {
    await connect();
    const orders = await Order.find();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching orders");
  }
};
