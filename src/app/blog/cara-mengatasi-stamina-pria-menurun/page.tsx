'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";

  const causes = [
    { icon: "😴", title: "Kurang Tidur", desc: "Tidur kurang dari 7 jam menurunkan produksi testosteron hingga 15%" },
    { icon: "🍔", title: "Pola Makan Buruk", desc: "Makanan olahan dan tinggi gula merusak keseimbangan hormon" },
    { icon: "😰", title: "Stres Berlebihan", desc: "Kortisol tinggi akibat stres langsung menekan produksi testosteron" },
    { icon: "🚬", title: "Merokok & Alkohol", desc: "Merusak sirkulasi darah dan mengganggu fungsi hormonal" },
    { icon: "🛋️", title: "Kurang Olahraga", desc: "Gaya hidup sedentary mempercepat penurunan stamina" },
    { icon: "⏰", title: "Faktor Usia", desc: "Testosteron mulai menurun 1-2% per tahun setelah usia 30" },
  ];

  const solutions = [
    {
      step: "01",
      title: "Perbaiki Pola Tidur",
      desc: "Tidur 7-9 jam per malam. 70% produksi testosteron terjadi saat tidur nyenyak. Buat jadwal tidur konsisten dan hindari gadget 1 jam sebelum tidur.",
      color: "from-blue-900/30 to-blue-800/20 border-blue-500/30"
    },
    {
      step: "02",
      title: "Konsumsi Makanan Bergizi",
      desc: "Perbanyak protein (daging, telur, ikan), zinc (tiram, kacang), dan vitamin D. Kurangi gula, makanan olahan, dan minuman bersoda.",
      color: "from-green-900/30 to-green-800/20 border-green-500/30"
    },
    {
      step: "03",
      title: "Olahraga Rutin",
      desc: "Latihan beban 3-4x seminggu terbukti meningkatkan testosteron. Kombinasikan dengan kardio 30 menit setiap hari untuk hasil optimal.",
      color: "from-orange-900/30 to-orange-800/20 border-orange-500/30"
    },
    {
      step: "04",
      title: "Kelola Stres",
      desc: "Meditasi 10-15 menit per hari, hobi yang menyenangkan, dan waktu berkualitas bersama keluarga terbukti menurunkan kortisol.",
      color: "from-purple-900/30 to-purple-800/20 border-purple-500/30"
    },
    {
      step: "05",
      title: "Suplemen Alami",
      desc: "Kopi stamina seperti Coffiy mengandung formula khusus dari bahan alami yang membantu meningkatkan energi dan vitalitas pria dewasa secara aman.",
      color: "from-red-900/30 to-red-800/20 border-red-500/30"
    },
    {
      step: "06",
      title: "Konsultasi Dokter",
      desc: "Jika stamina menurun drastis, konsultasikan ke dokter untuk cek kadar testosteron dan kondisi kesehatan secara menyeluruh.",
      color: "from-zinc-800/50 to-zinc-700/30 border-zinc-500/30"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cara Mengatasi Stamina Pria yang Menurun: Panduan Lengkap 2024",
            "description": "Penyebab dan cara mengatasi stamina pria yang menurun secara alami. Panduan lengkap dari pola makan, olahraga, hingga suplemen herbal yang aman dan terbukti efektif.",
            "image": "https://coffiystamina.vercel.app/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png",
            "author": { "@type": "Organization", "name": "Coffiy Team" },
            "publisher": {
              "@type": "Organization",
              "name": "Coffiy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png"
              }
            },
            "datePublished": "2024-02-25",
            "dateModified": "2024-02-25",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://coffiystamina.vercel.app/blog/cara-mengatasi-stamina-pria-menurun"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://coffiystamina.vercel.app" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://coffiystamina.vercel.app/blog" },
              { "@type": "ListItem", "position": 3, "name": "Cara Mengatasi Stamina Pria Menurun", "item": "https://coffiystamina.vercel.app/blog/cara-mengatasi-stamina-pria-menurun" }
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

      <article className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Back */}
          <Link href="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-6 text-sm md:text-base">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Blog
          </Link>

          {/* Article Header */}
          <div className="mb-6 md:mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-red-600 text-white text-xs">Kesehatan Pria</Badge>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="h-3 w-3" />
                <span>25 Februari 2024</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="h-3 w-3" />
                <span>7 menit baca</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Cara Mengatasi Stamina Pria yang Menurun: Panduan Lengkap 2024
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Stamina menurun adalah masalah yang dialami banyak pria dewasa. Pelajari penyebab utamanya dan cara mengatasinya secara alami, aman, dan efektif.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-8 md:mb-10 rounded-xl overflow-hidden">
            <img
              src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png"
              alt="Cara Mengatasi Stamina Pria Menurun - Coffiy Kopi Stamina Pria"
              className="w-full h-auto"
            />
          </div>

          {/* Intro */}
          <div className="prose prose-invert max-w-none">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Apakah Anda merasa mudah lelah, kurang bersemangat, atau performa fisik menurun drastis? Anda tidak sendirian. Penelitian menunjukkan bahwa <strong className="text-white">lebih dari 40% pria dewasa</strong> mengalami penurunan stamina yang signifikan, terutama setelah usia 30 tahun.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
              Kabar baiknya, kondisi ini bisa diatasi. Artikel ini akan membahas penyebab utama dan solusi terbukti untuk mengembalikan stamina dan vitalitas Anda.
            </p>

            {/* Warning Box */}
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 md:p-6 mb-8 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-yellow-200 leading-relaxed">
                <strong>Penting:</strong> Jika stamina menurun disertai gejala lain seperti nyeri dada, sesak napas, atau penurunan berat badan drastis, segera konsultasikan ke dokter.
              </p>
            </div>

            {/* Causes Section */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">
              6 Penyebab Utama Stamina Pria Menurun
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Sebelum mencari solusi, penting untuk memahami akar masalahnya:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {causes.map((cause, i) => (
                <Card key={i} className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{cause.icon}</span>
                      <div>
                        <h3 className="font-bold text-sm md:text-base mb-1">{cause.title}</h3>
                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{cause.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Mid Article */}
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 md:p-6 mb-10 text-center">
              <p className="text-sm md:text-base font-semibold mb-3">
                Sudah tahu penyebabnya? Konsultasikan kondisi Anda dengan tim ahli kami!
              </p>
              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>

            {/* Solutions Section */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">
              6 Cara Efektif Mengatasi Stamina Pria yang Menurun
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Berikut solusi yang sudah terbukti secara ilmiah dan aman untuk diterapkan:
            </p>

            <div className="space-y-4 mb-10">
              {solutions.map((sol, i) => (
                <div key={i} className={`bg-gradient-to-r ${sol.color} border rounded-xl p-5 md:p-6`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl font-black text-white/20 flex-shrink-0 leading-none">{sol.step}</span>
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-2">{sol.title}</h3>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coffiy Section */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">
              Mengapa Coffiy Efektif untuk Stamina Pria?
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> bukan sekadar kopi biasa. Ini adalah kopi premium yang diformulasikan khusus untuk pria dewasa dengan keunggulan:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Formula alami dari bahan herbal pilihan berkualitas tinggi",
                "Meningkatkan energi dan stamina secara bertahap dan tahan lama",
                "Mendukung vitalitas dan performa pria dewasa",
                "Terdaftar resmi BPOM No. MD 867031211059",
                "Bersertifikat Halal MUI No. 00150099991220",
                "Lebih dari 10.000 pria Indonesia sudah merasakan manfaatnya",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Testimonial Quote */}
            <div className="bg-zinc-800 border-l-4 border-red-500 rounded-r-xl p-5 md:p-6 mb-8">
              <p className="text-sm md:text-base text-gray-300 italic leading-relaxed mb-3">
                "Setelah rutin konsumsi Coffiy selama 2 minggu, stamina saya meningkat drastis. Tidak mudah lelah lagi dan lebih bersemangat menjalani aktivitas sehari-hari."
              </p>
              <p className="text-xs md:text-sm text-gray-500">— Budi S., 38 tahun, Jakarta</p>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Kesimpulan</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
              Stamina pria yang menurun bukan kondisi permanen. Dengan kombinasi pola hidup sehat, olahraga rutin, tidur cukup, dan suplemen alami yang tepat, stamina Anda bisa kembali optimal.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
              Kunci utamanya adalah <strong className="text-white">konsistensi</strong>. Mulai dari perubahan kecil hari ini, dan rasakan perbedaannya dalam 7-14 hari ke depan.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
              Siap Kembalikan Stamina Anda?
            </h3>
            <p className="text-gray-400 mb-2 text-sm md:text-base">
              Coba Coffiy sekarang dan rasakan perbedaannya dalam 7 hari!
            </p>
            <p className="text-xs text-gray-500 mb-6">✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ 100% Bahan Alami &nbsp;✓ Gratis Konsultasi</p>
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 md:px-10 py-3 md:py-5 text-sm md:text-lg rounded-full shadow-2xl shadow-green-500/50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>

          {/* Related Articles */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/manfaat-kopi-untuk-stamina-pria" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm">Manfaat Kopi untuk Stamina Pria</h4>
                <p className="text-xs text-gray-400">Temukan bagaimana kopi meningkatkan stamina pria...</p>
              </Link>
              <Link href="/blog/tips-meningkatkan-vitalitas-pria-secara-alami" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm">Tips Meningkatkan Vitalitas Pria</h4>
                <p className="text-xs text-gray-400">Panduan lengkap vitalitas pria secara alami...</p>
              </Link>
              <Link href="/blog/perbedaan-kopi-biasa-vs-kopi-stamina" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm">Kopi Biasa vs Kopi Stamina</h4>
                <p className="text-xs text-gray-400">Apa perbedaan kopi stamina dengan kopi biasa?</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/coffiy-logo-kopi-stamina-pria.png"
            alt="Coffiy Logo - Kopi Stamina Pria Dewasa Premium"
            className="h-8 md:h-10 mx-auto mb-3"
          />
          <p className="text-gray-400 mb-2 text-xs md:text-sm">Coffiy - Kopi Stamina Pria Dewasa Premium</p>
          <p className="text-xs text-gray-500">© 2024 Coffiy. All rights reserved. | BPOM & Halal MUI Certified</p>
        </div>
      </footer>
    </div>
  );
}
