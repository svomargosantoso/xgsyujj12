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
            "headline": "Tips Meningkatkan Vitalitas Pria Secara Alami",
            "description": "Panduan lengkap untuk meningkatkan vitalitas dan performa pria dewasa dengan cara alami. Dari pola makan, olahraga, hingga suplemen herbal yang aman.",
            "image": "https://coffiystamina.vercel.app/coffiy-box.png",
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
            "datePublished": "2024-02-20",
            "dateModified": "2024-02-20",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://coffiystamina.vercel.app/blog/tips-meningkatkan-vitalitas-pria-secara-alami"
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
                "name": "Tips Meningkatkan Vitalitas Pria",
                "item": "https://coffiystamina.vercel.app/blog/tips-meningkatkan-vitalitas-pria-secara-alami"
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
                alt="Coffiy Logo - Kopi Stamina Pria Dewasa" 
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
                <span>20 Februari 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 md:h-4 w-3 md:w-4" />
                <span>6 menit baca</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Tips Meningkatkan Vitalitas Pria Secara Alami
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Vitalitas pria adalah kunci untuk menjalani hidup yang produktif dan memuaskan. Berikut panduan lengkap untuk meningkatkan vitalitas secara alami dan aman.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-8 md:mb-12 rounded-xl overflow-hidden">
            <img 
              src="/coffiy-box.png"
              alt="Tips Meningkatkan Vitalitas Pria - Coffiy Kopi Stamina"
              className="w-full h-auto"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">1. Pola Makan Sehat dan Bergizi</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Nutrisi yang tepat adalah fondasi vitalitas pria. Konsumsi makanan yang kaya akan:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li><strong>Protein:</strong> Daging tanpa lemak, ikan, telur, kacang-kacangan</li>
              <li><strong>Zinc:</strong> Tiram, daging merah, biji labu</li>
              <li><strong>Vitamin D:</strong> Ikan berlemak, telur, paparan sinar matahari</li>
              <li><strong>Omega-3:</strong> Salmon, sarden, kacang walnut</li>
              <li><strong>Antioksidan:</strong> Buah-buahan beri, sayuran hijau</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">2. Olahraga Teratur</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Aktivitas fisik meningkatkan sirkulasi darah, produksi hormon testosteron, dan stamina. Rekomendasi olahraga:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li><strong>Latihan Kekuatan:</strong> 3-4x seminggu untuk meningkatkan testosteron</li>
              <li><strong>Kardio:</strong> 30 menit setiap hari untuk kesehatan jantung</li>
              <li><strong>HIIT:</strong> 2-3x seminggu untuk metabolisme optimal</li>
              <li><strong>Yoga:</strong> Mengurangi stres dan meningkatkan fleksibilitas</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">3. Tidur Berkualitas</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Tidur 7-9 jam per malam sangat penting untuk produksi hormon dan pemulihan tubuh. Tips tidur berkualitas:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Tidur dan bangun di waktu yang sama setiap hari</li>
              <li>Hindari gadget 1 jam sebelum tidur</li>
              <li>Ciptakan lingkungan tidur yang gelap dan sejuk</li>
              <li>Hindari kafein setelah jam 2 siang</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">4. Kelola Stres</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Stres kronis menurunkan testosteron dan vitalitas. Cara mengelola stres:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Meditasi atau mindfulness 10-15 menit per hari</li>
              <li>Hobi dan aktivitas yang menyenangkan</li>
              <li>Waktu berkualitas dengan keluarga</li>
              <li>Konseling jika diperlukan</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">5. Suplemen Alami</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Suplemen herbal dapat membantu meningkatkan vitalitas. <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> adalah pilihan tepat karena:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Formula khusus untuk pria dewasa</li>
              <li>Bahan alami berkualitas tinggi</li>
              <li>Terdaftar BPOM dan Halal MUI</li>
              <li>Meningkatkan energi dan stamina</li>
              <li>Mendukung vitalitas pria</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">6. Hindari Kebiasaan Buruk</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Beberapa kebiasaan yang harus dihindari:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Merokok - menurunkan sirkulasi darah</li>
              <li>Alkohol berlebihan - mengganggu produksi hormon</li>
              <li>Begadang - mengganggu ritme sirkadian</li>
              <li>Makanan olahan - kurang nutrisi</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Kesimpulan</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Meningkatkan vitalitas pria membutuhkan pendekatan holistik: pola makan sehat, olahraga teratur, tidur berkualitas, manajemen stres, dan suplemen alami yang tepat. Konsistensi adalah kunci untuk hasil optimal.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Mulai Tingkatkan Vitalitas Anda Hari Ini
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Dapatkan Coffiy dan rasakan perbedaannya!
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
              <Link href="/blog/manfaat-kopi-untuk-stamina-pria" className="p-4 md:p-6 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm md:text-base">Manfaat Kopi untuk Stamina Pria</h4>
                <p className="text-xs md:text-sm text-gray-400">Temukan bagaimana kopi dapat meningkatkan stamina pria...</p>
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
            alt="Coffiy Logo - Kopi Stamina Pria Dewasa Premium" 
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
