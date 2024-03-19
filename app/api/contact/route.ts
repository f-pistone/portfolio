import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const req = await request.json();

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const message = {
    from: `"Francesco Pistone Portfolio" <${process.env.MAIL_USERNAME}>`,
    to: process.env.MAIL_USERNAME,
    subject: "New Contact Message",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  };

  await transporter.sendMail(message);

  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }

  return new Response("Hi");
}
