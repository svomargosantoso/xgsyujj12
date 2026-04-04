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
        "headline": "Solusi Alami untuk Vitalitas Pria yang Menurun",
        "description": "Temukan solusi alami terbaik untuk mengatasi vitalitas pria yang menurun. Panduan lengkap dari herbal, nutrisi, olahraga, hingga suplemen aman yang terbukti efektif.",
        "image": "https://coffiystamina.vercel.app/coffiy-1s.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-03-01", "dateModified": "2024-03-01",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/solusi-alami-vitalitas-pria-menurun" }
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
              <Badge className="bg-green-700 text-white text-xs">Solusi</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />1 Maret 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />7 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">Solusi Alami untuk Vitalitas Pria yang Menurun</h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">Vitalitas menurun bukan hanya soal usia — ini soal gaya hidup. Dan gaya hidup bisa diubah, mulai hari ini.</p>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-1s.png" alt="Solusi Alami Vitalitas Pria Menurun - Coffiy" className="w-full h-auto" />
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
            <p>Vitalitas pria yang menurun adalah masalah nyata yang dialami jutaan pria Indonesia. Tapi banyak yang tidak tahu bahwa solusinya tidak harus mahal, tidak harus kimia, dan tidak harus ribet.</p>
            <p>Alam menyediakan banyak solusi. Yang dibutuhkan hanya pengetahuan yang tepat dan konsistensi.</p>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Tanda-Tanda Vitalitas Pria Menurun</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Mudah lelah meski tidak banyak aktivitas</li>
              <li>Libido menurun drastis</li>
              <li>Sulit konsentrasi dan fokus</li>
              <li>Mood tidak stabil, mudah marah</li>
              <li>Massa otot berkurang, lemak bertambah</li>
              <li>Performa fisik dan seksual menurun</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">7 Solusi Alami yang Terbukti</h2>
            <div className="space-y-3">
              {[
                { e:"🌿", t:"Herbal Tongkat Ali", d:"Terbukti secara klinis meningkatkan testosteron dan libido pria dewasa." },
                { e:"🥩", t:"Protein Berkualitas Tinggi", d:"Daging tanpa lemak, telur, dan ikan salmon mendukung produksi hormon." },
                { e:"🏋️", t:"Latihan Beban", d:"Compound exercise 3-4x seminggu adalah cara paling efektif meningkatkan testosteron." },
                { e:"😴", t:"Tidur Berkualitas", d:"7-9 jam tidur nyenyak = produksi testosteron optimal. Tidak bisa digantikan suplemen apapun." },
                { e:"☀️", t:"Vitamin D dari Sinar Matahari", d:"15-20 menit paparan sinar matahari pagi meningkatkan testosteron secara signifikan." },
                { e:"🧘", t:"Meditasi & Mindfulness", d:"Menurunkan kortisol yang menjadi musuh utama testosteron dan vitalitas." },
                { e:"☕", t:"Kopi Stamina Herbal", d:"Formula herbal dalam kopi stamina pria seperti Coffiy membantu meningkatkan energi dan vitalitas secara bertahap." },
              ].map((s,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">{s.e}</span>
                  <div><h3 className="font-bold text-white text-sm mb-1">{s.t}</h3><p className="text-xs text-gray-400">{s.d}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Ingin tahu solusi yang paling cocok untuk kondisi Anda?</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-8">Coffiy: Solusi Praktis untuk Pria Sibuk</h2>
            <p>Tidak semua pria punya waktu untuk program lengkap. Itulah mengapa <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> hadir — solusi praktis yang bisa dikonsumsi kapan saja, di mana saja, sebagai bagian dari rutinitas harian.</p>
            <ul className="space-y-2">
              {["Praktis, cukup seduh 1 sachet","Formula herbal alami pilihan","Meningkatkan energi dan vitalitas","Aman jangka panjang, BPOM & Halal MUI","Lebih dari 10.000 pria sudah merasakan manfaatnya"].map((i,k) => (
                <li key={k} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Kembalikan Vitalitas Anda Sekarang</h3>
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
              <Link href="/blog/cara-meningkatkan-stamina-pria-usia-30" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Stamina Pria Usia 30+</h4><p className="text-xs text-gray-400">Panduan khusus pria 30 tahun ke atas...</p></Link>
              <Link href="/blog/tanda-stamina-pria-mulai-menurun" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Tanda Stamina Mulai Menurun</h4><p className="text-xs text-gray-400">Kenali tanda-tandanya sejak dini...</p></Link>
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
