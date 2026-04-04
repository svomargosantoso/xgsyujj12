'use client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, AlertTriangle } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";
  const signs = [
    { n:"1", e:"😴", t:"Mudah Lelah Tanpa Sebab Jelas", d:"Dulu bisa kerja 10 jam tanpa masalah. Sekarang 3 jam sudah ngantuk berat. Ini bukan malas — ini sinyal hormonal." },
    { n:"2", e:"📉", t:"Libido Menurun Drastis", d:"Tidak ada gairah seperti dulu. Ini salah satu tanda paling jelas penurunan testosteron." },
    { n:"3", e:"💪", t:"Massa Otot Berkurang", d:"Meski tetap olahraga, otot terasa lebih kecil dan lemak lebih mudah menumpuk di perut." },
    { n:"4", e:"😤", t:"Mood Tidak Stabil", d:"Mudah marah, mudah frustrasi, atau justru apatis. Testosteron rendah langsung mempengaruhi mood." },
    { n:"5", e:"🧠", t:"Sulit Fokus dan Konsentrasi", d:"Otak terasa 'berkabut'. Sulit membuat keputusan atau berkonsentrasi pada pekerjaan." },
    { n:"6", e:"🌙", t:"Kualitas Tidur Memburuk", d:"Sulit tidur, sering terbangun, atau tidur lama tapi tetap tidak segar. Ini siklus yang memperburuk kondisi." },
    { n:"7", e:"⚡", t:"Performa Fisik Menurun", d:"Olahraga yang dulu mudah kini terasa berat. Recovery lebih lama dari biasanya." },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "7 Tanda-Tanda Stamina Pria Mulai Menurun yang Sering Diabaikan",
        "description": "Kenali 7 tanda stamina pria mulai menurun yang sering diabaikan. Deteksi dini dan ambil tindakan sebelum kondisi semakin memburuk.",
        "image": "https://coffiystamina.vercel.app/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-03-03", "dateModified": "2024-03-03",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/tanda-stamina-pria-mulai-menurun" }
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
              <Badge className="bg-purple-700 text-white text-xs">Emotional</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />3 Maret 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />5 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">7 Tanda-Tanda Stamina Pria Mulai Menurun yang Sering Diabaikan</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Banyak pria baru sadar ketika kondisinya sudah parah. Kenali tanda-tandanya sejak dini — sebelum terlambat.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png" alt="Tanda Stamina Pria Mulai Menurun" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Stamina pria tidak menurun dalam semalam. Prosesnya bertahap — dan itulah yang membuatnya berbahaya. Banyak pria baru menyadari ada masalah ketika kondisinya sudah cukup parah.</p>
            <p>Artikel ini akan membantu Anda mengenali tanda-tanda awal, sehingga Anda bisa mengambil tindakan sebelum kondisi semakin memburuk.</p>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 flex gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-yellow-200">Jika Anda mengalami 3 atau lebih tanda di bawah ini, ini saatnya mengambil tindakan.</p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">7 Tanda yang Harus Diwaspadai</h2>
            <div className="space-y-4">
              {signs.map(s => (
                <div key={s.n} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5 flex gap-4">
                  <div className="flex-shrink-0 text-center">
                    <span className="text-2xl">{s.e}</span>
                    <div className="text-xs font-bold text-red-500 mt-1">#{s.n}</div>
                  </div>
                  <div><h3 className="font-bold text-white mb-1">{s.t}</h3><p className="text-xs md:text-sm text-gray-400">{s.d}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-1">Berapa tanda yang Anda rasakan?</p>
              <p className="text-sm text-gray-400 mb-4">Jangan tunggu sampai semua tanda muncul. Konsultasi sekarang — gratis!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Apa yang Harus Dilakukan?</h2>
            <p>Jika Anda mengenali 3 atau lebih tanda di atas, ini saatnya bertindak. Langkah pertama yang bisa Anda ambil:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Prioritaskan tidur 7-9 jam per malam</li>
              <li>Mulai olahraga beban minimal 3x seminggu</li>
              <li>Perbaiki pola makan — kurangi gula, perbanyak protein</li>
              <li>Pertimbangkan <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">suplemen stamina alami</Link> yang aman dan terdaftar</li>
              <li>Konsultasikan kondisi Anda dengan ahli</li>
            </ul>
            <p>Semakin cepat Anda bertindak, semakin cepat kondisi membaik. Tubuh pria memiliki kemampuan luar biasa untuk pulih — jika diberi kesempatan.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Jangan Tunggu Sampai Terlambat</h3>
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
              <Link href="/blog/kenapa-pria-dulu-kuat-sekarang-cepat-selesai" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Kenapa Pria Dulu Kuat?</h4><p className="text-xs text-gray-400">Penjelasan ilmiah perubahan ini...</p></Link>
              <Link href="/blog/solusi-alami-vitalitas-pria-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Solusi Alami Vitalitas Pria</h4><p className="text-xs text-gray-400">7 solusi alami yang terbukti...</p></Link>
              <Link href="/blog/review-coffiy-kopi-stamina-pria" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Review Coffiy</h4><p className="text-xs text-gray-400">Benarkah efektif untuk stamina pria?</p></Link>
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
