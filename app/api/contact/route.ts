import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// The verified "from" address on your Resend domain.
// Replace with your actual verified domain email once set up at https://resend.com/domains
// Until then, keep using onboarding@resend.dev for testing.
const FROM_ADDRESS = "VriddhiAI <onboarding@resend.dev>";
const TO_ADDRESS = "vriddhiai55@gmail.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, project, message } = body as {
    name: string;
    email: string;
    project: string;
    message: string;
  };

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const projectLabel = project || "General Inquiry";

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [TO_ADDRESS],
    replyTo: email,
    subject: `New Inquiry — ${name} (${projectLabel})`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d1a; color: #e5e7eb; border-radius: 16px; overflow: hidden; border: 1px solid rgba(139,92,246,0.2);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 32px 40px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 900; color: white; letter-spacing: -0.03em;">VriddhiAI</h1>
          <p style="margin: 6px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">New project inquiry received</p>
        </div>

        <!-- Body -->
        <div style="padding: 40px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(229,231,235,0.5); font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600; color: #f9fafb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(229,231,235,0.5); font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600; color: #a78bfa;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(229,231,235,0.5); font-size: 13px;">Project Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600; color: #f9fafb;">${projectLabel}</td>
            </tr>
          </table>

          <div style="margin-top: 28px;">
            <p style="color: rgba(229,231,235,0.5); font-size: 13px; margin: 0 0 10px;">Message</p>
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; color: #e5e7eb; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06);">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #7c3aed, #4f46e5); color: white; font-weight: 600; font-size: 14px; border-radius: 10px; text-decoration: none;">Reply to ${name}</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 20px 40px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.05);">
          <p style="margin: 0; color: rgba(229,231,235,0.3); font-size: 12px;">Sent via the VriddhiAI contact form &bull; vriddhri-ai-yh23.vercel.app</p>
        </div>
      </div>
    `,
    tags: [
      { name: "source", value: "contact-form" },
      { name: "project_type", value: project || "general" },
    ],
  });

  if (error) {
    console.error("[Resend Error]", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}
