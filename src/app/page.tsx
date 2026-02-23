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

// Declare fbq type for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Track button click with Meta Pixel
  const trackButtonClick = (buttonName: string) => {
    // Track with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: buttonName,
        content_category: 'CTA Button'
      });
    }
  };

  // Handle WhatsApp click with tracking
  const handleWhatsAppClick = (buttonLocation: string) => {
    trackButtonClick(`WhatsApp CTA - ${buttonLocation}`);
    window.open(whatsappUrl, '_blank');
  };

  // Calculate time until midnight
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set to next midnight
    
    const difference = midnight.getTime() - now.getTime();
    
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { hours, minutes, seconds };
  };

  // Initialize countdown on mount
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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
                onClick={() => handleWhatsAppClick('Header Desktop')}
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
                onClick={() => handleWhatsAppClick('Header Mobile')}
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
      <section id="beranda" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
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
          <Badge className="mb-4 md:mb-6 bg-red-600 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-lg animate-pulse">
            🔥 PROMO TERBATAS HARI INI!
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              TINGKATKAN STAMINA
            </span>
            <br />
            <span className="text-white">
              & VITALITAS PRIA
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-300 max-w-3xl mx-auto px-4">
            Kopi Premium Khusus Pria Dewasa dengan Formula Alami
            <br />
            <span className="text-red-500 font-bold text-sm md:text-base">✓ BPOM ✓ HALAL MUI ✓ 100% AMAN</span>
          </p>

          {/* Countdown Timer */}
          <div className="mb-6 md:mb-8 inline-block">
            <div className="bg-black/50 backdrop-blur-sm border-2 border-red-500 rounded-xl md:rounded-2xl p-4 md:p-6">
              <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">PROMO BERAKHIR DALAM:</p>
              <div className="flex gap-2 md:gap-4 justify-center">
                <div className="text-center">
                  <div className="bg-red-600 rounded-lg px-2 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[70px]">
                    <div className="text-xl md:text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs mt-1 md:mt-2 text-gray-400">JAM</div>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 rounded-lg px-2 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[70px]">
                    <div className="text-xl md:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs mt-1 md:mt-2 text-gray-400">MENIT</div>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 rounded-lg px-2 md:px-4 py-2 md:py-3 min-w-[50px] md:min-w-[70px]">
                    <div className="text-xl md:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs mt-1 md:mt-2 text-gray-400">DETIK</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <Button 
              onClick={() => handleWhatsAppClick('Hero Section')}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-xl rounded-full shadow-2xl shadow-red-500/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
              CLAIM VOUCHER FREE ONGKIR
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm px-4">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="h-4 md:h-5 w-4 md:w-5 text-green-500" />
              <span>Sertifikat BPOM</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Award className="h-4 md:h-5 w-4 md:w-5 text-green-500" />
              <span>Halal MUI</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <CheckCircle2 className="h-4 md:h-5 w-4 md:w-5 text-green-500" />
              <span>100% Original</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <TrendingUp className="h-4 md:h-5 w-4 md:w-5 text-green-500" />
              <span>10.000+ Pria Puas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section with Pricing */}
      <section id="produk" className="py-12 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-4 py-2 text-sm md:text-base">PAKET HEMAT</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              Pilih Paket <span className="text-red-500">Terbaik</span> Anda
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Semakin banyak, semakin hemat!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Paket 1 Box */}
            <Card className="bg-zinc-800 border-zinc-700 hover:border-red-500 transition-all transform hover:scale-105">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <img 
                    src="/coffiy-box.png" 
                    alt="Coffiy 1 Box" 
                    className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Paket 1 Box</h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">10 Sachet Premium</p>
                  
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg animate-pulse">
                      🎁 CLAIM VOUCHER FREE ONGKIR
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-sm md:text-base">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>10 Sachet @ 20g</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-bold text-green-500">Claim Voucher Free Ongkir Sekarang!</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Garansi 100% Original</span>
                  </li>
                </ul>

                <Button 
                  onClick={() => handleWhatsAppClick('Product - 1 Box')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 md:py-4 rounded-full text-sm md:text-base"
                >
                  <MessageCircle className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  PESAN 1 BOX
                </Button>
              </CardContent>
            </Card>

            {/* Paket 5 Sachet - BEST SELLER */}
            <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-500 text-black font-bold text-xs md:text-sm">⭐ TERLARIS</Badge>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <img 
                    src="/coffiy-5s.png" 
                    alt="Coffiy 5 Sachet" 
                    className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Paket 5 Sachet</h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">Cocok untuk Pemula</p>
                  
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg animate-pulse">
                      🎁 CLAIM VOUCHER FREE ONGKIR
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-sm md:text-base">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>5 Sachet @ 20g</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-bold text-green-500">Claim Voucher Free Ongkir Sekarang!</span>
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
                  onClick={() => handleWhatsAppClick('Product - 5 Sachet')}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 md:py-4 rounded-full shadow-lg shadow-yellow-500/50 text-sm md:text-base"
                >
                  <MessageCircle className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  PESAN 5 SACHET
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Urgency Text */}
          <div className="text-center mt-8 md:mt-12 px-4">
            <p className="text-red-500 font-bold text-sm md:text-lg animate-pulse">
              ⚠️ STOK TERBATAS! Hanya tersisa 47 paket untuk hari ini
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - More Visual */}
      <section id="manfaat" className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              Manfaat <span className="text-red-500">Luar Biasa</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Rasakan perubahan nyata dalam 7 hari!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all text-center p-6 md:p-8">
              <div className="bg-red-600/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Zap className="h-8 w-8 md:h-10 md:w-10 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Energi Maksimal</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Tingkatkan stamina dan energi sepanjang hari tanpa efek samping
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all text-center p-6 md:p-8">
              <div className="bg-red-600/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Heart className="h-8 w-8 md:h-10 md:w-10 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Vitalitas Pria</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Formula khusus untuk meningkatkan vitalitas dan performa pria dewasa
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all text-center p-6 md:p-8">
              <div className="bg-red-600/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Performa Optimal</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Raih performa terbaik dalam aktivitas sehari-hari dan olahraga
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-12 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              Apa Kata <span className="text-red-500">Mereka?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">10.000+ Pria Indonesia Sudah Merasakan Manfaatnya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimoni 1 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/testimoni-coffiy-kopi-stamina-pria-1.jpeg" 
                  alt="Testimoni Coffiy - Kopi Stamina Pria 1" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>

            {/* Testimoni 2 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/testimoni-coffiy-kopi-stamina-pria-2.jpeg" 
                  alt="Testimoni Coffiy - Kopi Stamina Pria 2" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>

            {/* Testimoni 3 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/testimoni-coffiy-kopi-stamina-pria-3.jpeg" 
                  alt="Testimoni Coffiy - Kopi Stamina Pria 3" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* CTA after testimonials */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6 text-base md:text-lg">
              Bergabunglah dengan ribuan pria Indonesia yang sudah merasakan manfaatnya!
            </p>
            <Button 
              onClick={() => handleWhatsAppClick('After Testimonials')}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-xl rounded-full shadow-2xl shadow-red-500/50"
            >
              <MessageCircle className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
              CLAIM VOUCHER FREE ONGKIR
            </Button>
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
            Jangan lewatkan promo spesial hari ini! Claim voucher free ongkir sekarang juga
          </p>
          
          <Button 
            onClick={() => handleWhatsAppClick('Final CTA')}
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
          onClick={() => handleWhatsAppClick('Mobile Floating')}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-full shadow-2xl shadow-red-500/50 animate-pulse"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          CLAIM VOUCHER FREE ONGKIR
        </Button>
      </div>
    </div>
  );
}
