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
      answer: "Efek energi dan stamina dapat dirasakan dalam 30-60 menit setelah konsumsi. Untuk hasil optimal dan jangka panjang, konsumsi rutin selama 7-14 hari."
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/coffiy-logo-kopi-stamina-pria.png" 
                alt="Coffiy Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                COFFIY
              </span>
            </Link>

            <Link href="/">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                <Home className="mr-2 h-4 w-4" />
                Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Pertanyaan yang Sering Ditanyakan
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang Coffiy - Kopi Stamina Pria Dewasa Premium
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-zinc-800 border-zinc-700 hover:border-red-500 transition-all"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 md:p-6 flex items-center justify-between"
                  >
                    <h3 className="text-base md:text-lg font-bold pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
              Tim kami siap membantu Anda! Konsultasi gratis via WhatsApp
            </p>
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-xl rounded-full shadow-2xl shadow-green-500/50"
            >
              <MessageCircle className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
              KONSULTASI GRATIS VIA WHATSAPP
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 md:py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/coffiy-logo-kopi-stamina-pria.png" 
            alt="Coffiy Logo" 
            className="h-10 md:h-12 mx-auto mb-3 md:mb-4"
          />
          <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
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
