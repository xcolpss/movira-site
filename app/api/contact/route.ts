// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    // honeypot (bots)
    if (String(data.get("_honey") || "")) {
      return NextResponse.redirect(new URL("/contact/thank-you", req.url), { status: 303 });
    }

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const budget = String(data.get("budget") || "");
    const company = String(data.get("company") || "");
    const timeline = String(data.get("timeline") || "");
    const links = String(data.get("links") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO;
    const FROM = process.env.CONTACT_FROM || "Movira <onboarding@resend.dev>";

    if (!RESEND_API_KEY || !TO || !FROM) {
      return NextResponse.json({ ok: false, error: "Missing env vars." }, { status: 500 });
    }

    const html = `
      <h2 style="margin:0 0 12px 0">New project brief — Movira</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 8px"><b>Name</b></td><td style="padding:4px 8px">${name}</td></tr>
        <tr><td style="padding:4px 8px"><b>Email</b></td><td style="padding:4px 8px">${email}</td></tr>
        <tr><td style="padding:4px 8px"><b>Service</b></td><td style="padding:4px 8px">${service}</td></tr>
        <tr><td style="padding:4px 8px"><b>Budget</b></td><td style="padding:4px 8px">${budget}</td></tr>
        <tr><td style="padding:4px 8px"><b>Company</b></td><td style="padding:4px 8px">${company}</td></tr>
        <tr><td style="padding:4px 8px"><b>Timeline</b></td><td style="padding:4px 8px">${timeline}</td></tr>
        <tr><td style="padding:4px 8px"><b>Links</b></td><td style="padding:4px 8px">${links}</td></tr>
      </table>
      <p style="margin:16px 0 6px 0"><b>Brief</b></p>
      <div>${message.replace(/\n/g, "<br/>")}</div>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email || undefined,
        subject: "New project brief — Movira",
        html,
      }),
    });

    // Ignore email errors for UX, but log JSON for you:
    if (!r.ok) {
      const err = await r.text();
      console.error("Resend error:", err);
    }

    // ✅ Always 303 so the browser does a GET to thank-you
    return NextResponse.redirect(new URL("/contact/thank-you", req.url), { status: 303 });
  } catch (e: any) {
    console.error("Contact route error:", e);
    return NextResponse.redirect(new URL("/contact/thank-you", req.url), { status: 303 });
  }
}
