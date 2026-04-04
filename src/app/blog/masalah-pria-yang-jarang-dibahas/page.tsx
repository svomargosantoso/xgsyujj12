'use client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Masalah yang Jarang Dibahas Pria… Tapi Sering Terjadi",
        "description": "Ada masalah yang dialami jutaan pria tapi jarang dibicarakan. Saatnya kita bahas secara terbuka — karena diam bukan solusi.",
        "image": "https://coffiystamina.vercel.app/coffiy-5s-alt.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-03-06", "dateModified": "2024-03-06",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/masalah-pria-yang-jarang-dibahas" }
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
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />6 Maret 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />6 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Masalah yang Jarang Dibahas Pria… Tapi Sering Terjadi</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Ada masalah yang dialami jutaan pria Indonesia tapi hampir tidak pernah dibicarakan. Saatnya kita bahas secara terbuka.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-5s-alt.png" alt="Masalah Pria yang Jarang Dibahas - Coffiy" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Pria diajarkan untuk kuat. Untuk tidak mengeluh. Untuk menyelesaikan masalah sendiri. Dan ketika ada masalah yang terasa "memalukan" — mereka memilih diam.</p>
            <p>Tapi diam bukan solusi. Justru diam yang membuat masalah semakin besar, semakin mempengaruhi kehidupan, dan semakin sulit diatasi.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Masalah yang Dimaksud</h2>
            <p>Kita bicara tentang penurunan stamina, vitalitas, dan performa pria dewasa. Masalah yang dialami oleh:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Pria yang merasa tidak "sekuat" dulu</li>
              <li>Pria yang mulai kehilangan kepercayaan diri</li>
              <li>Pria yang hubungannya mulai terdampak</li>
              <li>Pria yang sudah coba berbagai cara tapi belum berhasil</li>
            </ul>
            <p>Jika Anda ada di salah satu kategori ini — Anda tidak sendirian. Dan yang lebih penting: <strong className="text-white">ada solusinya.</strong></p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Mengapa Pria Tidak Mau Membicarakannya?</h2>
            <div className="space-y-3">
              {[
                { e:"😤", t:"Ego dan Gengsi", d:"Mengakui kelemahan terasa seperti mengakui kegagalan sebagai pria." },
                { e:"😰", t:"Takut Dihakimi", d:"Khawatir pasangan atau orang lain akan memandang berbeda." },
                { e:"🤷", t:"Tidak Tahu Harus ke Mana", d:"Tidak tahu siapa yang bisa dipercaya untuk membahas masalah ini." },
                { e:"💭", t:"Berharap Sembuh Sendiri", d:"Menunggu kondisi membaik dengan sendirinya — yang jarang terjadi tanpa tindakan." },
              ].map((r,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">{r.e}</span>
                  <div><h3 className="font-bold text-white text-sm mb-1">{r.t}</h3><p className="text-xs text-gray-400">{r.d}</p></div>
                </div>
              ))}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Dampak Nyata Jika Dibiarkan</h2>
            <p>Ini bukan sekadar masalah fisik. Dampaknya jauh lebih luas:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Kepercayaan diri yang terus menurun</li>
              <li>Hubungan dengan pasangan yang merenggang</li>
              <li>Produktivitas kerja yang terganggu</li>
              <li>Kualitas hidup secara keseluruhan yang menurun</li>
              <li>Depresi dan kecemasan yang bisa berkembang</li>
            </ul>
            <div className="bg-zinc-800 border-l-4 border-red-500 rounded-r-xl p-5 my-6">
              <p className="italic text-gray-300">"Saya diam selama 2 tahun. Berpura-pura tidak ada masalah. Sampai akhirnya istri saya yang memulai percakapan. Itu momen yang mengubah segalanya."</p>
              <p className="text-xs text-gray-500 mt-2">— Anonim, 44 tahun</p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Saatnya Bicara dan Bertindak</h2>
            <p>Langkah pertama yang paling sulit adalah mengakui ada masalah. Langkah kedua adalah mencari solusi. Dan langkah ketiga — yang paling penting — adalah mengambil tindakan.</p>
            <p>Anda tidak harus menghadapi ini sendirian. Tim kami siap membantu dengan konsultasi yang sepenuhnya rahasia dan tanpa menghakimi. Dan untuk mendukung perjalanan Anda, <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> hadir sebagai solusi alami yang aman dan terpercaya.</p>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-1">Rahasia terjaga 100%. Tidak ada yang tahu kecuali Anda dan tim kami.</p>
              <p className="text-sm text-gray-400 mb-4">Konsultasi gratis sekarang.</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Penutup</h2>
            <p>Kekuatan sejati pria bukan pada kemampuan menyembunyikan masalah — tapi pada keberanian untuk menghadapinya. Anda sudah membaca artikel ini. Itu artinya Anda sudah mengambil langkah pertama.</p>
            <p>Langkah selanjutnya ada di tangan Anda.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Ambil Langkah Pertama Sekarang</h3>
            <p className="text-gray-400 mb-5 text-sm">✓ Rahasia terjaga &nbsp;✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ Gratis</p>
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
              <Link href="/blog/tanda-stamina-pria-mulai-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Tanda Stamina Menurun</h4><p className="text-xs text-gray-400">7 tanda yang sering diabaikan...</p></Link>
              <Link href="/blog/pengalaman-pria-40-tahun-mengatasi-vitalitas" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Pengalaman Pria 40 Tahun</h4><p className="text-xs text-gray-400">Kisah nyata mengatasi masalah ini...</p></Link>
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
