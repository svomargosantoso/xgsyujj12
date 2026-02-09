'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Shield, 
  Zap, 
  Heart, 
  Award,
  CheckCircle2,
  Clock,
  Star,
  TrendingUp,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = "https://plus.adcuan.com/ctawa/704-4";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white pb-24 md:pb-0">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#beranda" className="flex items-center space-x-3">
              <img 
                src="/coffiy-logo-kopi-stamina-pria.png" 
                alt="Coffiy Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                COFFIY
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="hover:text-red-500 transition-colors">Beranda</a>
              <a href="#produk" className="hover:text-red-500 transition-colors">Produk</a>
              <a href="#manfaat" className="hover:text-red-500 transition-colors">Manfaat</a>
              <a href="#testimoni" className="hover:text-red-500 transition-colors">Testimoni</a>
              <Button 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-2 rounded-full shadow-lg shadow-red-500/50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                PESAN SEKARANG
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#beranda" 
                onClick={() => scrollToSection('beranda')}
                className="block py-2 hover:text-red-500 transition-colors"
              >
                Beranda
              </a>
              <a 
                href="#produk" 
                onClick={() => scrollToSection('produk')}
                className="block py-2 hover:text-red-500 transition-colors"
              >
                Produk
              </a>
              <a 
                href="#manfaat" 
                onClick={() => scrollToSection('manfaat')}
                className="block py-2 hover:text-red-500 transition-colors"
              >
                Manfaat
              </a>
              <a 
                href="#testimoni" 
                onClick={() => scrollToSection('testimoni')}
                className="block py-2 hover:text-red-500 transition-colors"
              >
                Testimoni
              </a>
              <Button 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                PESAN SEKARANG
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Eye Catching */}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png)',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Promo Badge */}
          <Badge className="mb-6 bg-red-600 text-white px-6 py-2 text-lg animate-pulse">
            🔥 PROMO TERBATAS HARI INI!
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              TINGKATKAN STAMINA
            </span>
            <br />
            <span className="text-white">
              & VITALITAS PRIA
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Kopi Premium Khusus Pria Dewasa dengan Formula Alami
            <br />
            <span className="text-red-500 font-bold">✓ BPOM ✓ HALAL MUI ✓ 100% AMAN</span>
          </p>

          {/* Countdown Timer */}
          <div className="mb-8 inline-block">
            <div className="bg-black/50 backdrop-blur-sm border-2 border-red-500 rounded-2xl p-6">
              <p className="text-sm text-gray-300 mb-3">PROMO BERAKHIR DALAM:</p>
              <div className="flex gap-4 justify-center">
                <div className="text-center">
                  <div className="bg-red-600 rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs mt-2 text-gray-400">JAM</div>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs mt-2 text-gray-400">MENIT</div>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs mt-2 text-gray-400">DETIK</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl shadow-red-500/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              PESAN SEKARANG - DISKON 30%
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Sertifikat BPOM</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-500" />
              <span>Halal MUI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>100% Original</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>10.000+ Pria Puas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section with Pricing */}
      <section id="produk" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-4 py-2">PAKET HEMAT</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pilih Paket <span className="text-red-500">Terbaik</span> Anda
            </h2>
            <p className="text-gray-400 text-lg">Semakin banyak, semakin hemat!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Paket 1 Box */}
            <Card className="bg-zinc-800 border-zinc-700 hover:border-red-500 transition-all transform hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img 
                    src="/coffiy-box.png" 
                    alt="Coffiy 1 Box" 
                    className="w-48 h-48 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">Paket 1 Box</h3>
                  <p className="text-gray-400 mb-4">10 Sachet Premium</p>
                  
                  <div className="mb-4">
                    <span className="text-gray-400 line-through text-xl">Rp 250.000</span>
                    <div className="text-4xl font-bold text-red-500 mt-2">Rp 175.000</div>
                    <Badge className="mt-2 bg-green-600">HEMAT 30%</Badge>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>10 Sachet @ 20g</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Gratis Ongkir Seluruh Indonesia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Garansi 100% Original</span>
                  </li>
                </ul>

                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  PESAN 1 BOX
                </Button>
              </CardContent>
            </Card>

            {/* Paket 5 Sachet - BEST SELLER */}
            <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-500 text-black font-bold">⭐ TERLARIS</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img 
                    src="/coffiy-5s.png" 
                    alt="Coffiy 5 Sachet" 
                    className="w-48 h-48 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">Paket 5 Sachet</h3>
                  <p className="text-gray-400 mb-4">Cocok untuk Pemula</p>
                  
                  <div className="mb-4">
                    <span className="text-gray-400 line-through text-xl">Rp 150.000</span>
                    <div className="text-4xl font-bold text-red-500 mt-2">Rp 99.000</div>
                    <Badge className="mt-2 bg-green-600">HEMAT 34%</Badge>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>5 Sachet @ 20g</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Gratis Ongkir Seluruh Indonesia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Garansi 100% Original</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="font-bold text-yellow-500">Paling Banyak Dipilih!</span>
                  </li>
                </ul>

                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 rounded-full shadow-lg shadow-yellow-500/50"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  PESAN 5 SACHET
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Urgency Text */}
          <div className="text-center mt-12">
            <p className="text-red-500 font-bold text-lg animate-pulse">
              ⚠️ STOK TERBATAS! Hanya tersisa 47 paket untuk hari ini
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - More Visual */}
      <section id="manfaat" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Manfaat <span className="text-red-500">Luar Biasa</span>
            </h2>
            <p className="text-gray-400 text-lg">Rasakan perubahan nyata dalam 7 hari!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all text-center p-8">
              <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Energi Maksimal</h3>
              <p className="text-gray-400">
                Tingkatkan stamina dan energi sepanjang hari tanpa efek samping
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all text-center p-8">
              <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vitalitas Pria</h3>
              <p className="text-gray-400">
                Formula khusus untuk meningkatkan vitalitas dan performa pria dewasa
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all text-center p-8">
              <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performa Optimal</h3>
              <p className="text-gray-400">
                Raih performa terbaik dalam aktivitas sehari-hari dan olahraga
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Apa Kata <span className="text-red-500">Mereka?</span>
            </h2>
            <p className="text-gray-400 text-lg">10.000+ Pria Indonesia Sudah Merasakan Manfaatnya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Coffiy benar-benar mengubah hidup saya! Stamina meningkat drastis dan saya merasa lebih percaya diri. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">
                      A{i}
                    </div>
                    <div>
                      <div className="font-bold">Ahmad S.</div>
                      <div className="text-sm text-gray-400">Jakarta</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="sertifikat" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-500">100% Legal</span> & Aman
            </h2>
            <p className="text-gray-400 text-lg">Terdaftar resmi BPOM dan bersertifikat Halal MUI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/izin-edar-bpom-coffiy-kopi-pria-dewasa.png" 
                  alt="Sertifikat BPOM Coffiy" 
                  className="w-full h-auto"
                />
                <div className="p-6 text-center">
                  <Badge className="bg-green-600 mb-2">✓ BPOM VERIFIED</Badge>
                  <p className="text-sm text-gray-400">No. BPOM: MD 867031211059</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/sertifikat-halal-mui-coffiy-kopi-stamina-pria.png" 
                  alt="Sertifikat Halal MUI Coffiy" 
                  className="w-full h-auto"
                />
                <div className="p-6 text-center">
                  <Badge className="bg-green-600 mb-2">✓ HALAL MUI</Badge>
                  <p className="text-sm text-gray-400">No. Sertifikat: 00150099991220</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Tingkatkan Stamina Anda?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jangan lewatkan promo spesial hari ini! Dapatkan diskon hingga 30% + Gratis Ongkir
          </p>
          
          <Button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            PESAN SEKARANG JUGA!
          </Button>

          <p className="mt-6 text-sm">
            <Clock className="inline h-4 w-4 mr-1" />
            Promo berakhir dalam {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/coffiy-logo-kopi-stamina-pria.png" 
            alt="Coffiy Logo" 
            className="h-12 mx-auto mb-4"
          />
          <p className="text-gray-400 mb-4">
            Coffiy - Kopi Stamina Pria Dewasa Premium
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Coffiy. All rights reserved. | BPOM & Halal MUI Certified
          </p>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black to-transparent">
        <Button 
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-full shadow-2xl shadow-red-500/50 animate-pulse"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          PESAN SEKARANG - DISKON 30%
        </Button>
      </div>
    </div>
  );
}
