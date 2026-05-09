'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, CheckCircle2, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Apakah kopi stamina aman dikonsumsi setiap hari?", a: "Ya, kopi stamina seperti Coffiy yang sudah terdaftar BPOM dan bersertifikat Halal MUI aman dikonsumsi setiap hari sesuai anjuran 1-2 sachet per hari." },
    { q: "Berapa lama efek kopi stamina bisa dirasakan?", a: "Efek energi bisa dirasakan dalam 30-60 menit. Untuk manfaat vitalitas jangka panjang, konsumsi rutin 7-14 hari memberikan hasil lebih optimal." },
    { q: "Apakah kopi stamina bisa diminum bersamaan dengan kopi biasa?", a: "Sebaiknya tidak, karena kandungan kafein bisa berlebihan. Ganti kopi biasa Anda dengan kopi stamina untuk manfaat optimal." },
    { q: "Apakah ada efek samping dari kopi stamina?", a: "Kopi stamina dari bahan alami yang terdaftar BPOM umumnya tidak memiliki efek samping berbahaya jika dikonsumsi sesuai anjuran." },
    { q: "Siapa yang tidak boleh mengonsumsi kopi stamina?", a: "Wanita hamil dan menyusui, anak-anak di bawah 18 tahun, dan penderita kondisi medis tertentu sebaiknya berkonsultasi dokter terlebih dahulu." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Perbedaan Kopi Biasa vs Kopi Stamina: Panduan Lengkap untuk Pria Dewasa",
        "description": "Perbandingan mendalam kopi biasa vs kopi stamina. Pelajari perbedaan komposisi, manfaat, dan mana yang lebih baik untuk pria dewasa.",
        "image": "https://coffiystamina.vercel.app/coffiy-5s.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-02-19", "dateModified": "2024-04-23",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/perbedaan-kopi-biasa-vs-kopi-stamina" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://coffiystamina.vercel.app" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://coffiystamina.vercel.app/blog" },
          { "@type": "ListItem", "position": 3, "name": "Perbedaan Kopi Biasa vs Kopi Stamina", "item": "https://coffiystamina.vercel.app/blog/perbedaan-kopi-biasa-vs-kopi-stamina" }
        ]
      })}} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/coffiy-logo-kopi-stamina-pria.png" alt="Coffiy Logo" className="h-10 md:h-12 w-auto" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">COFFIY</span>
          </Link>
          <Link href="/"><Button className="bg-gradient-to-r from-red-600 to-red-700 text-xs md:text-sm px-3 py-2"><Home className="mr-1 h-3 w-3" />Beranda</Button></Link>
        </div>
      </header>

      <article className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-6 text-sm"><ArrowLeft className="mr-2 h-4 w-4" />Kembali ke Blog</Link>

          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded">Edukasi</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />19 Februari 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />7 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Perbedaan Kopi Biasa vs Kopi Stamina: Mana yang Lebih Baik untuk Pria Dewasa?
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Banyak pria bertanya-tanya: apa sebenarnya perbedaan kopi stamina dengan kopi biasa? Apakah benar-benar ada perbedaan signifikan, atau hanya marketing semata?
            </p>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-5s.png" alt="Perbedaan Kopi Biasa vs Kopi Stamina untuk Pria Dewasa" className="w-full h-auto" />
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Jawabannya: <strong className="text-white">ada perbedaan yang sangat signifikan</strong> — bukan hanya dari sisi marketing, tapi dari komposisi, cara kerja, dan manfaat yang dihasilkan. Mari kita bahas secara mendalam dan objektif.</p>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Apa Itu Kopi Biasa?</h2>
            <p>Kopi biasa adalah minuman yang terbuat dari biji kopi yang disangrai dan diseduh. Kandungan utamanya adalah <strong className="text-white">kafein</strong> yang memberikan efek stimulan pada sistem saraf pusat.</p>
            <p>Manfaat kopi biasa:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Meningkatkan kewaspadaan dan mengurangi kantuk</li>
              <li>Meningkatkan fokus dan konsentrasi jangka pendek</li>
              <li>Mengandung antioksidan dari biji kopi</li>
              <li>Meningkatkan metabolisme sementara</li>
            </ul>
            <p>Keterbatasan kopi biasa: efeknya hanya dari kafein, tidak ada formula khusus untuk mendukung vitalitas atau stamina pria secara menyeluruh.</p>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Apa Itu Kopi Stamina?</h2>
            <p>Kopi stamina seperti <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> adalah kopi yang diformulasikan khusus dengan tambahan bahan herbal alami pilihan. Selain kafein dari kopi, ada komponen tambahan yang dirancang untuk mendukung kebutuhan spesifik pria dewasa.</p>
            <p>Yang membedakan kopi stamina:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Mengandung ekstrak herbal untuk mendukung vitalitas pria</li>
              <li>Formula khusus untuk meningkatkan stamina dan energi tahan lama</li>
              <li>Mendukung keseimbangan hormonal pria dewasa</li>
              <li>Efek lebih stabil dan tahan lama dibanding kopi biasa</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Perbandingan Langsung: Kopi Biasa vs Kopi Stamina</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-4 md:p-5">
                  <h3 className="font-bold text-center mb-4 text-gray-300">☕ Kopi Biasa</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      { ok: true, text: "Meningkatkan kewaspadaan" },
                      { ok: true, text: "Mengandung antioksidan" },
                      { ok: false, text: "Tidak ada formula khusus pria" },
                      { ok: false, text: "Efek cepat habis (crash)" },
                      { ok: false, text: "Tidak mendukung vitalitas" },
                      { ok: false, text: "Tidak ada bahan herbal tambahan" },
                    ].map((i, k) => (
                      <li key={k} className="flex items-center gap-2">
                        {i.ok ? <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" /> : <X className="h-4 w-4 text-red-500 flex-shrink-0" />}
                        <span className={i.ok ? "text-gray-300" : "text-gray-500"}>{i.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/20 border-2 border-red-500/50">
                <CardContent className="p-4 md:p-5">
                  <h3 className="font-bold text-center mb-4 text-red-400">⚡ Kopi Stamina (Coffiy)</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Meningkatkan kewaspadaan & fokus",
                      "Antioksidan + herbal alami",
                      "Formula khusus pria dewasa",
                      "Energi stabil & tahan lama",
                      "Mendukung vitalitas pria",
                      "Terdaftar BPOM & Halal MUI",
                    ].map((i, k) => (
                      <li key={k} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{i}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Dari Sisi Keamanan</h2>
            <p>Ini pertanyaan yang paling sering ditanyakan. Kopi stamina yang beredar di pasaran kualitasnya sangat bervariasi. Yang perlu diperhatikan:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Pilih yang terdaftar BPOM</strong> — ini jaminan keamanan dari pemerintah Indonesia</li>
              <li><strong className="text-white">Pilih yang bersertifikat Halal MUI</strong> — terutama untuk konsumen Muslim</li>
              <li><strong className="text-white">Hindari produk tanpa izin edar</strong> — bisa mengandung bahan berbahaya</li>
            </ul>
            <p>Coffiy memenuhi semua standar ini: BPOM No. MD 867031211059 dan Halal MUI No. 00150099991220.</p>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kapan Sebaiknya Memilih Kopi Stamina?</h2>
            <p>Kopi stamina adalah pilihan tepat jika Anda:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Pria dewasa usia 25+ yang ingin menjaga stamina dan vitalitas</li>
              <li>Merasa energi mulai menurun dibanding beberapa tahun lalu</li>
              <li>Ingin solusi alami yang aman untuk dikonsumsi jangka panjang</li>
              <li>Aktif berolahraga dan butuh recovery yang lebih baik</li>
              <li>Ingin meningkatkan performa fisik dan mental secara bersamaan</li>
            </ul>

            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Ingin tahu apakah kopi stamina cocok untuk kondisi Anda?</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">FAQ: Pertanyaan yang Sering Ditanyakan</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-4 flex items-center justify-between gap-3">
                    <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="h-4 w-4 text-red-500 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-xs md:text-sm text-gray-400 leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kesimpulan</h2>
            <p>Kopi biasa bagus untuk energi dan fokus sehari-hari. Tapi jika Anda pria dewasa yang ingin lebih dari sekadar kafein — ingin stamina, vitalitas, dan performa yang lebih baik — kopi stamina seperti Coffiy adalah pilihan yang jauh lebih tepat.</p>
            <p>Kuncinya: pilih produk yang sudah terdaftar BPOM dan Halal MUI untuk keamanan yang terjamin.</p>
          </div>

          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Coba Coffiy Sekarang</h3>
            <p className="text-gray-400 mb-5 text-sm">✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ 100% Alami &nbsp;✓ Gratis Konsultasi</p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-green-500/50">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-5">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/manfaat-kopi-untuk-stamina-pria" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Manfaat Kopi untuk Stamina Pria</h4><p className="text-xs text-gray-400">Temukan manfaat lengkap kopi untuk pria...</p></Link>
              <Link href="/blog/review-coffiy-kopi-stamina-pria" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Review Coffiy</h4><p className="text-xs text-gray-400">Benarkah efektif untuk stamina pria?</p></Link>
              <Link href="/blog/cara-meningkatkan-stamina-pria-usia-30" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Stamina Pria Usia 30+</h4><p className="text-xs text-gray-400">Panduan khusus pria 30 tahun ke atas...</p></Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-black py-6 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img src="/coffiy-logo-kopi-stamina-pria.png" alt="Coffiy Logo" className="h-8 md:h-10 mx-auto mb-3" />
          <p className="text-xs md:text-sm text-gray-400 mb-1">Coffiy - Kopi Stamina Pria Dewasa Premium</p>
          <p className="text-xs text-gray-500">© 2024 Coffiy. All rights reserved. | BPOM & Halal MUI Certified</p>
        </div>
      </footer>
    </div>
  );
}
