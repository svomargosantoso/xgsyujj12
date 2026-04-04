'use client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, CheckCircle2, Star } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";
  const ratings = [
    { label: "Efektivitas", score: 4.8 },
    { label: "Rasa", score: 4.7 },
    { label: "Keamanan", score: 5.0 },
    { label: "Nilai Harga", score: 4.6 },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Review",
        "name": "Review Coffiy: Benarkah Bisa Meningkatkan Stamina Pria?",
        "description": "Review jujur Coffiy kopi stamina pria. Apakah benar efektif meningkatkan stamina dan vitalitas pria dewasa? Baca pengalaman nyata dan analisis lengkapnya.",
        "itemReviewed": { "@type": "Product", "name": "Coffiy Kopi Stamina Pria", "brand": { "@type": "Brand", "name": "Coffiy" } },
        "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-03-04",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/review-coffiy-kopi-stamina-pria" }
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
              <Badge className="bg-yellow-600 text-white text-xs">Review</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />4 Maret 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />8 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Review Coffiy: Benarkah Bisa Meningkatkan Stamina Pria?</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Review jujur dan lengkap tentang Coffiy — kopi stamina pria yang diklaim bisa meningkatkan energi dan vitalitas pria dewasa.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png" alt="Review Coffiy Kopi Stamina Pria" className="w-full h-auto" />
          </div>

          {/* Rating Card */}
          <Card className="bg-zinc-800 border-zinc-700 mb-8">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-yellow-500">4.8</div>
                  <div className="flex gap-1 justify-center mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">dari 10.000+ ulasan</div>
                </div>
                <div className="flex-1 w-full space-y-3">
                  {ratings.map((r,i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 w-24 flex-shrink-0">{r.label}</span>
                      <div className="flex-1 bg-zinc-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(r.score/5)*100}%` }} />
                      </div>
                      <span className="text-xs font-bold text-yellow-500 w-8">{r.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <h2 className="text-xl md:text-2xl font-bold text-white mt-4">Apa Itu Coffiy?</h2>
            <p>Coffiy adalah kopi premium yang diformulasikan khusus untuk pria dewasa. Berbeda dengan kopi biasa, Coffiy mengandung campuran bahan herbal alami pilihan yang dirancang untuk meningkatkan stamina, energi, dan vitalitas pria.</p>
            <p>Produk ini sudah terdaftar resmi di BPOM dengan nomor MD 867031211059 dan bersertifikat Halal MUI nomor 00150099991220 — dua hal yang menjadi standar keamanan produk di Indonesia.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Apa yang Membedakan Coffiy dari Kopi Biasa?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t:"Formula Khusus Pria", d:"Bukan sekadar kopi — ada tambahan herbal alami yang mendukung vitalitas pria dewasa." },
                { t:"Energi Tahan Lama", d:"Tidak seperti kopi biasa yang efeknya cepat habis, Coffiy memberikan energi yang lebih stabil." },
                { t:"Aman Jangka Panjang", d:"Terdaftar BPOM dan Halal MUI. Bisa dikonsumsi rutin tanpa khawatir efek samping." },
                { t:"Praktis", d:"Cukup seduh 1 sachet dengan air panas. Bisa diminum kapan saja, di mana saja." },
              ].map((f,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4">
                  <h3 className="font-bold text-white text-sm mb-1">{f.t}</h3>
                  <p className="text-xs text-gray-400">{f.d}</p>
                </div>
              ))}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Apa Kata Pengguna?</h2>
            <div className="space-y-4">
              {[
                { name:"Budi S., 38 tahun", loc:"Jakarta", text:"Setelah 2 minggu rutin, stamina saya meningkat drastis. Tidak mudah lelah lagi dan lebih bersemangat." },
                { name:"Andi R., 45 tahun", loc:"Surabaya", text:"Awalnya skeptis, tapi setelah coba 1 box, saya langsung pesan lagi. Efeknya nyata dan tidak ada efek samping." },
                { name:"Deni M., 33 tahun", loc:"Bandung", text:"Kopi pagi saya sekarang Coffiy. Energi lebih tahan lama, fokus lebih baik, dan istri juga happy." },
              ].map((t,i) => (
                <div key={i} className="bg-zinc-800 border-l-4 border-yellow-500 rounded-r-xl p-4">
                  <p className="italic text-gray-300 text-sm mb-2">"{t.text}"</p>
                  <p className="text-xs text-gray-500">— {t.name}, {t.loc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Ingin merasakan manfaatnya sendiri? Konsultasi dulu — gratis!</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Kelebihan dan Kekurangan</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                <h3 className="font-bold text-green-400 mb-3">✅ Kelebihan</h3>
                <ul className="space-y-2">
                  {["Terdaftar BPOM & Halal MUI","Bahan alami, aman jangka panjang","Efek energi tahan lama","Praktis dan mudah dikonsumsi","Harga terjangkau"].map((i,k) => (
                    <li key={k} className="flex items-center gap-2 text-xs text-gray-300"><CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4">
                <h3 className="font-bold text-gray-400 mb-3">⚠️ Perlu Diperhatikan</h3>
                <ul className="space-y-2">
                  {["Hasil bervariasi tiap individu","Perlu konsumsi rutin untuk hasil optimal","Bukan pengganti gaya hidup sehat"].map((i,k) => (
                    <li key={k} className="flex items-center gap-2 text-xs text-gray-300"><span className="text-yellow-500 flex-shrink-0">•</span>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Verdict: Apakah Coffiy Worth It?</h2>
            <p><strong className="text-white">Ya, sangat worth it</strong> — terutama untuk pria dewasa yang ingin meningkatkan stamina dan vitalitas secara alami dan aman. Dengan sertifikasi BPOM dan Halal MUI, Coffiy adalah pilihan yang bisa dipercaya.</p>
            <p>Untuk hasil terbaik, kombinasikan dengan pola hidup sehat: tidur cukup, olahraga rutin, dan pola makan bergizi.</p>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Coba Coffiy Sekarang</h3>
            <p className="text-gray-400 mb-2 text-sm">Konsultasi gratis untuk rekomendasi paket terbaik untuk Anda</p>
            <p className="text-xs text-gray-500 mb-5">✓ BPOM &nbsp;✓ Halal MUI &nbsp;✓ 100% Alami &nbsp;✓ Gratis Ongkir</p>
            <Button onClick={() => window.open(whatsappUrl, '_blank')} size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-green-500/50">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-5">Artikel Terkait</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/pengalaman-pria-40-tahun-mengatasi-vitalitas" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Pengalaman Pria 40 Tahun</h4><p className="text-xs text-gray-400">Kisah nyata mengatasi masalah vitalitas...</p></Link>
              <Link href="/blog/perbedaan-kopi-biasa-vs-kopi-stamina" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Kopi Biasa vs Kopi Stamina</h4><p className="text-xs text-gray-400">Apa perbedaan nyatanya?</p></Link>
              <Link href="/blog/solusi-alami-vitalitas-pria-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Solusi Alami Vitalitas Pria</h4><p className="text-xs text-gray-400">7 solusi alami yang terbukti...</p></Link>
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
