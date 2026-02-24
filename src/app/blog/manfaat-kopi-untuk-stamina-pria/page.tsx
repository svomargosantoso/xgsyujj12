'use client';

import { Button } from "@/components/ui/button";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      {/* JSON-LD Schema Markup for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Manfaat Kopi untuk Stamina Pria: Rahasia Energi Maksimal",
            "description": "Temukan bagaimana kopi dapat meningkatkan stamina dan vitalitas pria dewasa secara alami. Pelajari manfaat, cara konsumsi yang tepat, dan tips memaksimalkan efeknya.",
            "image": "https://coffiystamina.vercel.app/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png",
            "author": {
              "@type": "Organization",
              "name": "Coffiy Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Coffiy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png"
              }
            },
            "datePublished": "2024-02-21",
            "dateModified": "2024-02-21",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://coffiystamina.vercel.app/blog/manfaat-kopi-untuk-stamina-pria"
            }
          })
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://coffiystamina.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://coffiystamina.vercel.app/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Manfaat Kopi untuk Stamina Pria",
                "item": "https://coffiystamina.vercel.app/blog/manfaat-kopi-untuk-stamina-pria"
              }
            ]
          })
        }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <img 
                src="/coffiy-logo-kopi-stamina-pria.png" 
                alt="Coffiy Logo" 
                className="h-10 md:h-12 w-auto"
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                COFFIY
              </span>
            </Link>

            <Link href="/">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-xs md:text-sm px-3 md:px-4 py-2">
                <Home className="mr-1 md:mr-2 h-3 md:h-4 w-3 md:w-4" />
                Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-6 md:mb-8 text-sm md:text-base">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Blog
          </Link>

          {/* Article Header */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 text-xs md:text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 md:h-4 w-3 md:w-4" />
                <span>21 Februari 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 md:h-4 w-3 md:w-4" />
                <span>5 menit baca</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Manfaat Kopi untuk Stamina Pria: Rahasia Energi Maksimal
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Kopi bukan hanya minuman favorit untuk memulai hari, tetapi juga memiliki manfaat luar biasa untuk meningkatkan stamina dan vitalitas pria dewasa.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-8 md:mb-12 rounded-xl overflow-hidden">
            <img 
              src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png"
              alt="Manfaat Kopi untuk Stamina Pria"
              className="w-full h-auto"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Mengapa Kopi Baik untuk Stamina Pria?</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi mengandung kafein yang merupakan stimulan alami yang dapat meningkatkan energi, fokus, dan performa fisik. Untuk pria dewasa, manfaat kopi tidak hanya sebatas menghilangkan kantuk, tetapi juga:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Meningkatkan metabolisme dan pembakaran lemak</li>
              <li>Meningkatkan performa olahraga hingga 12%</li>
              <li>Meningkatkan fokus dan konsentrasi</li>
              <li>Meningkatkan produksi hormon testosteron</li>
              <li>Meningkatkan aliran darah ke seluruh tubuh</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Kopi Khusus untuk Pria Dewasa</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> adalah kopi premium yang diformulasikan khusus untuk pria dewasa. Berbeda dengan kopi biasa, Coffiy mengandung bahan-bahan alami pilihan yang dirancang untuk:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li><strong>Meningkatkan Stamina:</strong> Formula khusus untuk energi tahan lama</li>
              <li><strong>Meningkatkan Vitalitas:</strong> Mendukung kesehatan reproduksi pria</li>
              <li><strong>Meningkatkan Performa:</strong> Optimal untuk aktivitas fisik dan mental</li>
              <li><strong>100% Aman:</strong> Terdaftar BPOM dan bersertifikat Halal MUI</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Cara Konsumsi yang Tepat</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Untuk mendapatkan manfaat maksimal dari kopi stamina, ikuti tips berikut:
            </p>

            <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Konsumsi 1-2 kali sehari, pagi dan/atau sore</li>
              <li>Seduh dengan air panas 150ml</li>
              <li>Hindari konsumsi terlalu malam agar tidak mengganggu tidur</li>
              <li>Konsumsi rutin untuk hasil optimal</li>
              <li>Kombinasikan dengan pola hidup sehat</li>
            </ol>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Kesimpulan</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi memiliki manfaat luar biasa untuk stamina dan vitalitas pria dewasa. Dengan memilih kopi yang tepat seperti Coffiy, Anda dapat memaksimalkan manfaat tersebut dengan aman dan efektif.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Siap Merasakan Manfaatnya?
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Dapatkan Coffiy sekarang dan tingkatkan stamina Anda!
            </p>
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-xl rounded-full shadow-2xl shadow-green-500/50"
            >
              <MessageCircle className="mr-2 md:mr-3 h-4 md:h-5 lg:h-6 w-4 md:w-5 lg:w-6" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>

          {/* Related Articles */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Artikel Terkait</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <Link href="/blog/tips-meningkatkan-vitalitas-pria-secara-alami" className="p-4 md:p-6 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm md:text-base">Tips Meningkatkan Vitalitas Pria Secara Alami</h4>
                <p className="text-xs md:text-sm text-gray-400">Panduan lengkap untuk meningkatkan vitalitas pria dewasa...</p>
              </Link>
              <Link href="/blog/perbedaan-kopi-biasa-vs-kopi-stamina" className="p-4 md:p-6 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm md:text-base">Perbedaan Kopi Biasa vs Kopi Stamina</h4>
                <p className="text-xs md:text-sm text-gray-400">Apa yang membedakan kopi stamina dengan kopi biasa?</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8 lg:py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/coffiy-logo-kopi-stamina-pria.png" 
            alt="Coffiy Logo" 
            className="h-8 md:h-10 lg:h-12 mx-auto mb-2 md:mb-3 lg:mb-4"
          />
          <p className="text-gray-400 mb-2 md:mb-3 lg:mb-4 text-xs md:text-sm lg:text-base">
            Coffiy - Kopi Stamina Pria Dewasa Premium
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            © 2024 Coffiy. All rights reserved. | BPOM & Halal MUI Certified
          </p>
        </div>
      </footer>
    </div>
  );
}
