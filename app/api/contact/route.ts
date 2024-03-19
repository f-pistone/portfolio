import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const req = await request.json();
  const { fullName, email, phone, message } = req;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let html = ``;
  html = `<div style="max-width: 800px; margin: 0px auto;">`;
  html += ` <h1 style=""margin-bottom: 5px;>New contact message</h1>`;
  html += ` <div style="border: 2px solid #9ca3af; border-radius: 6px; padding: 10px;">`;
  html += `   <div>`;
  html += `     <h2>Full Name</h2>`;
  html += `     <p style="font-size: 16px;">${fullName}</p>`;
  html += `   </div>`;
  html += `   <div>`;
  html += `     <h2>Email</h2>`;
  html += `     <p style="font-size: 16px;">${email}</p>`;
  html += `   </div>`;
  html += `   <div>`;
  html += `     <h2>Phone</h2>`;
  html += `     <p style="font-size: 16px;">${phone}</p>`;
  html += `   </div>`;
  html += `   <div>`;
  html += `     <h2>Message</h2>`;
  html += `     <p style="font-size: 16px;">${message}</p>`;
  html += `   </div>`;
  html += ` </div>`;
  html += `</div>`;

  const content = {
    from: `"Francesco Pistone's Portfolio" <${process.env.MAIL_USERNAME}>`,
    to: process.env.MAIL_USERNAME,
    subject: "New Contact Message",
    html: html,
  };

  try {
    await transporter.sendMail(content);
  } catch (error) {
    return new Response("Email not sent", {
      status: 400,
      statusText: "Email not sent",
    });
  }

  return new Response("Email sent", { status: 200, statusText: "Email sent" });
}
