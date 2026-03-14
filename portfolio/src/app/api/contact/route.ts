import { NextRequest, NextResponse } from 'next/server';

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

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      if (process.env.NODE_ENV === 'development') {
        console.log('📩 [DEV] Contact form:', { name, email, projectType, budget, message });
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json(
        { error: 'Servicio de contacto no configurado.' },
        { status: 500 }
      );
    }

    console.log('[Telegram] sending to chat_id:', chatId, '| token prefix:', token.slice(0, 10));

    const lines = [
      '📩 *Nuevo mensaje del portafolio*',
      '',
      `👤 Nombre: ${name}`,
      `📧 Email: ${email}`,
      projectType ? `🗂 Tipo: ${projectType}` : null,
      budget ? `💰 Presupuesto: ${budget}` : null,
      '',
      `💬 Mensaje:\n${message}`,
    ].filter(Boolean).join('\n');

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: lines, parse_mode: 'Markdown' }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('[Telegram] status:', res.status, 'body:', JSON.stringify(err));
      return NextResponse.json(
        { error: `Telegram error ${res.status}: ${err?.description ?? JSON.stringify(err)}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
