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
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    // Mock success — in production, this would send an email or save to a database
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll get back to you soon.",
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
