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
        "headline": "Penyebab Pria Cepat Keluar dan Cara Mengatasinya",
        "description": "Kenali 7 penyebab utama pria cepat keluar dan cara mengatasinya secara alami. Solusi praktis dan aman untuk meningkatkan performa dan kepercayaan diri pria dewasa.",
        "image": "https://coffiystamina.vercel.app/coffiy-box.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-02-28", "dateModified": "2024-02-28",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/penyebab-pria-cepat-keluar-dan-cara-mengatasinya" }
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
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />28 Februari 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />6 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Penyebab Pria Cepat Keluar dan Cara Mengatasinya</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Masalah ini lebih sering terjadi dari yang Anda kira — dan lebih mudah diatasi dari yang Anda bayangkan.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-box.png" alt="Penyebab Pria Cepat Keluar dan Cara Mengatasinya" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Jika Anda sedang membaca ini, kemungkinan besar Anda atau seseorang yang Anda kenal sedang menghadapi masalah ini. Dan itu wajar. Ini bukan kelemahan — ini sinyal dari tubuh yang perlu diperhatikan.</p>
            <p>Yang berbahaya bukan masalahnya, tapi membiarkannya tanpa solusi. Karena lama-lama, ini bisa mempengaruhi kepercayaan diri, hubungan, bahkan kualitas hidup secara keseluruhan.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">7 Penyebab Utama Pria Cepat Keluar</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { e:"🧠", t:"Kecemasan Performa", d:"Pikiran 'harus bagus' justru menciptakan tekanan yang mempercepat respons tubuh." },
                { e:"📉", t:"Testosteron Rendah", d:"Hormon utama pria ini menurun seiring usia dan gaya hidup tidak sehat." },
                { e:"💤", t:"Kurang Tidur", d:"Tidur kurang dari 6 jam menurunkan kadar testosteron hingga 15% dalam seminggu." },
                { e:"🍔", t:"Pola Makan Buruk", d:"Makanan tinggi gula dan lemak trans merusak keseimbangan hormonal." },
                { e:"🚬", t:"Merokok", d:"Nikotin menyempitkan pembuluh darah dan mengganggu sirkulasi ke organ vital." },
                { e:"😰", t:"Stres Kronis", d:"Kortisol tinggi secara langsung menekan produksi testosteron dan stamina." },
                { e:"🛋️", t:"Gaya Hidup Sedentary", d:"Kurang gerak melemahkan otot dasar panggul yang berperan penting dalam kontrol." },
              ].map((c,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">{c.e}</span>
                  <div><h3 className="font-bold text-white text-sm mb-1">{c.t}</h3><p className="text-xs text-gray-400">{c.d}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Sudah tahu penyebabnya? Yuk konsultasi solusi terbaik untuk kondisi Anda!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Cara Mengatasinya Secara Alami</h2>
            <ul className="space-y-3">
              {[
                { t:"Latihan Kegel", d:"Perkuat otot dasar panggul untuk kontrol yang lebih baik. Lakukan 3x sehari, 15 repetisi." },
                { t:"Tidur 7-9 Jam", d:"Prioritaskan tidur berkualitas. Ini cara paling mudah meningkatkan testosteron secara alami." },
                { t:"Olahraga Beban", d:"Squat, deadlift, dan bench press terbukti meningkatkan testosteron secara signifikan." },
                { t:"Kurangi Stres", d:"Meditasi 10 menit per hari menurunkan kortisol dan meningkatkan kontrol emosi." },
                { t:"Suplemen Herbal Alami", d:"Kopi stamina pria seperti Coffiy membantu meningkatkan energi dan vitalitas secara bertahap dan aman." },
              ].map((s,i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">{s.t}:</strong> {s.d}</div>
                </li>
              ))}
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Solusi Alami yang Mulai Banyak Digunakan</h2>
            <p>Banyak pria kini beralih ke <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">kopi stamina pria alami</Link> sebagai bagian dari rutinitas harian mereka. Coffiy diformulasikan khusus untuk mendukung vitalitas, energi, dan performa pria dewasa — tanpa efek samping berbahaya.</p>
            <p>Dengan konsumsi rutin dan kombinasi gaya hidup sehat, banyak pengguna melaporkan peningkatan signifikan dalam 7-14 hari pertama.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kesimpulan</h2>
            <p>Pria cepat keluar bukan takdir. Ini kondisi yang bisa diperbaiki dengan memahami penyebabnya dan mengambil langkah yang tepat. Mulai dari perubahan gaya hidup kecil hari ini, dan rasakan perbedaannya.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Siap Atasi Masalah Ini?</h3>
            <p className="text-gray-400 mb-5 text-sm">✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ 100% Alami &nbsp;✓ Konsultasi Gratis</p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-green-500/50">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-5">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/cara-mengatasi-ejakulasi-dini-secara-alami" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Cara Mengatasi Ejakulasi Dini</h4><p className="text-xs text-gray-400">Panduan lengkap tanpa obat kimia...</p></Link>
              <Link href="/blog/cara-tahan-lama-saat-berhubungan" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Cara Tahan Lama</h4><p className="text-xs text-gray-400">Teknik terbukti efektif...</p></Link>
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
