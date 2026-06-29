import { NextResponse } from "next/server";
import type { ReservationFormData, ApiResponse } from "@/types";

export async function POST(
  request: Request
): Promise<NextResponse<ApiResponse>> {
  try {
    const body: ReservationFormData = await request.json();

    // Simple server-side validation
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.date ||
      !body.time ||
      !body.guests
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Mock success — in production, this would save to a database
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your table has been reserved.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
