// Helper untuk fire Meta Pixel + Conversions API secara bersamaan

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

interface MetaEventOptions {
  eventName: string;
  contentName?: string;
  contentCategory?: string;
  currency?: string;
}

export async function fireMetaEvent(options: MetaEventOptions) {
  const { eventName, contentName, contentCategory, currency = 'IDR' } = options;

  const fbc = getCookie('_fbc') || undefined;
  const fbp = getCookie('_fbp') || undefined;

  // 1. Browser Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      content_name: contentName,
      content_category: contentCategory,
      currency,
    });
  }

  // 2. Conversions API (server-side)
  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventSourceUrl: window.location.href,
        fbc,
        fbp,
        userAgent: navigator.userAgent,
      }),
    });
  } catch (err) {
    // Jangan block user experience jika CAPI gagal
    console.warn('Meta CAPI failed:', err);
  }
}
