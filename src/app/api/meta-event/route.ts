import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = '1420721566065219';
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

function hashData(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export async function POST(req: NextRequest) {
  try {
    if (!ACCESS_TOKEN) {
      return NextResponse.json({ error: 'META_ACCESS_TOKEN not set' }, { status: 500 });
    }

    const body = await req.json();
    const {
      eventName = 'PageView',
      eventSourceUrl,
      fbc,
      fbp,
      email,
      phone,
      clientIp,
      userAgent,
    } = body;

    // Build user_data
    const userData: Record<string, string> = {};
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;
    if (email) userData.em = hashData(email);
    if (phone) userData.ph = hashData(phone);

    // Ambil IP dari header jika tidak dikirim
    const ip = clientIp ||
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      '0.0.0.0';

    userData.client_ip_address = ip;
    userData.client_user_agent = userAgent || req.headers.get('user-agent') || '';

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: eventSourceUrl || 'https://coffiystamina.vercel.app',
          action_source: 'website',
          user_data: userData,
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI error:', result);
      return NextResponse.json({ error: result }, { status: response.status });
    }

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error('Meta CAPI exception:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
