import { NextResponse } from "next/server";
import { sendResetPasswordEmail } from "@/lib/mail"; // Function to send emails
import crypto from "crypto";
import { DATABASE_URL, NEXT_PUBLIC_APP_URL } from "@/config";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    // Generate a secure reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = new Date(Date.now() + 3600000); // 1-hour expiry

    // ✅ Store reset token in the database
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry: tokenExpiry,
      },
    });

    // Send reset password email
    const resetLink = `${NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;
    await sendResetPasswordEmail(email, resetLink);

    return NextResponse.json({ message: "Password reset link sent!" }, { status: 200 });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
