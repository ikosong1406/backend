import { NextResponse } from "next/server";
import Products from "../../../models/Product";
import connect from "@/lib/db";

export const GET = async () => {
  try {
    await connect();
    const product = await Products.find();
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse("Error fetching orders");
  }
};
