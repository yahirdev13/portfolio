import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, budget, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y descripción son requeridos.' },
        { status: 400 }
      );
    }
    if (message.length < 20) {
      return NextResponse.json(
        { error: 'La descripción debe tener al menos 20 caracteres.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo   = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass) {
      // In development without env vars, just return success
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 [DEV] Contact form submission:', { name, email, projectType, budget, message });
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json(
        { error: 'Servicio de email no configurado.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: emailUser, pass: emailPass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `[Portfolio] Nuevo contacto: ${name} — ${projectType || 'Sin tipo'}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F1F5F9; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3B82F6, #2563EB); padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #fff;">Nuevo mensaje de contacto</h1>
            <p style="margin: 4px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">Desde tu portafolio</p>
          </div>
          <div style="padding: 32px; background: #1E293B;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px; width: 140px;">Nombre</td>
                <td style="padding: 8px 0; color: #F1F5F9; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; color: #60A5FA; font-size: 14px;">${email}</td>
              </tr>
              ${projectType ? `<tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px;">Tipo de proyecto</td>
                <td style="padding: 8px 0; color: #F1F5F9; font-size: 14px;">${projectType}</td>
              </tr>` : ''}
              ${budget ? `<tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px;">Presupuesto</td>
                <td style="padding: 8px 0; color: #34D399; font-size: 14px; font-weight: 600;">${budget}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #0F172A; border-radius: 8px; border: 1px solid rgba(148,163,184,0.10);">
              <p style="margin: 0 0 8px; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Descripción del proyecto</p>
              <p style="margin: 0; color: #F1F5F9; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #0F172A; text-align: center;">
            <p style="margin: 0; color: #334155; font-size: 12px;">Responde directamente a este email para contactar a ${name}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
