'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Calendar, Clock, ArrowLeft, MessageCircle, CheckCircle2, X } from "lucide-react";
import Link from 'next/link';

export default function ArticlePage() {
  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      {/* JSON-LD Schema Markup for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Perbedaan Kopi Biasa vs Kopi Stamina: Mana yang Lebih Baik?",
            "description": "Apa yang membedakan kopi stamina dengan kopi biasa? Pelajari komposisi, manfaat, dan keunggulan kopi khusus pria dewasa dibanding kopi reguler.",
            "image": "https://coffiystamina.vercel.app/coffiy-5s.png",
            "author": {
              "@type": "Organization",
              "name": "Coffiy Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Coffiy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://coffiystamina.vercel.app/coffiy-logo-kopi-stamina-pria.png"
              }
            },
            "datePublished": "2024-02-19",
            "dateModified": "2024-02-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://coffiystamina.vercel.app/blog/perbedaan-kopi-biasa-vs-kopi-stamina"
            }
          })
        }}
      />
      
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Perbedaan Kopi Biasa vs Kopi Stamina",
                "item": "https://coffiystamina.vercel.app/blog/perbedaan-kopi-biasa-vs-kopi-stamina"
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
                alt="Coffiy Logo - Kopi Stamina Pria Dewasa" 
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

      {/* Article Content */}
      <article className="py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-6 md:mb-8 text-sm md:text-base">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Blog
          </Link>

          {/* Article Header */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 text-xs md:text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 md:h-4 w-3 md:w-4" />
                <span>19 Februari 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 md:h-4 w-3 md:w-4" />
                <span>4 menit baca</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Perbedaan Kopi Biasa vs Kopi Stamina: Mana yang Lebih Baik?
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Banyak pria bertanya-tanya, apa sebenarnya perbedaan antara kopi biasa dengan kopi stamina? Mari kita bahas secara detail.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-8 md:mb-12 rounded-xl overflow-hidden">
            <img 
              src="/coffiy-5s.png"
              alt="Perbedaan Kopi Biasa vs Kopi Stamina - Coffiy"
              className="w-full h-auto"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Apa Itu Kopi Biasa?</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi biasa adalah minuman yang terbuat dari biji kopi yang disangrai dan diseduh. Manfaat utamanya berasal dari kafein yang memberikan efek:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Meningkatkan kewaspadaan dan fokus</li>
              <li>Mengurangi rasa kantuk</li>
              <li>Meningkatkan metabolisme sementara</li>
              <li>Antioksidan dari biji kopi</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Apa Itu Kopi Stamina?</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi stamina seperti <Link href="/" className="text-red-500 hover:text-red-400 font-semibold">Coffiy</Link> adalah kopi yang diformulasikan khusus dengan tambahan bahan alami untuk meningkatkan stamina dan vitalitas pria dewasa. Selain kafein, kopi stamina mengandung:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Ekstrak herbal untuk vitalitas pria</li>
              <li>Vitamin dan mineral esensial</li>
              <li>Bahan alami untuk meningkatkan energi</li>
              <li>Formula khusus untuk performa optimal</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Perbandingan Detail</h2>
            
            {/* Comparison Table */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Kopi Biasa</h3>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>Hanya mengandung kafein</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>Efek energi sementara</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Tidak ada formula khusus pria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Tidak meningkatkan vitalitas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Efek crash setelah beberapa jam</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Kopi Stamina (Coffiy)</h3>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Kafein + ekstrak herbal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Energi tahan lama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Formula khusus pria dewasa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Meningkatkan vitalitas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Efek stabil tanpa crash</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Keunggulan Kopi Stamina</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi stamina memiliki beberapa keunggulan dibanding kopi biasa:
            </p>

            <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li><strong>Formula Khusus:</strong> Dirancang khusus untuk kebutuhan pria dewasa</li>
              <li><strong>Efek Lebih Lama:</strong> Energi bertahan lebih lama tanpa crash</li>
              <li><strong>Manfaat Tambahan:</strong> Tidak hanya energi, tapi juga vitalitas</li>
              <li><strong>Aman dan Terdaftar:</strong> BPOM dan Halal MUI</li>
              <li><strong>Hasil Konsisten:</strong> Efek yang dapat diandalkan setiap hari</li>
            </ol>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Siapa yang Sebaiknya Memilih Kopi Stamina?</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi stamina cocok untuk:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300 mb-8">
              <li>Pria dewasa usia 18+ yang aktif</li>
              <li>Yang ingin meningkatkan stamina dan vitalitas</li>
              <li>Yang membutuhkan energi konsisten sepanjang hari</li>
              <li>Yang ingin performa optimal dalam aktivitas</li>
              <li>Yang mencari solusi alami dan aman</li>
            </ul>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-8">Kesimpulan</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Kopi biasa bagus untuk energi sementara, tetapi kopi stamina seperti Coffiy menawarkan manfaat lebih lengkap dengan formula khusus untuk pria dewasa. Pilihan tergantung kebutuhan Anda - jika hanya butuh kafein, kopi biasa cukup. Tapi jika ingin meningkatkan stamina dan vitalitas secara menyeluruh, kopi stamina adalah pilihan terbaik.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Siap Upgrade ke Kopi Stamina?
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Rasakan perbedaan Coffiy - Kopi Stamina Pria Premium
            </p>
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-sm md:text-base lg:text-xl rounded-full shadow-2xl shadow-green-500/50"
            >
              <MessageCircle className="mr-2 md:mr-3 h-4 md:h-5 lg:h-6 w-4 md:w-5 lg:w-6" />
              <span className="hidden sm:inline">KONSULTASI GRATIS VIA WHATSAPP</span>
              <span className="sm:hidden">KONSULTASI GRATIS</span>
            </Button>
          </div>

          {/* Related Articles */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Artikel Terkait</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <Link href="/blog/manfaat-kopi-untuk-stamina-pria" className="p-4 md:p-6 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm md:text-base">Manfaat Kopi untuk Stamina Pria</h4>
                <p className="text-xs md:text-sm text-gray-400">Temukan bagaimana kopi dapat meningkatkan stamina pria...</p>
              </Link>
              <Link href="/blog/tips-meningkatkan-vitalitas-pria-secara-alami" className="p-4 md:p-6 bg-zinc-800 border border-zinc-700 hover:border-red-500 rounded-xl transition-all">
                <h4 className="font-bold mb-2 text-sm md:text-base">Tips Meningkatkan Vitalitas Pria</h4>
                <p className="text-xs md:text-sm text-gray-400">Panduan lengkap untuk meningkatkan vitalitas pria dewasa...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8 lg:py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/coffiy-logo-kopi-stamina-pria.png" 
            alt="Coffiy Logo - Kopi Stamina Pria Dewasa Premium" 
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
