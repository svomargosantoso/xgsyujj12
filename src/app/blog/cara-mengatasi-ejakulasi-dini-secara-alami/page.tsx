'use client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Cara Mengatasi Ejakulasi Dini Secara Alami Tanpa Obat Kimia",
        "description": "Panduan lengkap cara mengatasi ejakulasi dini secara alami tanpa obat kimia. Pelajari penyebab, teknik, dan solusi herbal yang aman dan terbukti efektif.",
        "image": "https://coffiystamina.vercel.app/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-02-26", "dateModified": "2024-02-26",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/cara-mengatasi-ejakulasi-dini-secara-alami" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://coffiystamina.vercel.app" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://coffiystamina.vercel.app/blog" },
          { "@type": "ListItem", "position": 3, "name": "Cara Mengatasi Ejakulasi Dini", "item": "https://coffiystamina.vercel.app/blog/cara-mengatasi-ejakulasi-dini-secara-alami" }
        ]
      })}} />
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
              <Badge className="bg-red-600 text-white text-xs">High Intent</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />26 Februari 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />8 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Cara Mengatasi Ejakulasi Dini Secara Alami Tanpa Obat Kimia</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Banyak pria tidak sadar bahwa masalah ini bisa diatasi secara alami — tanpa obat kimia, tanpa efek samping berbahaya.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png" alt="Cara Mengatasi Ejakulasi Dini Secara Alami" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Pernahkah Anda merasa tidak percaya diri karena masalah ini? Anda tidak sendirian. Penelitian menunjukkan <strong className="text-white">1 dari 3 pria dewasa</strong> pernah mengalami ejakulasi dini setidaknya sekali dalam hidupnya. Masalahnya bukan pada Anda — tapi pada cara Anda mengatasinya.</p>
            <p>Awalnya mungkin hanya sesekali. Tapi lama-lama, rasa tidak percaya diri mulai menumpuk. Hubungan jadi renggang. Semangat menurun. Padahal solusinya ada — dan lebih mudah dari yang Anda bayangkan.</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-8">Apa Penyebab Ejakulasi Dini?</h2>
            <p>Sebelum mencari solusi, penting memahami akar masalahnya:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Stres dan kecemasan</strong> — penyebab nomor satu, terutama pada pria muda</li>
              <li><strong className="text-white">Kadar testosteron rendah</strong> — menurun seiring usia dan gaya hidup buruk</li>
              <li><strong className="text-white">Kurang kontrol otot dasar panggul</strong> — bisa dilatih dengan teknik khusus</li>
              <li><strong className="text-white">Hipersensitivitas</strong> — kondisi fisik yang bisa diatasi secara alami</li>
              <li><strong className="text-white">Pola hidup tidak sehat</strong> — kurang tidur, merokok, alkohol</li>
            </ul>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-8">6 Cara Alami yang Terbukti Efektif</h2>
            <div className="space-y-4">
              {[
                { n:"1", t:"Latihan Kegel", d:"Perkuat otot pubococcygeus (PC) dengan kontraksi 10 detik, 3 set per hari. Dalam 4-6 minggu, kontrol meningkat signifikan." },
                { n:"2", t:"Teknik Start-Stop", d:"Saat mendekati klimaks, berhenti sejenak hingga sensasi mereda. Ulangi 3-4 kali. Melatih kontrol secara bertahap." },
                { n:"3", t:"Teknik Squeeze", d:"Tekan bagian pangkal selama 30 detik saat mendekati klimaks. Efektif untuk menunda dan meningkatkan kontrol." },
                { n:"4", t:"Kelola Stres", d:"Meditasi, olahraga, dan tidur cukup menurunkan kortisol — hormon stres yang langsung mempengaruhi performa." },
                { n:"5", t:"Perbaiki Pola Makan", d:"Zinc (tiram, kacang), magnesium (bayam, almond), dan vitamin D terbukti mendukung kesehatan hormonal pria." },
                { n:"6", t:"Suplemen Herbal Alami", d:"Bahan alami seperti yang terkandung dalam kopi stamina khusus pria membantu meningkatkan kontrol dan vitalitas secara bertahap." },
              ].map(s => (
                <div key={s.n} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5 flex gap-4">
                  <span className="text-2xl font-black text-red-500/40 flex-shrink-0">{s.n}</span>
                  <div><h3 className="font-bold text-white mb-1">{s.t}</h3><p className="text-xs md:text-sm text-gray-400">{s.d}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Ingin solusi yang lebih personal? Konsultasikan kondisi Anda sekarang!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-8">Peran Kopi Stamina dalam Mengatasi Masalah Ini</h2>
            <p>Banyak pria mulai beralih ke solusi alami yang praktis. Salah satu yang mulai banyak digunakan adalah <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">kopi stamina khusus pria</Link> seperti Coffiy — yang diformulasikan dari bahan herbal pilihan untuk mendukung vitalitas dan kontrol pria dewasa.</p>
            <p>Berbeda dengan obat kimia, Coffiy bekerja secara bertahap dan aman untuk dikonsumsi jangka panjang. Sudah terdaftar BPOM dan bersertifikat Halal MUI.</p>
            <ul className="space-y-2">
              {["Meningkatkan energi dan stamina secara alami","Mendukung keseimbangan hormonal pria","Aman dikonsumsi jangka panjang","Terdaftar BPOM & Halal MUI","10.000+ pria sudah merasakan manfaatnya"].map((i,k) => (
                <li key={k} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />{i}</li>
              ))}
            </ul>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-8">Kesimpulan</h2>
            <p>Ejakulasi dini bukan akhir dari segalanya. Dengan kombinasi latihan fisik, manajemen stres, pola makan sehat, dan suplemen alami yang tepat, kondisi ini sangat bisa diatasi. Kuncinya: mulai sekarang, konsisten, dan jangan malu untuk mencari bantuan.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Siap Atasi Masalah Ini Sekarang?</h3>
            <p className="text-gray-400 mb-2 text-sm">Konsultasi gratis dengan tim ahli kami — rahasia terjaga!</p>
            <p className="text-xs text-gray-500 mb-5">✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ 100% Alami &nbsp;✓ Gratis Konsultasi</p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-green-500/50">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-5">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/cara-tahan-lama-saat-berhubungan" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Cara Tahan Lama Saat Berhubungan</h4><p className="text-xs text-gray-400">Teknik terbukti efektif...</p></Link>
              <Link href="/blog/penyebab-pria-cepat-keluar-dan-cara-mengatasinya" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Penyebab Pria Cepat Keluar</h4><p className="text-xs text-gray-400">Kenali penyebab dan solusinya...</p></Link>
              <Link href="/blog/cara-meningkatkan-stamina-pria-usia-30" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Stamina Pria Usia 30+</h4><p className="text-xs text-gray-400">Panduan khusus pria 30 tahun ke atas...</p></Link>
            </div>
          </div>
        </div>
      </article>
      <footer className="bg-black py-6 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img src="/coffiy-logo-kopi-stamina-pria.png" alt="Coffiy Logo" className="h-8 md:h-10 mx-auto mb-3" />
          <p className="text-gray-400 mb-1 text-xs md:text-sm">Coffiy - Kopi Stamina Pria Dewasa Premium</p>
          <p className="text-xs text-gray-500">© 2024 Coffiy. All rights reserved. | BPOM & Halal MUI Certified</p>
        </div>
      </footer>
    </div>
  );
}
