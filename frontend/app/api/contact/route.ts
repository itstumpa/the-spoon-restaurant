import type { ApiResponse, ContactFormData } from "@/types";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse>> {
  try {
    const body: ContactFormData = await request.json();

    // Simple server-side validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 },
      );
    }

    // Log the submitted data in development
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", {
        name: body.name,
        email: body.email,
        phone: body.phone,
        subject: body.subject,
        message: body.message,
      });
    }

    // Mock success — in production, this would send an email or save to a database
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }
}
