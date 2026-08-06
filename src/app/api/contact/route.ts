import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, contactNumber, businessName, businessNiche, message } = body;

    if (!firstName || !email || !businessName || !businessNiche) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const googleScriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        { error: "Google Sheets integration not configured" },
        { status: 500 }
      );
    }

    const now = new Date();
    const date = now.toLocaleDateString("en-US");
    const time = now.toLocaleTimeString("en-US");

    const payload = {
      date,
      time,
      firstName,
      email,
      contactNumber: contactNumber || "",
      businessName,
      businessNiche,
      message: message || "",
    };

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("Google Sheets error:", responseText);
      throw new Error(`Google Sheets returned ${response.status}`);
    }

    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      console.error("Invalid JSON from Google Sheets:", responseText);
      throw new Error("Invalid response from Google Sheets");
    }

    return NextResponse.json({
      success: true,
      message: "Your form has been submitted successfully. We will contact you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
