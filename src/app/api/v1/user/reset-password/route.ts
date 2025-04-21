import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();
console.log(token, newPassword );

    if (!token || !newPassword) {
      return NextResponse.json({ message: "Token and new password are required!" }, { status: 400 });
    }

    // Find user by reset token
    const user = await prisma.user.findFirst({
      where: { resetToken: token, resetTokenExpiry: { gt: new Date() } },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid or expired token!" }, { status: 400 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password and clear reset token
    await prisma.user.update({
      where: { user_id: user.user_id },
      data: { password: hashedPassword, resetToken: null, resetTokenExpiry: null },
    });

    return NextResponse.json({ message: "Password reset successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Reset Password Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
