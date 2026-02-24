import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Coffiy - Artikel & Tips Kesehatan Pria | Kopi Stamina Pria',
  description: 'Artikel, tips, dan informasi seputar kesehatan, stamina, dan vitalitas pria dewasa. Pelajari cara meningkatkan performa dan energi pria secara alami.',
  keywords: [
    'blog kopi pria',
    'artikel kesehatan pria',
    'tips stamina pria',
    'tips vitalitas pria',
    'coffee for men blog',
    'artikel kopi stamina',
    'tips energi pria',
    'kesehatan pria dewasa',
    'performa pria'
  ],
  openGraph: {
    title: 'Blog Coffiy - Artikel & Tips Kesehatan Pria',
    description: 'Artikel, tips, dan informasi seputar kesehatan, stamina, dan vitalitas pria dewasa.',
    url: 'https://coffiystamina.vercel.app/blog',
    type: 'website',
    images: [
      {
        url: 'https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png',
        width: 1200,
        height: 630,
        alt: 'Coffiy Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Coffiy - Artikel & Tips Kesehatan Pria',
    description: 'Artikel, tips, dan informasi seputar kesehatan, stamina, dan vitalitas pria dewasa.',
    images: ['https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png']
  }
};
