import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Orders from "../../../models/Order"; // Adjust path as necessary
import { sendMail } from "../../../utils/mail"; // Adjust path as necessary
import { OrderConfirmation } from "../../../templates/orderTemplate"; // Adjust path as necessary

export const POST = async (req) => {
  try {
    await connect();

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      street,
      city,
      state,
      zipCode,
      specialNote,
      products,
      deliveryFee,
      subTotal,
      discount,
      total,
    } = await req.json(); // Parse JSON body

    const newOrder = await Orders.create({
      customer: {
        firstName,
        lastName,
        email,
        phoneNumber,
        street,
        city,
        state,
        zipCode,
        specialNote,
      },
      products,
      deliveryFee,
      subTotal,
      discount,
      total,
    });

    const htmlContent = OrderConfirmation(
      firstName,
      products,
      subTotal,
      deliveryFee,
      total,
      newOrder._id
    );

    // Send order confirmation email
    await sendMail(
      newOrder.customer.email,
      "Order Confirmation",
      "",
      htmlContent
    );

    return NextResponse.json(
      {
        status: "ok",
        data: "Order Created",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error creating order:", err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
};
