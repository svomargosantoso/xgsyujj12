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
        "headline": "Pengalaman Pria 40 Tahun Mengatasi Masalah Vitalitas dengan Coffiy",
        "description": "Kisah nyata pria 40 tahun yang berhasil mengatasi masalah vitalitas dan stamina menggunakan Coffiy. Perjalanan 30 hari yang mengubah segalanya.",
        "image": "https://coffiystamina.vercel.app/coffiy-box.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-03-05", "dateModified": "2024-03-05",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/pengalaman-pria-40-tahun-mengatasi-vitalitas" }
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
              <Badge className="bg-yellow-600 text-white text-xs">Review & Pengalaman</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />5 Maret 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />7 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Pengalaman Pria 40 Tahun Mengatasi Masalah Vitalitas dengan Coffiy</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Kisah nyata perjalanan 30 hari yang mengubah segalanya — dari ragu-ragu hingga merasakan perbedaan nyata.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-box.png" alt="Pengalaman Pria 40 Tahun dengan Coffiy Kopi Stamina" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 mb-6">
              <p className="text-xs text-gray-500 mb-1">Ditulis berdasarkan pengalaman nyata pengguna Coffiy</p>
              <p className="font-semibold text-white">Hendra W., 41 tahun, Pengusaha — Jakarta Selatan</p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Awal Masalah: Ketika Segalanya Mulai Berubah</h2>
            <p>Saya tidak pernah menyangka akan mengalami ini di usia 40. Dulu, saya selalu merasa penuh energi. Tapi sekitar 2 tahun lalu, semuanya mulai berubah perlahan.</p>
            <p>Mudah lelah. Stamina menurun. Tidak bersemangat seperti dulu. Awalnya saya pikir ini hanya stres kerja. Tapi lama-lama, saya sadar ini lebih dari sekadar kelelahan biasa.</p>
            <p>Yang paling berat bukan fisiknya — tapi dampaknya pada kepercayaan diri dan hubungan dengan istri. Itu yang benar-benar menyakitkan.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Mencari Solusi: Dari Dokter hingga Suplemen</h2>
            <p>Saya sudah coba berbagai cara. Ke dokter, cek hormon, minum vitamin. Hasilnya ada, tapi tidak signifikan. Dan beberapa suplemen yang saya coba justru membuat saya tidak nyaman — efek samping yang tidak menyenangkan.</p>
            <p>Sampai seorang teman merekomendasikan Coffiy. Jujur, awalnya saya skeptis. "Masa kopi bisa bantu?" pikir saya. Tapi karena sudah frustrasi, saya putuskan untuk mencoba.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Perjalanan 30 Hari Bersama Coffiy</h2>
            <div className="space-y-4">
              {[
                { period:"Minggu 1", title:"Adaptasi", desc:"Tidak ada perubahan dramatis. Tapi saya merasa lebih segar di pagi hari. Kopi pagi saya terasa berbeda — lebih 'bertenaga'." },
                { period:"Minggu 2", title:"Mulai Terasa", desc:"Energi lebih stabil sepanjang hari. Tidak ada crash di sore hari seperti biasanya. Mulai lebih bersemangat untuk olahraga." },
                { period:"Minggu 3", title:"Perubahan Nyata", desc:"Stamina meningkat signifikan. Olahraga lebih kuat, recovery lebih cepat. Istri mulai bertanya 'kamu minum apa?'" },
                { period:"Minggu 4", title:"Transformasi", desc:"Ini yang saya tunggu-tunggu. Kepercayaan diri kembali. Hubungan dengan istri membaik. Saya merasa seperti 10 tahun lebih muda." },
              ].map((w,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-red-600 text-white text-xs">{w.period}</Badge>
                    <h3 className="font-bold text-white">{w.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400">{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-1">Ingin merasakan perjalanan yang sama?</p>
              <p className="text-sm text-gray-400 mb-4">Konsultasi gratis untuk mulai perjalanan Anda!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Apa yang Membuat Coffiy Berbeda?</h2>
            <p>Setelah 30 hari, saya bisa menyimpulkan beberapa hal yang membuat <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> berbeda dari suplemen lain yang pernah saya coba:</p>
            <ul className="space-y-3">
              {[
                { t:"Tidak ada efek samping", d:"Setelah 30 hari, tidak ada keluhan apapun. Aman untuk dikonsumsi rutin." },
                { t:"Efek bertahap tapi nyata", d:"Bukan efek instan yang cepat hilang. Perubahan bertahap tapi berkelanjutan." },
                { t:"Praktis", d:"Cukup seduh pagi hari. Tidak perlu jadwal minum yang rumit." },
                { t:"Terpercaya", d:"BPOM dan Halal MUI membuat saya tenang mengonsumsinya jangka panjang." },
              ].map((i,k) => (
                <li key={k} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">{i.t}:</strong> {i.d}</div>
                </li>
              ))}
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Pesan untuk Pria yang Sedang Berjuang</h2>
            <p>Jika Anda sedang mengalami hal yang sama dengan yang saya alami dulu — jangan menyerah dan jangan malu. Ini lebih umum dari yang Anda kira, dan solusinya ada.</p>
            <p>Yang penting adalah mengambil langkah pertama. Saya menyesal tidak melakukannya lebih awal.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Mulai Perjalanan Anda Hari Ini</h3>
            <p className="text-gray-400 mb-2 text-sm">Seperti Hendra, ribuan pria sudah merasakan manfaatnya</p>
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
              <Link href="/blog/review-coffiy-kopi-stamina-pria" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Review Coffiy Lengkap</h4><p className="text-xs text-gray-400">Analisis lengkap produk Coffiy...</p></Link>
              <Link href="/blog/cara-meningkatkan-stamina-pria-usia-30" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Stamina Pria Usia 30+</h4><p className="text-xs text-gray-400">Panduan khusus pria 30 tahun ke atas...</p></Link>
              <Link href="/blog/kenapa-pria-dulu-kuat-sekarang-cepat-selesai" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Kenapa Pria Dulu Kuat?</h4><p className="text-xs text-gray-400">Penjelasan ilmiah perubahan ini...</p></Link>
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
