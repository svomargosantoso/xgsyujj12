'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Shield, 
  Zap, 
  Heart, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function CoffiyLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroSlide, setHeroSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productImages = [
    {
      src: '/coffiy-box.png',
      title: 'Kopi Stamina Pria Premium',
      description: 'Kemasan eksklusif kopi pria dewasa dengan formula premium untuk stamina maksimal'
    },
    {
      src: '/coffiy-1s.png',
      title: 'Display Kopi Pria Modern',
      description: 'Lihat isi lengkap kopi penambah energi pria yang ada dalam kemasan premium'
    },
    {
      src: '/coffiy-5s.png',
      title: 'Coffee for Men Indonesia',
      description: 'Display kopi stamina pria setelah box dibuka, menunjukkan kualitas premium'
    },
    {
      src: '/coffiy-5s-alt.png',
      title: 'Kopi Penambah Energi Pria',
      description: 'Tampilan lengkap kemasan kopi pria modern dengan desain eksklusif dan mewah'
    }
  ]

  const heroImages = [
    {
      src: '/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png',
      alt: 'Coffiy Stamina - Minuman Serbuk Kopi Penambah Stamina Pria Dewasa Halal BPOM'
    },
    {
      src: '/coffiy-box.png',
      alt: 'Coffiy Premium Box'
    },
    {
      src: '/coffiy-1s.png',
      alt: 'Coffiy Display Isi'
    },
    {
      src: '/coffiy-5s.png',
      alt: 'Coffiy Isi Lengkap'
    }
  ]

  // Auto-slide for gallery
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  // Auto-slide for hero section
  const nextHeroSlide = () => {
    setHeroSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevHeroSlide = () => {
    setHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // Auto-slide effect for gallery (every 5 seconds)
  React.useEffect(() => {
    const galleryInterval = setInterval(() => {
      nextSlide()
    }, 5000) // 5 seconds for gallery

    return () => clearInterval(galleryInterval)
  }, [])

  // Auto-slide effect for hero (every 7 seconds)
  React.useEffect(() => {
    const heroInterval = setInterval(() => {
      nextHeroSlide()
    }, 7000) // 7 seconds for hero

    return () => clearInterval(heroInterval)
  }, [])

  const handleWhatsAppOrder = () => {
    // Menggunakan URL tracking Adcuan untuk merekam klik button
    window.open('https://plus.adcuan.com/ctawa/704-4', '_blank')
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0">
      {/* SEO Meta Tags - akan ditambahkan di layout */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Coffiy - Kopi Stamina Pria Dewasa",
          "description": "Kopi pria modern untuk penambah energi dan vitalitas pria dewasa. Coffee for men dengan formula premium.",
          "brand": "Coffiy",
          "category": "Kopi Stamina Pria",
          "keywords": ["kopi stamina pria", "kopi pria dewasa", "coffee for men", "kopi pria modern", "kopi penambah energi pria"],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "IDR",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
      
      {/* Mobile Floating CTA Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <Button 
          onClick={handleWhatsAppOrder}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 text-base font-bold rounded-lg transition-all duration-200 shadow-2xl transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Pesan Sekarang via WhatsApp
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
           
            <div className="flex items-center">
              <a href="#beranda" className="flex items-center space-x-3">
                <img 
                  src="/coffiy-logo-kopi-stamina-pria.png" 
                  alt="Coffiy Logo - Kopi Stamina Pria" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold text-foreground">Coffiy Stamina</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Beranda
              </a>
              <a href="#produk" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Produk
              </a>
              <a href="#manfaat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Manfaat
              </a>
              <a href="#sertifikat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Sertifikat
              </a>
              <a href="#cara-pakai" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Cara Pakai
              </a>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                onClick={handleWhatsAppOrder}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Pesan Sekarang
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#beranda" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Beranda
              </a>
              <a 
                href="#produk" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Produk
              </a>
              <a 
                href="#manfaat" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Manfaat
              </a>
              <a 
                href="#sertifikat" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Sertifikat
              </a>
              <a 
                href="#cara-pakai" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Cara Pakai
              </a>
              <Button 
                onClick={() => {
                  handleWhatsAppOrder()
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Pesan Sekarang
              </Button>
            </nav>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" id="beranda">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-accent/20" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                <Star className="w-4 h-4 mr-2" />
                Premium Stamina Solution
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Coffiy - 
                <span className="text-primary block">Kopi Stamina Pria</span>
                <span className="text-secondary">Coffee for Men Modern</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Kopi stamina pria dewasa premium untuk penambah energi dan vitalitas pria modern. 
                Coffiy adalah kopi pria modern dengan formula khusus untuk performa optimal sebagai coffee for men terbaik di Indonesia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppOrder}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Sekarang via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% Original</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Terpercaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Gratis Ongkir</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${heroSlide * 100}%)` }}
                >
                  {heroImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hero Slide Navigation */}
              <button
                onClick={prevHeroSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Previous hero slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextHeroSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Next hero slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Hero Slide Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setHeroSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      heroSlide === index 
                        ? 'bg-primary w-6' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to hero slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card" id="manfaat">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih Coffiy Kopi Stamina Pria?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kopi penambah energi pria dewasa dengan manfaat terbukti untuk meningkatkan stamina dan performa pria modern
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-muted border-border text-center p-6 rounded-xl hover:bg-border transition-colors duration-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Extra Stamina</h3>
                <p className="text-muted-foreground">
                  Tingkatkan daya tahan dan energi untuk performa maksimal
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted border-border text-center p-6 rounded-xl hover:bg-border transition-colors duration-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Tahan Lama</h3>
                <p className="text-muted-foreground">
                  Efek jangka panjang untuk performa konsisten
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted border-border text-center p-6 rounded-xl hover:bg-border transition-colors duration-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Aman</h3>
                <p className="text-muted-foreground">
                  100% herbal tanpa efek samping berbahaya
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted border-border text-center p-6 rounded-xl hover:bg-border transition-colors duration-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Terpercaya</h3>
                <p className="text-muted-foreground">
                  Telah digunakan ribuan pria dengan hasil memuaskan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Banner Section - Full Width */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-muted to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src="/coffiy-stamina-kopi-penambah-stamina-pria-dewasa-halal-bpom.png"
              alt="Coffiy Stamina - Minuman Serbuk Kopi Penambah Stamina Pria Dewasa Terdaftar BPOM dan Bersertifikat Halal MUI"
              title="Coffiy Stamina Kopi Pria - Minuman Penambah Stamina dengan Sertifikat Halal, HACCP, dan ISO"
              className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
          
          <div className="text-center mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Coffiy Stamina - Kopi Penambah Stamina Pria Terpercaya
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Minuman serbuk kopi premium untuk pria dewasa dengan sertifikasi lengkap: Halal MUI, BPOM, HACCP, dan ISO. 
              Formulasi khusus untuk meningkatkan stamina dan vitalitas pria modern.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Sertifikat Halal MUI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Terdaftar BPOM RI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>HACCP Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Galeri Kopi Stamina Pria Coffiy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lihat berbagai varian kopi pria dewasa dengan kualitas terbaik untuk performa optimal Anda
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {productImages.map((product, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="bg-muted border-border">
                        <CardContent className="p-8">
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                              <Badge className="bg-accent text-accent-foreground mb-4">
                                {product.title}
                              </Badge>
                              <h3 className="text-2xl font-bold text-foreground mb-4">
                                {product.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {product.description}
                              </p>
                              
                              <div className="space-y-3 mb-6">
                                <div className="flex items-center text-muted-foreground">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                  <span>Formula herbal alami</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                  <span>Telah terdaftar BPOM</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                  <span>Hasil terbukti efektif</span>
                                </div>
                              </div>
                              
                              <Button 
                                onClick={handleWhatsAppOrder}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold rounded-lg transition-all duration-200"
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Pesan Sekarang
                              </Button>
                            </div>
                            
                            <div className="order-1 md:order-2">
                              <img 
                                src={product.src}
                                alt={product.title}
                                className="w-full max-w-sm mx-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 md:py-24" id="produk">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kemasan Premium Kopi Stamina Pria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lihat isi lengkap kopi pria dewasa dalam kemasan eksklusif kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-muted border-border p-8 rounded-xl">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <Badge className="bg-accent text-accent-foreground mb-4">PREMIUM BOX</Badge>
                  <img 
                    src="/coffiy-box.png"
                    alt="Coffiy Premium Box - 1 Box Isi 10 Sachet"
                    className="w-32 h-32 mx-auto mb-4 rounded-lg"
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Coffiy Premium Box</h3>
                  <p className="text-muted-foreground mb-4">1 Box Isi 10 Sachet</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>1 Box berisi 10 sachet</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Formula premium original</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Free konsultasi</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Claim Voucher Potongan Ongkir Di Seluruh Wilayah Indonesia</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold"
                  onClick={handleWhatsAppOrder}
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-muted border-border p-8 rounded-xl">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <Badge className="bg-secondary text-secondary-foreground mb-4">BEST SELLER</Badge>
                  <img 
                    src="/coffiy-5s.png"
                    alt="Coffiy 5 Sachet - Varian Hemat"
                    className="w-32 h-32 mx-auto mb-4 rounded-lg"
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Coffiy 5 Sachet</h3>
                  <p className="text-muted-foreground mb-4">Varian hemat untuk mencoba</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Paket berisi 5 sachet</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Formula premium original</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Free konsultasi</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Claim Voucher Potongan Ongkir Di Seluruh Wilayah Indonesia</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold"
                  onClick={handleWhatsAppOrder}
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24" id="sertifikat">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sertifikat & Legalitas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coffiy telah memiliki berbagai sertifikat resmi dan legalitas lengkap untuk menjamin kualitas dan keamanan produk
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Sertifikat BPOM - Real Certificate */}
              <Card className="bg-muted border-border p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-white rounded-lg mb-4 overflow-hidden border-2 border-border">
                    <img 
                      src="/izin-edar-bpom-coffiy-kopi-pria-dewasa.png"
                      alt="Izin Edar BPOM Coffiy - Kopi Stamina Pria Dewasa Terdaftar Resmi"
                      title="Sertifikat BPOM Coffiy Kopi Pria - Nomor Izin Edar BPOM RI MD 867031569523"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    Izin Edar BPOM RI
                  </h3>
                  <p className="text-muted-foreground text-center text-sm mb-2">
                    <strong>No. BPOM RI MD 867031569523</strong>
                  </p>
                  <p className="text-muted-foreground text-center text-sm">
                    Terdaftar resmi di Badan Pengawas Obat dan Makanan Republik Indonesia
                  </p>
                </CardContent>
              </Card>
              
              {/* Sertifikat Halal MUI - Real Certificate */}
              <Card className="bg-muted border-border p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-white rounded-lg mb-4 overflow-hidden border-2 border-border">
                    <img 
                      src="/sertifikat-halal-mui-coffiy-kopi-stamina-pria.png"
                      alt="Sertifikat Halal MUI Coffiy - Kopi Pria Dewasa Bersertifikat Halal Indonesia"
                      title="Sertifikat Halal MUI Coffiy - Nomor ID00310000359110522"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    Sertifikat Halal MUI
                  </h3>
                  <p className="text-muted-foreground text-center text-sm mb-2">
                    <strong>No. ID00310000359110522</strong>
                  </p>
                  <p className="text-muted-foreground text-center text-sm">
                    Bersertifikat halal dari Majelis Ulama Indonesia (MUI)
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Trust Badges */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-muted border-border p-6 rounded-xl hover:bg-border transition-colors duration-200">
                <CardContent className="p-0">
                  <div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Sertifikat GMP</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    Sertifikat GMP
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    Good Manufacturing Practice - Standar produksi berkualitas
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted border-border p-6 rounded-xl hover:bg-border transition-colors duration-200">
                <CardContent className="p-0">
                  <div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Sertifikat ISO</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    Sertifikat ISO
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    Standar manajemen mutu internasional
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted border-border p-6 rounded-xl hover:bg-border transition-colors duration-200">
                <CardContent className="p-0">
                  <div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Sertifikat CPOTB</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    Sertifikat CPOTB
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    Cara Pembuatan Obat Tradisional yang Baik
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted border-border p-6 rounded-xl hover:bg-border transition-colors duration-200">
                <CardContent className="p-0">
                  <div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Produk Indonesia</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    100% Indonesia
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    Produk asli Indonesia dengan bahan berkualitas
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Trust Badges */}
            <Card className="bg-muted border-border p-8 rounded-xl relative overflow-hidden">
              {/* Background Image with Low Opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{
                  backgroundImage: "url('/coffiy-background-grafik-stamina-pria-merah.png')",
                }}
              />
              
              {/* Content */}
              <CardContent className="p-0 relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Mengapa Memilih Produk Bersertifikat?
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Aman Terjamin</h4>
                    <p className="text-muted-foreground text-sm">
                      Produk telah melalui uji ketat dan terdaftar resmi di lembaga berwenang
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Kualitas Premium</h4>
                    <p className="text-muted-foreground text-sm">
                      Diproduksi dengan standar internasional dan quality control ketat
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-purple-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Legalitas Lengkap</h4>
                    <p className="text-muted-foreground text-sm">
                      Memenuhi semua persyaratan hukum dan perizinan di Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 md:py-24 bg-card" id="cara-pakai">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Panduan Lengkap Kopi Stamina Pria
              </h2>
              <p className="text-lg text-muted-foreground">
                Informasi lengkap kopi pria dewasa untuk hasil optimal dan konsumsi aman
              </p>
            </div>
            
            {/* Product Overview */}
            <Card className="bg-muted border-border p-8 rounded-xl mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  Tentang Kopi Stamina Pria Coffiy
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Coffiy merupakan kopi pria dewasa yang diformulasikan khusus untuk membantu menjaga vitalitas tubuh. 
                  Kopi penambah energi pria modern dengan formula premium agar manfaatnya dapat dirasakan secara optimal dan tetap aman.
                </p>
              </CardContent>
            </Card>
            
            {/* Consumption Guidelines */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-muted border-border p-6 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Waktu Konsumsi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coffiy disarankan diminum 1–2 jam setelah makan. Hal ini bertujuan untuk menghindari rasa terlalu kenyang serta membantu kenyamanan bagi konsumen yang memiliki riwayat sakit maag agar tidak terganggu.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted border-border p-6 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Anjuran Konsumsi Harian</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coffiy dianjurkan dikonsumsi 1 sachet per hari, dengan cara dilarutkan ke dalam ±50 ml air.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Effects and Reactions */}
            <Card className="bg-muted border-border p-8 rounded-xl mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Reaksi dan Khasiat yang Dirasakan
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Reaksi Individual</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Reaksi yang dirasakan dapat berbeda pada setiap individu, tergantung kondisi tubuh masing-masing. 
                      Berdasarkan testimoni konsumen, sebagian merasakan sensasi hangat atau peningkatan suhu tubuh setelah konsumsi.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-3">Waktu Mulai Terasa Khasiat</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Umumnya, khasiat Coffiy dapat mulai dirasakan beberapa jam setelah konsumsi, tergantung kondisi fisik masing-masing konsumen:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Pria fit: 2–4 jam setelah diminum</li>
                      <li>Konsumen lain: 6–8 jam setelah konsumsi</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Lama Efek Bertahan</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Durasi reaksi atau khasiat Coffiy sangat dipengaruhi oleh kondisi fisik konsumen pada saat mengonsumsi produk.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-3 mt-4">Tentang "Tahan Lama"</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Coffiy diformulasikan untuk membantu menjaga vitalitas tubuh pria dewasa, sehingga dapat menunjang stamina dan performa secara menyeluruh.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Safety Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-muted border-border p-6 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Keamanan untuk Wanita</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coffiy tidak disarankan untuk dikonsumsi oleh wanita. Meskipun bahan utamanya relatif aman, kandungan seperti guarana dan ginseng dapat menimbulkan reaksi yang kurang nyaman pada wanita. Ginseng sendiri memiliki efek membantu melancarkan peredaran darah, sehingga penggunaannya difokuskan untuk pria dewasa.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted border-border p-6 rounded-xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Penderita Penyakit Jantung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bagi penderita penyakit jantung, terutama yang masih dalam proses pengobatan, sangat disarankan untuk berkonsultasi terlebih dahulu dengan dokter sebelum mengonsumsi Coffiy.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Target Audience */}
            <Card className="bg-muted border-border p-8 rounded-xl mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Siapa yang Disarankan Mengonsumsi Coffiy?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Coffiy direkomendasikan khusus untuk pria dewasa yang ingin menjaga vitalitas dan kebugaran tubuh.
                </p>
              </CardContent>
            </Card>
            
            <Separator className="my-12 bg-border" />
            
            {/* FAQ Section */}
            <div className="bg-muted rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Pertanyaan yang Sering Diajukan
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Apakah Coffiy aman dikonsumsi?
                  </h4>
                  <p className="text-muted-foreground">
                    Ya, Coffiy terbuat dari bahan-bahan herbal alami yang aman dan telah terdaftar di BPOM. Namun wanita tidak disarankan mengonsumsi produk ini.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Berapa lama efek Coffiy bertahan?
                  </h4>
                  <p className="text-muted-foreground">
                    Durasi efek sangat dipengaruhi kondisi fisik konsumen. Umumnya efek dapat bertahan beberapa jam tergantung kondisi tubuh masing-masing.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Kapan sebaiknya minum Coffiy?
                  </h4>
                  <p className="text-muted-foreground">
                    Disarankan diminum 1-2 jam setelah makan untuk menghindari rasa terlalu kenyang dan memberikan kenyamanan bagi penderita maag.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Apakah ada efek samping?
                  </h4>
                  <p className="text-muted-foreground">
                    Beberapa konsumen merasakan sensasi hangat atau peningkatan suhu tubuh setelah konsumsi. Reaksi dapat berbeda pada setiap individu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/coffiy-background-grafik-stamina-pria-merah.png')",
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Mencoba Kopi Stamina Pria Terbaik?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Pesan kopi pria dewasa Coffiy sekarang dan rasakan perbedaannya. Gratis ongkir seluruh Indonesia dan garansi uang kembali jika tidak puas.
          </p>
          <Button 
            onClick={handleWhatsAppOrder}
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Pesan Sekarang via WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/coffiy-logo-kopi-stamina-pria.png" 
                  alt="Coffiy Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-muted-foreground">
                Solusi premium stamina pria dewasa untuk performa optimal.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Produk</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Coffiy 1 Box</li>
                <li>Coffiy 5 Sachet</li>
                <li>Panduan Penggunaan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Bantuan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Cara Pemesanan</li>
                <li>FAQ</li>
                <li>Kontak Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Hubungi Kami</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: 0812-3456-789</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Online 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="bg-border mb-8" />
          
          <div className="text-center text-muted-foreground">
            <p>&copy; 2026 Coffiy Stamina. All rights reserved. | 100% Original Product</p>
          </div>
        </div>
      </footer>
    </div>
  )
}