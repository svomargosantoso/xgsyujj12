'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const PIXEL_ID = '1420721566065219';

// Set cookie helper
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

// Get cookie helper
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle fbclid — simpan ke cookie _fbc tanpa encode ulang
    const fbclid = searchParams.get('fbclid');
    if (fbclid) {
      const timestamp = Math.floor(Date.now() / 1000);
      const fbc = `fb.1.${timestamp}.${fbclid}`;
      setCookie('_fbc', fbc, 90);
    }

    // Generate _fbp jika belum ada
    if (!getCookie('_fbp')) {
      const rand = Math.floor(Math.random() * 2147483647);
      const timestamp = Math.floor(Date.now() / 1000);
      setCookie('_fbp', `fb.1.${timestamp}.${rand}`, 90);
    }
  }, [searchParams]);

  useEffect(() => {
    // Init pixel sekali saja
    if (typeof window === 'undefined') return;

    if (!window.fbq) {
      // Load fbevents.js
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);

      // Init fbq
      const fbq: any = function (...args: any[]) {
        fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
      };
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      window.fbq = fbq;
      (window as any)._fbq = fbq;
    }

    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }, []);

  // Track PageView setiap navigasi
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
