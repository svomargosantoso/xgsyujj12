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
        "headline": "Kenapa Pria yang Dulu Kuat Sekarang Cepat Selesai?",
        "description": "Penjelasan ilmiah mengapa pria yang dulu kuat kini cepat selesai. Penyebab tersembunyi dan solusi nyata yang bisa mulai diterapkan hari ini.",
        "image": "https://coffiystamina.vercel.app/coffiy-background-grafik-stamina-pria-merah.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-03-02", "dateModified": "2024-03-02",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/kenapa-pria-dulu-kuat-sekarang-cepat-selesai" }
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
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />2 Maret 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />6 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Kenapa Pria yang Dulu Kuat Sekarang Cepat Selesai?</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Dulu bisa berjam-jam. Sekarang hitungan menit. Apa yang sebenarnya terjadi pada tubuh Anda?</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-background-grafik-stamina-pria-merah.png" alt="Kenapa Pria Dulu Kuat Sekarang Cepat Selesai" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Ini pertanyaan yang banyak pria tanyakan dalam hati tapi jarang berani diucapkan. Dan justru karena tidak dibahas, masalah ini terus membesar — mempengaruhi kepercayaan diri, hubungan, bahkan cara pandang terhadap diri sendiri.</p>
            <p>Jika Anda merasakan ini, ketahuilah: <strong className="text-white">ini bukan kelemahan Anda. Ini adalah sinyal dari tubuh yang perlu didengar.</strong></p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Ini Bukan Tentang Usia Semata</h2>
            <p>Banyak pria berpikir ini hanya soal bertambahnya usia. Tapi kenyataannya, ada pria usia 50 yang performanya lebih baik dari pria usia 25. Perbedaannya bukan di angka — tapi di <strong className="text-white">kondisi hormonal, gaya hidup, dan cara merawat tubuh</strong>.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">5 Penyebab Tersembunyi yang Jarang Disadari</h2>
            <div className="space-y-4">
              {[
                { n:"1", t:"Penurunan Testosteron Diam-Diam", d:"Testosteron turun 1-2% per tahun setelah usia 30. Dalam 10 tahun, bisa turun 10-20% tanpa disadari. Ini yang membuat pria yang dulu 'kuat' kini merasa berbeda." },
                { n:"2", t:"Stres Kronis yang Menumpuk", d:"Tanggung jawab kerja, keluarga, finansial — semua ini meningkatkan kortisol. Dan kortisol adalah musuh langsung testosteron dan stamina." },
                { n:"3", t:"Kualitas Tidur yang Memburuk", d:"Seiring bertambahnya usia dan tanggung jawab, tidur sering terganggu. Padahal 70% testosteron diproduksi saat tidur nyenyak." },
                { n:"4", t:"Pola Makan yang Berubah", d:"Kesibukan membuat pola makan tidak terjaga. Makanan cepat saji, kurang zinc dan vitamin D — semua ini perlahan merusak keseimbangan hormonal." },
                { n:"5", t:"Kecemasan Performa yang Menciptakan Lingkaran Setan", d:"Sekali gagal, muncul kecemasan. Kecemasan membuat gagal lagi. Lingkaran ini terus berputar jika tidak diputus dengan cara yang tepat." },
              ].map(s => (
                <div key={s.n} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5 flex gap-4">
                  <span className="text-2xl font-black text-purple-500/40 flex-shrink-0">{s.n}</span>
                  <div><h3 className="font-bold text-white mb-1">{s.t}</h3><p className="text-xs md:text-sm text-gray-400">{s.d}</p></div>
                </div>
              ))}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kabar Baiknya: Ini Bisa Dibalik</h2>
            <p>Semua penyebab di atas bisa diatasi. Tubuh pria memiliki kemampuan luar biasa untuk pulih — jika diberi kondisi yang tepat. Kombinasi dari:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Perbaikan pola tidur dan manajemen stres</li>
              <li>Olahraga beban yang konsisten</li>
              <li>Nutrisi yang mendukung produksi testosteron</li>
              <li>Suplemen herbal alami yang tepat seperti <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link></li>
            </ul>
            <p>...bisa membawa perubahan nyata dalam 2-4 minggu pertama.</p>
            <div className="bg-zinc-800 border-l-4 border-red-500 rounded-r-xl p-5 my-6">
              <p className="italic text-gray-300">"Saya pikir ini sudah tidak bisa diperbaiki. Ternyata setelah 3 minggu konsisten, perubahan itu nyata. Istri saya sampai heran."</p>
              <p className="text-xs text-gray-500 mt-2">— Rudi H., 42 tahun, Surabaya</p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Langkah Pertama yang Bisa Anda Ambil Hari Ini</h2>
            <p>Jangan tunggu sampai masalah ini semakin besar. Mulai dari langkah kecil: perbaiki tidur, kurangi stres, dan pertimbangkan suplemen alami yang aman. Konsultasikan kondisi Anda dengan tim ahli kami — gratis dan rahasia terjaga.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Sudah Saatnya Ambil Kendali Kembali</h3>
            <p className="text-gray-400 mb-2 text-sm">Konsultasi gratis — rahasia 100% terjaga</p>
            <p className="text-xs text-gray-500 mb-5">✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ 100% Alami</p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-green-500/50">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-5">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/tanda-stamina-pria-mulai-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Tanda Stamina Mulai Menurun</h4><p className="text-xs text-gray-400">Kenali tanda-tandanya sejak dini...</p></Link>
              <Link href="/blog/cara-mengatasi-ejakulasi-dini-secara-alami" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Cara Mengatasi Ejakulasi Dini</h4><p className="text-xs text-gray-400">Panduan lengkap tanpa obat kimia...</p></Link>
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
