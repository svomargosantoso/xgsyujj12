'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const articles = [
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
