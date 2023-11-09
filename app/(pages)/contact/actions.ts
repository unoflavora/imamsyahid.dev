"use server";
import { EmailTemplate } from "@/components/email/template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(currentState: any, formData: FormData) {
  const message = formData.get("text") as string;
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;

  console.log(name, email, message);

  try {
    const data = await resend.emails.send({
      from: "Imam <hello@imamsyahid.dev>",
      to: [email],
      subject: "Your message has been received!",
      react: EmailTemplate({ firstName: name }),
      text: "Your message has been received!",
    });

    await resend.emails.send({
      from: "notification@imamsyahid.dev",
      to: ["hello@imamsyahid.dev"],
      subject: `<Contact> ${name}`,
      text: message + ` from: ${email}`,
    });

    NextResponse.json({ message: data });
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: error });
  }
}
