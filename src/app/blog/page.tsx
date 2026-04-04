'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const articles = [
    { slug: 'cara-mengatasi-ejakulasi-dini-secara-alami', title: 'Cara Mengatasi Ejakulasi Dini Secara Alami Tanpa Obat Kimia', excerpt: 'Panduan lengkap cara mengatasi ejakulasi dini secara alami. Pelajari penyebab, teknik, dan solusi herbal yang aman dan terbukti efektif.', image: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png', date: '26 Februari 2024', readTime: '8 menit', category: 'High Intent' },
    { slug: 'cara-tahan-lama-saat-berhubungan', title: 'Cara Tahan Lama Saat Berhubungan (Terbukti Efektif)', excerpt: 'Teknik dan cara tahan lama yang terbukti efektif secara alami. Panduan praktis untuk pria dewasa meningkatkan performa dan kepercayaan diri.', image: '/coffiy-5s.png', date: '27 Februari 2024', readTime: '7 menit', category: 'High Intent' },
    { slug: 'penyebab-pria-cepat-keluar-dan-cara-mengatasinya', title: 'Penyebab Pria Cepat Keluar dan Cara Mengatasinya', excerpt: 'Kenali 7 penyebab utama pria cepat keluar dan cara mengatasinya secara alami. Solusi praktis dan aman untuk pria dewasa.', image: '/coffiy-box.png', date: '28 Februari 2024', readTime: '6 menit', category: 'High Intent' },
    { slug: 'cara-meningkatkan-stamina-pria-usia-30', title: 'Cara Meningkatkan Stamina Pria Usia 30+: Panduan Khusus', excerpt: 'Panduan lengkap cara meningkatkan stamina pria usia 30 tahun ke atas. Strategi nutrisi, olahraga, dan suplemen alami yang terbukti efektif.', image: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png', date: '29 Februari 2024', readTime: '8 menit', category: 'High Intent' },
    { slug: 'solusi-alami-vitalitas-pria-menurun', title: 'Solusi Alami untuk Vitalitas Pria yang Menurun', excerpt: 'Temukan solusi alami terbaik untuk mengatasi vitalitas pria yang menurun. Panduan lengkap dari herbal, nutrisi, olahraga, hingga suplemen aman.', image: '/coffiy-1s.png', date: '1 Maret 2024', readTime: '7 menit', category: 'Solusi' },
    { slug: 'kenapa-pria-dulu-kuat-sekarang-cepat-selesai', title: 'Kenapa Pria yang Dulu Kuat Sekarang Cepat Selesai?', excerpt: 'Penjelasan ilmiah mengapa pria yang dulu kuat kini cepat selesai. Penyebab tersembunyi dan solusi nyata yang bisa mulai diterapkan hari ini.', image: '/coffiy-background-grafik-stamina-pria-merah.png', date: '2 Maret 2024', readTime: '6 menit', category: 'Emotional' },
    { slug: 'tanda-stamina-pria-mulai-menurun', title: '7 Tanda-Tanda Stamina Pria Mulai Menurun yang Sering Diabaikan', excerpt: 'Kenali 7 tanda stamina pria mulai menurun yang sering diabaikan. Deteksi dini dan ambil tindakan sebelum kondisi semakin memburuk.', image: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png', date: '3 Maret 2024', readTime: '5 menit', category: 'Emotional' },
    { slug: 'masalah-pria-yang-jarang-dibahas', title: 'Masalah yang Jarang Dibahas Pria… Tapi Sering Terjadi', excerpt: 'Ada masalah yang dialami jutaan pria tapi jarang dibicarakan. Saatnya kita bahas secara terbuka — karena diam bukan solusi.', image: '/coffiy-5s-alt.png', date: '6 Maret 2024', readTime: '6 menit', category: 'Emotional' },
    { slug: 'review-coffiy-kopi-stamina-pria', title: 'Review Coffiy: Benarkah Bisa Meningkatkan Stamina Pria?', excerpt: 'Review jujur dan lengkap tentang Coffiy — kopi stamina pria yang diklaim bisa meningkatkan energi dan vitalitas pria dewasa.', image: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png', date: '4 Maret 2024', readTime: '8 menit', category: 'Review' },
    { slug: 'pengalaman-pria-40-tahun-mengatasi-vitalitas', title: 'Pengalaman Pria 40 Tahun Mengatasi Masalah Vitalitas dengan Coffiy', excerpt: 'Kisah nyata perjalanan 30 hari yang mengubah segalanya — dari ragu-ragu hingga merasakan perbedaan nyata.', image: '/coffiy-box.png', date: '5 Maret 2024', readTime: '7 menit', category: 'Review' },
    {
      slug: 'cara-mengatasi-stamina-pria-menurun',
      title: 'Cara Mengatasi Stamina Pria yang Menurun: Panduan Lengkap 2024',
      excerpt: 'Penyebab dan cara mengatasi stamina pria yang menurun secara alami. Panduan lengkap dari pola makan, olahraga, hingga suplemen herbal yang aman dan terbukti efektif.',
      image: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png',
      date: '25 Februari 2024',
      readTime: '7 menit',
      category: 'Kesehatan'
    },
    {
      slug: 'manfaat-kopi-untuk-stamina-pria',
      title: 'Manfaat Kopi untuk Stamina Pria: Rahasia Energi Maksimal',
      excerpt: 'Temukan bagaimana kopi dapat meningkatkan stamina dan vitalitas pria dewasa secara alami. Pelajari manfaat, cara konsumsi yang tepat, dan tips memaksimalkan efeknya.',
      image: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png',
      date: '21 Februari 2024',
      readTime: '5 menit',
      category: 'Kesehatan'
    },
    {
      slug: 'tips-meningkatkan-vitalitas-pria-secara-alami',
      title: 'Tips Meningkatkan Vitalitas Pria Secara Alami',
      excerpt: 'Panduan lengkap untuk meningkatkan vitalitas dan performa pria dewasa dengan cara alami. Dari pola makan, olahraga, hingga suplemen herbal yang aman.',
      image: '/coffiy-box.png',
      date: '20 Februari 2024',
      readTime: '6 menit',
      category: 'Lifestyle'
    },
    {
      slug: 'perbedaan-kopi-biasa-vs-kopi-stamina',
      title: 'Perbedaan Kopi Biasa vs Kopi Stamina: Mana yang Lebih Baik?',
      excerpt: 'Apa yang membedakan kopi stamina dengan kopi biasa? Pelajari komposisi, manfaat, dan keunggulan kopi khusus pria dewasa dibanding kopi reguler.',
      image: '/coffiy-5s.png',
      date: '19 Februari 2024',
      readTime: '4 menit',
      category: 'Edukasi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://coffiystamina.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://coffiystamina.vercel.app/blog"
              }
            ]
          })
        }}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <img 
                src="/coffiy-logo-kopi-stamina-pria.png" 
                alt="Coffiy Logo" 
                className="h-10 md:h-12 w-auto"
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                COFFIY
              </span>
            </Link>

            <Link href="/">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-xs md:text-sm px-3 md:px-4 py-2">
                <Home className="mr-1 md:mr-2 h-3 md:h-4 w-3 md:w-4" />
                Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-4 py-2 text-xs md:text-sm">ARTIKEL & TIPS</Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">
              Blog Coffiy
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Artikel, tips, dan informasi seputar kesehatan, stamina, dan vitalitas pria dewasa
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Link key={index} href={`/blog/${article.slug}`}>
                <Card className="bg-zinc-800 border-zinc-700 hover:border-red-500 transition-all transform hover:scale-105 h-full overflow-hidden">
                  <CardContent className="p-0">
                    {/* Article Image */}
                    <div className="relative h-48 md:h-56 w-full bg-zinc-900">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white text-xs">
                          {article.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-4 md:p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-lg md:text-xl font-bold mb-3 line-clamp-2 leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center text-red-500 font-semibold text-sm">
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Siap Tingkatkan Stamina Anda?
              </h2>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base px-4">
                Dapatkan Coffiy sekarang dan rasakan perbedaannya!
              </p>
              <Link href="/">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-xl rounded-full shadow-2xl shadow-green-500/50"
                >
                  Lihat Produk Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8 lg:py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/coffiy-logo-kopi-stamina-pria.png" 
            alt="Coffiy Logo" 
            className="h-8 md:h-10 lg:h-12 mx-auto mb-2 md:mb-3 lg:mb-4"
          />
          <p className="text-gray-400 mb-2 md:mb-3 lg:mb-4 text-xs md:text-sm lg:text-base">
            Coffiy - Kopi Stamina Pria Dewasa Premium
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            © 2024 Coffiy. All rights reserved. | BPOM & Halal MUI Certified
          </p>
        </div>
      </footer>
    </div>
  );
}
