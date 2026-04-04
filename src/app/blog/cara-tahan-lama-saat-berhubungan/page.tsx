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
        "headline": "Cara Tahan Lama Saat Berhubungan (Terbukti Efektif)",
        "description": "Teknik dan cara tahan lama saat berhubungan yang terbukti efektif secara alami. Panduan praktis untuk pria dewasa meningkatkan performa dan kepercayaan diri.",
        "image": "https://coffiystamina.vercel.app/coffiy-5s.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-02-27", "dateModified": "2024-02-27",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/cara-tahan-lama-saat-berhubungan" }
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
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />27 Februari 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />7 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Cara Tahan Lama Saat Berhubungan (Terbukti Efektif)</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Ini bukan soal obat-obatan. Ini soal memahami tubuh Anda dan melatihnya dengan cara yang benar.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-5s.png" alt="Cara Tahan Lama Saat Berhubungan - Coffiy Kopi Stamina Pria" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Banyak pria mencari cara tahan lama tapi berakhir dengan produk kimia yang justru berbahaya. Padahal, solusi terbaik ada di dalam diri Anda sendiri — dan bisa diperkuat dengan pendekatan alami yang tepat.</p>
            <p>Masalah ini lebih umum dari yang Anda kira. Dan kabar baiknya: <strong className="text-white">ini bisa diperbaiki</strong>, dengan teknik yang benar dan konsisten.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Mengapa Pria Sulit Tahan Lama?</h2>
            <p>Ada beberapa faktor utama yang mempengaruhi durasi:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Sistem saraf yang terlalu sensitif terhadap rangsangan</li>
              <li>Otot dasar panggul yang lemah dan tidak terlatih</li>
              <li>Kecemasan performa yang menciptakan lingkaran setan</li>
              <li>Kadar testosteron dan stamina yang menurun</li>
              <li>Kurangnya kontrol pernapasan saat tegang</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">5 Teknik Tahan Lama yang Terbukti</h2>
            <div className="space-y-4">
              {[
                { n:"1", t:"Kontrol Pernapasan", d:"Saat mendekati klimaks, tarik napas dalam-dalam dan tahan 4 detik. Ini mengaktifkan sistem saraf parasimpatik yang memperlambat respons tubuh." },
                { n:"2", t:"Latihan Kegel Rutin", d:"Kencangkan otot yang sama seperti saat menahan buang air kecil. Tahan 5-10 detik, ulangi 15-20 kali per hari. Hasilnya terasa dalam 3-4 minggu." },
                { n:"3", t:"Teknik Edging", d:"Latih diri mendekati klimaks lalu berhenti. Ulangi berkali-kali. Ini melatih otak dan tubuh untuk menunda respons secara alami." },
                { n:"4", t:"Fokus pada Sensasi, Bukan Hasil", d:"Kecemasan soal 'berapa lama' justru mempercepat. Fokus pada momen saat ini menurunkan kecemasan dan memperpanjang durasi." },
                { n:"5", t:"Tingkatkan Stamina Fisik", d:"Stamina seksual berbanding lurus dengan stamina fisik. Olahraga rutin dan suplemen alami seperti kopi stamina pria membantu meningkatkan daya tahan secara menyeluruh." },
              ].map(s => (
                <div key={s.n} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5 flex gap-4">
                  <span className="text-2xl font-black text-red-500/40 flex-shrink-0">{s.n}</span>
                  <div><h3 className="font-bold text-white mb-1">{s.t}</h3><p className="text-xs md:text-sm text-gray-400">{s.d}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Butuh solusi yang lebih cepat dan personal? Tim kami siap membantu!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Peran Suplemen Alami</h2>
            <p>Selain teknik fisik, banyak pria menemukan bahwa <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">suplemen stamina alami</Link> seperti Coffiy membantu meningkatkan energi dan daya tahan secara keseluruhan. Dengan stamina yang lebih baik, kontrol pun meningkat secara alami.</p>
            <ul className="space-y-2">
              {["Formula herbal khusus pria dewasa","Meningkatkan energi dan stamina tahan lama","Mendukung kepercayaan diri pria","Aman, BPOM & Halal MUI"].map((i,k) => (
                <li key={k} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />{i}</li>
              ))}
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kesimpulan</h2>
            <p>Tahan lama bukan bakat — ini keterampilan yang bisa dilatih. Mulai dari teknik pernapasan, latihan Kegel, hingga menjaga stamina fisik dengan suplemen alami. Konsistensi adalah kuncinya.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Mulai Perubahan Hari Ini</h3>
            <p className="text-gray-400 mb-5 text-sm">Konsultasi gratis — rahasia terjaga 100%</p>
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
              <Link href="/blog/penyebab-pria-cepat-keluar-dan-cara-mengatasinya" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Penyebab Pria Cepat Keluar</h4><p className="text-xs text-gray-400">Kenali penyebab dan solusinya...</p></Link>
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
