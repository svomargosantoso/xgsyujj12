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
        "headline": "Cara Meningkatkan Stamina Pria Usia 30+: Panduan Khusus",
        "description": "Panduan lengkap cara meningkatkan stamina pria usia 30 tahun ke atas. Strategi nutrisi, olahraga, dan suplemen alami yang terbukti efektif untuk pria dewasa.",
        "image": "https://coffiystamina.vercel.app/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-02-29", "dateModified": "2024-02-29",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/cara-meningkatkan-stamina-pria-usia-30" }
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
              <Badge className="bg-orange-600 text-white text-xs">High Intent</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />29 Februari 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />8 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Cara Meningkatkan Stamina Pria Usia 30+: Panduan Khusus</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Setelah usia 30, tubuh pria berubah. Tapi bukan berarti stamina harus ikut menurun — jika Anda tahu caranya.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png" alt="Cara Meningkatkan Stamina Pria Usia 30+" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Banyak pria mulai merasakan perubahan setelah usia 30 — mudah lelah, stamina menurun, performa tidak seperti dulu. Ini bukan imajinasi. Secara biologis, testosteron mulai turun 1-2% per tahun setelah usia 30.</p>
            <p>Tapi ini bukan takdir. Dengan strategi yang tepat, pria usia 30+ bisa memiliki stamina yang bahkan lebih baik dari usia 20-an.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Mengapa Stamina Menurun Setelah 30?</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Penurunan testosteron alami 1-2% per tahun</li>
              <li>Metabolisme melambat, lemak lebih mudah menumpuk</li>
              <li>Tanggung jawab kerja dan keluarga meningkatkan stres</li>
              <li>Pola tidur sering terganggu</li>
              <li>Aktivitas fisik berkurang karena kesibukan</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Strategi Khusus untuk Pria 30+</h2>
            <div className="space-y-4">
              {[
                { n:"1", t:"Latihan Beban Intensitas Tinggi", d:"Compound movement (squat, deadlift, bench press) 3-4x seminggu. Ini cara paling efektif meningkatkan testosteron secara alami di usia 30+." },
                { n:"2", t:"Optimasi Tidur", d:"Tidur 7-9 jam adalah 'suplemen gratis' terbaik. 70% testosteron diproduksi saat tidur. Prioritaskan ini di atas segalanya." },
                { n:"3", t:"Nutrisi Berbasis Hormon", d:"Perbanyak zinc (tiram, daging merah), vitamin D (ikan berlemak, sinar matahari), dan lemak sehat (alpukat, minyak zaitun) untuk mendukung produksi testosteron." },
                { n:"4", t:"Manajemen Stres Aktif", d:"Kortisol adalah musuh testosteron. Meditasi, olahraga, dan hobi yang menyenangkan adalah investasi terbaik untuk stamina jangka panjang." },
                { n:"5", t:"Suplemen Alami yang Tepat", d:"Kopi stamina pria seperti Coffiy diformulasikan khusus untuk mendukung energi dan vitalitas pria dewasa — cocok sebagai bagian dari rutinitas harian pria 30+." },
              ].map(s => (
                <div key={s.n} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5 flex gap-4">
                  <span className="text-2xl font-black text-orange-500/40 flex-shrink-0">{s.n}</span>
                  <div><h3 className="font-bold text-white mb-1">{s.t}</h3><p className="text-xs md:text-sm text-gray-400">{s.d}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-1">Pria 30+ butuh solusi yang lebih personal.</p>
              <p className="text-sm text-gray-400 mb-4">Konsultasikan kondisi Anda dengan tim ahli kami — gratis!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Mengapa Coffiy Cocok untuk Pria 30+?</h2>
            <p><Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> bukan sekadar kopi. Ini adalah formula khusus yang dirancang untuk kebutuhan pria dewasa — memberikan energi tahan lama, mendukung vitalitas, dan aman dikonsumsi jangka panjang.</p>
            <ul className="space-y-2">
              {["Formula herbal khusus pria dewasa 30+","Energi tahan lama tanpa crash","Mendukung vitalitas dan performa","Terdaftar BPOM & Halal MUI","Praktis, cukup 1-2 sachet per hari"].map((i,k) => (
                <li key={k} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />{i}</li>
              ))}
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kesimpulan</h2>
            <p>Usia 30+ bukan akhir dari stamina prima. Dengan strategi yang tepat — olahraga beban, tidur berkualitas, nutrisi hormonal, dan suplemen alami — Anda bisa memiliki energi dan vitalitas yang lebih baik dari sebelumnya.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Mulai Perjalanan Stamina Optimal Anda</h3>
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
              <Link href="/blog/solusi-alami-vitalitas-pria-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Solusi Alami Vitalitas Pria</h4><p className="text-xs text-gray-400">Solusi lengkap untuk vitalitas menurun...</p></Link>
              <Link href="/blog/tanda-stamina-pria-mulai-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Tanda Stamina Mulai Menurun</h4><p className="text-xs text-gray-400">Kenali tanda-tandanya sejak dini...</p></Link>
              <Link href="/blog/cara-mengatasi-stamina-pria-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Cara Mengatasi Stamina Menurun</h4><p className="text-xs text-gray-400">Panduan lengkap mengembalikan stamina...</p></Link>
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
