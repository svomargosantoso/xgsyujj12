'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ChevronDown, ChevronUp, Home } from "lucide-react";
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";

  const faqs = [
    {
      question: "Apa itu Coffiy?",
      answer: "Coffiy adalah kopi premium khusus pria dewasa dengan formula alami yang dirancang untuk meningkatkan stamina, energi, dan vitalitas. Produk ini sudah terdaftar BPOM dan bersertifikat Halal MUI."
    },
    {
      question: "Apa manfaat utama Coffiy?",
      answer: "Coffiy membantu meningkatkan stamina dan energi sepanjang hari, meningkatkan vitalitas pria dewasa, dan mendukung performa optimal dalam aktivitas sehari-hari dan olahraga. Semua dengan bahan alami tanpa efek samping."
    },
    {
      question: "Bagaimana cara konsumsi Coffiy?",
      answer: "Seduh 1 sachet Coffiy dengan 150ml air panas. Aduk hingga larut sempurna. Konsumsi 1-2 kali sehari, pagi dan/atau sore hari untuk hasil optimal."
    },
    {
      question: "Apakah Coffiy aman dikonsumsi?",
      answer: "Ya, sangat aman. Coffiy sudah terdaftar resmi di BPOM dengan nomor MD 867031211059 dan bersertifikat Halal MUI nomor 00150099991220. Terbuat dari bahan alami berkualitas tinggi."
    },
    {
      question: "Apakah ada efek samping?",
      answer: "Coffiy terbuat dari bahan alami dan aman dikonsumsi. Tidak ada efek samping yang berbahaya. Namun, jika Anda memiliki kondisi kesehatan khusus atau sedang mengonsumsi obat tertentu, konsultasikan dengan dokter terlebih dahulu."
    },
    {
      question: "Berapa lama efek Coffiy terasa?",
      answer: "Efek energi dan stamina dapat dirasakan dalam 60-120 menit setelah konsumsi. Untuk hasil optimal dan jangka panjang, konsumsi rutin selama 7-14 hari."
    },
    {
      question: "Siapa yang boleh mengonsumsi Coffiy?",
      answer: "Coffiy diperuntukkan untuk pria dewasa usia 18 tahun ke atas yang ingin meningkatkan stamina, energi, dan vitalitas. Tidak direkomendasikan untuk wanita hamil, menyusui, atau anak-anak."
    },
    {
      question: "Berapa harga Coffiy?",
      answer: "Coffiy tersedia dalam 2 paket: Paket 5 Sachet (cocok untuk pemula) dan Paket 1 Box (10 Sachet). Hubungi kami via WhatsApp untuk info harga terbaru dan promo spesial."
    },
    {
      question: "Apakah ada promo atau diskon?",
      answer: "Ya! Kami sering memberikan promo spesial seperti gratis ongkir dan bonus konsultasi. Klik tombol WhatsApp untuk info promo terbaru hari ini."
    },
    {
      question: "Bagaimana cara pemesanan?",
      answer: "Pemesanan sangat mudah! Klik tombol 'Konsultasi Gratis Via WhatsApp' di website kami, tim kami akan membantu proses pemesanan dan menjawab pertanyaan Anda."
    },
    {
      question: "Berapa lama pengiriman?",
      answer: "Pengiriman ke seluruh Indonesia memakan waktu 2-5 hari kerja tergantung lokasi. Kami menggunakan jasa ekspedisi terpercaya untuk memastikan produk sampai dengan aman."
    },
    {
      question: "Apakah Coffiy mengandung bahan kimia berbahaya?",
      answer: "Tidak sama sekali. Coffiy terbuat dari 100% bahan alami pilihan tanpa bahan kimia berbahaya. Semua bahan sudah melalui uji lab dan terdaftar resmi di BPOM."
    },
    {
      question: "Bisakah dikonsumsi bersamaan dengan obat lain?",
      answer: "Untuk keamanan, sebaiknya beri jeda 2-3 jam antara konsumsi Coffiy dengan obat lain. Jika Anda sedang dalam pengobatan rutin, konsultasikan dengan dokter terlebih dahulu."
    },
    {
      question: "Apakah Coffiy menyebabkan ketergantungan?",
      answer: "Tidak. Coffiy terbuat dari bahan alami dan tidak menyebabkan ketergantungan. Anda dapat mengonsumsinya sesuai kebutuhan tanpa khawatir efek ketergantungan."
    },
    {
      question: "Bagaimana cara penyimpanan Coffiy?",
      answer: "Simpan Coffiy di tempat kering, sejuk, dan terhindar dari sinar matahari langsung. Pastikan kemasan tertutup rapat setelah dibuka untuk menjaga kualitas produk."
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
                "name": "FAQ",
                "item": "https://coffiystamina.vercel.app/faq"
              }
            ]
          })
        }}
      />
      
      {/* JSON-LD Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">
              Pertanyaan yang Sering Ditanyakan
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Temukan jawaban untuk pertanyaan umum tentang Coffiy - Kopi Stamina Pria Dewasa Premium
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-zinc-800 border-zinc-700 hover:border-red-500 transition-all"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-3 md:p-4 lg:p-6 flex items-start justify-between gap-3"
                  >
                    <h3 className="text-sm md:text-base lg:text-lg font-bold pr-2 leading-snug">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-4 md:h-5 w-4 md:w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <ChevronDown className="h-4 md:h-5 w-4 md:w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-3 md:px-4 lg:px-6 pb-3 md:pb-4 lg:pb-6">
                      <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-gray-400 mb-4 md:mb-6 lg:mb-8 text-xs md:text-sm lg:text-base px-4">
              Tim kami siap membantu Anda! Konsultasi gratis via WhatsApp
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
