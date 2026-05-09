'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Berapa lama hasil peningkatan vitalitas bisa dirasakan?", a: "Dengan pendekatan holistik yang konsisten, perubahan awal biasanya terasa dalam 2-4 minggu. Peningkatan signifikan umumnya terlihat setelah 2-3 bulan konsistensi." },
    { q: "Apakah suplemen herbal aman untuk dikonsumsi jangka panjang?", a: "Suplemen herbal yang sudah terdaftar BPOM dan bersertifikat Halal MUI seperti Coffiy aman untuk dikonsumsi jangka panjang sesuai anjuran. Selalu pilih produk yang sudah terverifikasi resmi." },
    { q: "Olahraga apa yang paling efektif untuk meningkatkan testosteron?", a: "Latihan beban compound seperti squat, deadlift, dan bench press adalah yang paling efektif. Lakukan 3-4x seminggu dengan intensitas sedang-tinggi untuk hasil optimal." },
    { q: "Apakah stres benar-benar mempengaruhi vitalitas pria?", a: "Ya, sangat signifikan. Stres kronis meningkatkan kortisol yang secara langsung menekan produksi testosteron. Manajemen stres adalah komponen krusial dalam program peningkatan vitalitas." },
    { q: "Berapa jam tidur yang ideal untuk vitalitas optimal?", a: "7-9 jam per malam adalah rentang ideal. Penelitian menunjukkan tidur kurang dari 6 jam dapat menurunkan kadar testosteron hingga 15% dalam seminggu." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Tips Meningkatkan Vitalitas Pria Secara Alami: Panduan Lengkap 2024",
        "description": "Panduan lengkap meningkatkan vitalitas pria secara alami. Dari pola makan, olahraga, tidur berkualitas, manajemen stres, hingga suplemen herbal yang aman dan terbukti efektif.",
        "image": "https://coffiystamina.vercel.app/coffiy-box.png",
        "author": { "@type": "Organization", "name": "Coffiy Team" },
        "publisher": { "@type": "Organization", "name": "Coffiy", "logo": { "@type": "ImageObject", "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png" } },
        "datePublished": "2024-02-20", "dateModified": "2024-04-23",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://coffiystamina.vercel.app/blog/tips-meningkatkan-vitalitas-pria-secara-alami" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://coffiystamina.vercel.app" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://coffiystamina.vercel.app/blog" },
          { "@type": "ListItem", "position": 3, "name": "Tips Meningkatkan Vitalitas Pria", "item": "https://coffiystamina.vercel.app/blog/tips-meningkatkan-vitalitas-pria-secara-alami" }
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
              <Badge className="bg-green-700 text-white text-xs">Panduan Lengkap</Badge>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" />20 Februari 2024</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="h-3 w-3" />12 menit baca</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Tips Meningkatkan Vitalitas Pria Secara Alami: Panduan Lengkap 2024
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Vitalitas pria bukan hanya soal performa — ini tentang kualitas hidup secara keseluruhan. Panduan komprehensif ini akan membantu Anda memahami dan meningkatkan vitalitas secara alami, aman, dan berkelanjutan.
            </p>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden">
            <img src="/coffiy-box.png" alt="Tips Meningkatkan Vitalitas Pria Secara Alami - Coffiy Kopi Stamina" className="w-full h-auto" />
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">

            <p>Vitalitas pria adalah kombinasi dari energi fisik, kesehatan hormonal, performa seksual, dan kesejahteraan mental. Ketika salah satu aspek terganggu, seluruh kualitas hidup ikut terpengaruh.</p>
            <p>Penelitian dari <strong className="text-white">Journal of Clinical Endocrinology</strong> menunjukkan bahwa kadar testosteron pria mulai menurun rata-rata 1-2% per tahun setelah usia 30. Namun, penurunan ini bisa diperlambat — bahkan dibalik — dengan pendekatan yang tepat.</p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 my-6">
              <h3 className="font-bold text-white mb-3">📊 Fakta Penting tentang Vitalitas Pria:</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong className="text-white">40%</strong> pria di atas 45 tahun mengalami gejala testosteron rendah</li>
                <li>• <strong className="text-white">70%</strong> testosteron diproduksi saat tidur nyenyak</li>
                <li>• <strong className="text-white">15%</strong> penurunan testosteron terjadi hanya dalam 1 minggu kurang tidur</li>
                <li>• <strong className="text-white">12%</strong> peningkatan performa fisik dengan konsumsi kopi yang tepat</li>
              </ul>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">Mengapa Vitalitas Pria Menurun?</h2>
            <p>Sebelum membahas solusi, penting memahami faktor-faktor yang menyebabkan penurunan vitalitas:</p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { e:"⏰", t:"Faktor Usia", d:"Testosteron turun 1-2% per tahun setelah 30. Proses alami yang bisa diperlambat." },
                { e:"😰", t:"Stres Kronis", d:"Kortisol tinggi menekan produksi testosteron secara langsung." },
                { e:"💤", t:"Kurang Tidur", d:"Gangguan tidur mengurangi produksi hormon pertumbuhan dan testosteron." },
                { e:"🍔", t:"Pola Makan Buruk", d:"Defisiensi zinc, vitamin D, dan omega-3 merusak keseimbangan hormonal." },
                { e:"🛋️", t:"Gaya Hidup Sedentary", d:"Kurang gerak mempercepat penurunan massa otot dan testosteron." },
                { e:"🚬", t:"Kebiasaan Buruk", d:"Merokok dan alkohol berlebihan merusak sirkulasi dan fungsi hormonal." },
              ].map((c,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">{c.e}</span>
                  <div><h3 className="font-bold text-white text-sm mb-1">{c.t}</h3><p className="text-xs text-gray-400">{c.d}</p></div>
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">1. Optimasi Pola Makan untuk Vitalitas Maksimal</h2>
            <p>Nutrisi adalah fondasi dari semua aspek kesehatan pria. Tanpa nutrisi yang tepat, semua upaya lain akan kurang optimal.</p>
            <h3 className="text-lg md:text-xl font-bold text-white mt-6">Makanan yang Wajib Ada dalam Diet Pria</h3>
            <div className="space-y-3 my-4">
              {[
                { t:"Tiram dan Seafood", d:"Sumber zinc terbaik. Zinc adalah mineral kunci untuk produksi testosteron. Kekurangan zinc bisa menurunkan testosteron hingga 74%." },
                { t:"Telur Utuh", d:"Mengandung kolesterol sehat yang menjadi bahan baku testosteron, plus vitamin D dan protein berkualitas tinggi." },
                { t:"Daging Merah Tanpa Lemak", d:"Kaya zinc, protein, dan vitamin B12 yang mendukung energi dan produksi hormon." },
                { t:"Ikan Berlemak (Salmon, Sarden)", d:"Omega-3 dan vitamin D yang tinggi terbukti meningkatkan kadar testosteron secara signifikan." },
                { t:"Brokoli dan Sayuran Cruciferous", d:"Mengandung indole-3-carbinol yang membantu mengatur keseimbangan estrogen pada pria." },
                { t:"Kacang-kacangan dan Biji-bijian", d:"Sumber magnesium, zinc, dan lemak sehat yang mendukung produksi hormon." },
              ].map((f,i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">{f.t}:</strong> {f.d}</div>
                </div>
              ))}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mt-6">Makanan yang Harus Dihindari</h3>
            <ul className="space-y-2 list-disc list-inside my-4">
              <li><strong className="text-white">Makanan olahan tinggi gula</strong> — meningkatkan insulin yang menekan testosteron</li>
              <li><strong className="text-white">Minyak nabati olahan</strong> — mengandung lemak trans yang merusak produksi hormon</li>
              <li><strong className="text-white">Alkohol berlebihan</strong> — langsung menurunkan produksi testosteron di testis</li>
              <li><strong className="text-white">Produk kedelai berlebihan</strong> — mengandung fitoestrogen yang bisa mengganggu keseimbangan hormon</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">2. Program Olahraga yang Terbukti Meningkatkan Testosteron</h2>
            <p>Tidak semua olahraga sama efektifnya untuk meningkatkan vitalitas. Berikut panduan berdasarkan penelitian ilmiah:</p>
            <div className="space-y-4 my-6">
              {[
                { n:"A", t:"Latihan Beban Compound (Prioritas Utama)", d:"Squat, deadlift, bench press, dan overhead press adalah latihan terbaik untuk meningkatkan testosteron. Lakukan 3-4 set dengan beban 70-85% dari kemampuan maksimal, 3-4x seminggu.", badge:"Paling Efektif" },
                { n:"B", t:"HIIT (High-Intensity Interval Training)", d:"20-30 menit HIIT 2-3x seminggu meningkatkan testosteron dan hormon pertumbuhan lebih efektif dibanding kardio biasa. Contoh: sprint 30 detik, istirahat 90 detik, ulangi 8-10 kali.", badge:"Sangat Efektif" },
                { n:"C", t:"Kardio Moderat", d:"Jalan cepat atau bersepeda 30-45 menit, 3-5x seminggu untuk kesehatan jantung dan sirkulasi. Hindari kardio berlebihan karena justru bisa menurunkan testosteron.", badge:"Efektif" },
                { n:"D", t:"Yoga dan Stretching", d:"Mengurangi kortisol, meningkatkan fleksibilitas, dan mendukung pemulihan. Lakukan 2-3x seminggu sebagai pelengkap latihan utama.", badge:"Pendukung" },
              ].map((o,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-black text-red-500/50">{o.n}</span>
                    <h3 className="font-bold text-white text-sm md:text-base">{o.t}</h3>
                    <Badge className="bg-green-700 text-white text-xs ml-auto">{o.badge}</Badge>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400">{o.d}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">3. Optimasi Tidur: Investasi Terbaik untuk Vitalitas</h2>
            <p>Tidur bukan sekadar istirahat — ini adalah waktu tubuh memproduksi 70% testosteron harian Anda. Mengabaikan tidur sama dengan membuang investasi kesehatan Anda.</p>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-5 my-6">
              <p className="text-sm font-semibold text-yellow-200">⚠️ Penelitian dari University of Chicago: Pria yang tidur hanya 5 jam per malam selama 1 minggu mengalami penurunan testosteron 10-15% — setara dengan penuaan 10-15 tahun!</p>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mt-6">Protokol Tidur Optimal untuk Pria</h3>
            <ul className="space-y-3 my-4">
              {[
                "Tidur dan bangun di waktu yang sama setiap hari — termasuk akhir pekan",
                "Targetkan 7-9 jam tidur berkualitas, bukan sekadar durasi",
                "Buat kamar tidur gelap total — cahaya mengganggu produksi melatonin",
                "Suhu kamar 18-20°C optimal untuk tidur nyenyak",
                "Hindari layar gadget minimal 1 jam sebelum tidur",
                "Hindari kafein setelah jam 14.00 — efeknya bertahan 6-8 jam",
                "Konsumsi magnesium sebelum tidur membantu relaksasi otot",
              ].map((t,i) => (
                <li key={i} className="flex items-start gap-2 list-none"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">4. Manajemen Stres: Musuh Tersembunyi Vitalitas Pria</h2>
            <p>Kortisol — hormon stres — adalah antagonis langsung testosteron. Ketika kortisol tinggi, testosteron turun. Ini bukan teori, ini biokimia yang sudah terbukti.</p>
            <p className="mt-4">Strategi manajemen stres yang terbukti efektif:</p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { t:"Meditasi Mindfulness", d:"10-20 menit per hari menurunkan kortisol hingga 20%. Gunakan aplikasi seperti Headspace atau Calm untuk pemula." },
                { t:"Pernapasan Dalam", d:"Teknik 4-7-8 (tarik 4 detik, tahan 7 detik, buang 8 detik) mengaktifkan sistem saraf parasimpatik dalam hitungan menit." },
                { t:"Waktu di Alam", d:"30 menit di alam terbuka terbukti menurunkan kortisol dan meningkatkan mood secara signifikan." },
                { t:"Koneksi Sosial", d:"Hubungan sosial yang sehat dan waktu berkualitas dengan orang-orang tersayang adalah buffer stres yang kuat." },
              ].map((s,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4">
                  <h3 className="font-bold text-white text-sm mb-2">{s.t}</h3>
                  <p className="text-xs text-gray-400">{s.d}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">5. Suplemen Alami yang Terbukti Efektif</h2>
            <p>Dengan pola makan dan gaya hidup yang sudah dioptimasi, suplemen alami bisa memberikan dorongan tambahan yang signifikan.</p>
            <div className="space-y-3 my-6">
              {[
                { t:"Zinc", d:"Mineral paling penting untuk produksi testosteron. Dosis: 25-45mg per hari. Defisiensi zinc sangat umum pada pria aktif." },
                { t:"Vitamin D3", d:"Lebih dari hormon daripada vitamin. Pria dengan vitamin D optimal memiliki testosteron 25% lebih tinggi. Dosis: 2000-5000 IU per hari." },
                { t:"Magnesium", d:"Membantu tidur berkualitas dan mendukung produksi testosteron. Dosis: 300-400mg sebelum tidur." },
                { t:"Ashwagandha", d:"Adaptogen yang terbukti menurunkan kortisol 27% dan meningkatkan testosteron 15-17% dalam 8 minggu." },
                { t:"Kopi Stamina Herbal (Coffiy)", d:"Formula khusus pria dewasa yang menggabungkan kafein dengan ekstrak herbal pilihan untuk energi tahan lama dan dukungan vitalitas. Terdaftar BPOM dan Halal MUI." },
              ].map((s,i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">{s.t}:</strong> {s.d}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border border-red-500/40 rounded-xl p-5 text-center my-8">
              <p className="font-semibold mb-3">Ingin rekomendasi suplemen yang tepat untuk kondisi Anda?</p>
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-500/40">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
                <span className="sm:hidden">KONSULTASI GRATIS</span>
              </Button>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">6. Peran Coffiy dalam Program Vitalitas Pria</h2>
            <p><Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> dirancang sebagai solusi praktis untuk pria modern yang ingin meningkatkan vitalitas tanpa harus mengubah seluruh rutinitas sekaligus. Cukup ganti kopi pagi Anda dengan Coffiy, dan dapatkan manfaat tambahan dari formula herbal khusus pria.</p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { t:"Energi Tahan Lama", d:"Tidak seperti kopi biasa yang efeknya cepat habis, formula Coffiy memberikan energi yang lebih stabil sepanjang hari." },
                { t:"Dukungan Vitalitas", d:"Bahan herbal pilihan yang mendukung kesehatan hormonal dan vitalitas pria dewasa secara alami." },
                { t:"Aman Jangka Panjang", d:"Terdaftar BPOM No. MD 867031211059 dan Halal MUI No. 00150099991220. Aman dikonsumsi rutin." },
                { t:"Praktis", d:"Cukup seduh 1 sachet dengan 150ml air panas. Bisa diminum kapan saja sebagai pengganti kopi biasa." },
              ].map((f,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4">
                  <h3 className="font-bold text-white text-sm mb-2">{f.t}</h3>
                  <p className="text-xs text-gray-400">{f.d}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">7. Program 30 Hari Peningkatan Vitalitas</h2>
            <p>Berikut rencana aksi konkret yang bisa langsung Anda terapkan:</p>
            <div className="space-y-4 my-6">
              {[
                { w:"Minggu 1-2", t:"Fondasi", items:["Mulai tidur 7-9 jam per malam","Kurangi gula dan makanan olahan","Mulai latihan beban 3x seminggu","Mulai konsumsi Coffiy setiap pagi"] },
                { w:"Minggu 3-4", t:"Penguatan", items:["Tambahkan HIIT 2x seminggu","Mulai meditasi 10 menit per hari","Tambahkan zinc dan vitamin D","Evaluasi perubahan energi dan mood"] },
              ].map((p,i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 md:p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-red-600 text-white text-xs">{p.w}</Badge>
                    <h3 className="font-bold text-white">{p.t}</h3>
                  </div>
                  <ul className="space-y-1">
                    {p.items.map((item,j) => (
                      <li key={j} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                        <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">Pertanyaan yang Sering Ditanyakan</h2>
            <div className="space-y-3 my-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-4 flex items-start justify-between gap-3">
                    <span className="font-bold text-sm md:text-base">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="h-4 w-4 text-red-500 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && <div className="px-4 pb-4 text-xs md:text-sm text-gray-300">{faq.a}</div>}
                </div>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-10">Kesimpulan</h2>
            <p>Meningkatkan vitalitas pria adalah perjalanan, bukan tujuan instan. Dengan pendekatan holistik yang mencakup nutrisi optimal, olahraga terstruktur, tidur berkualitas, manajemen stres, dan suplemen alami yang tepat, perubahan nyata bisa dirasakan dalam 2-4 minggu pertama.</p>
            <p className="mt-4">Kunci utamanya adalah <strong className="text-white">konsistensi</strong>. Mulai dari satu perubahan kecil hari ini, dan bangun momentum secara bertahap. Tubuh Anda akan merespons dengan cara yang luar biasa.</p>
          </div>

          <div className="mt-10 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Mulai Perjalanan Vitalitas Optimal Anda</h3>
            <p className="text-gray-400 mb-2 text-sm">Konsultasi gratis dengan tim ahli kami</p>
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
              <Link href="/blog/manfaat-kopi-untuk-stamina-pria" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Manfaat Kopi untuk Stamina Pria</h4><p className="text-xs text-gray-400">Temukan bagaimana kopi meningkatkan stamina...</p></Link>
              <Link href="/blog/perbedaan-kopi-biasa-vs-kopi-stamina" className="p-4 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all"><h4 className="font-bold mb-1 text-sm">Kopi Biasa vs Kopi Stamina</h4><p className="text-xs text-gray-400">Apa perbedaan nyatanya?</p></Link>
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
