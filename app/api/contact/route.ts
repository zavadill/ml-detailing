// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, carBrand, message } = body;

  try {
    const data = await resend.emails.send({
        from: 'Webový formulář <ml-detailing.cz>',
        to: 'adamzav33@seznam.cz',
        subject: `Nová zpráva od ${name}`,
        html: `
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Značka vozu:</strong> ${carBrand}</p>
          <p><strong>Zpráva:</strong><br/>${message}</p>
        `,
        replyTo: email, // ✅ správný zápis
      });
      

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
