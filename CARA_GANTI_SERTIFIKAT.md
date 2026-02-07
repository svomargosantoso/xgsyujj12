# Cara Mengganti Gambar Sertifikat Coffiy

## Lokasi File
Gambar sertifikat Anda dapat ditempatkan di folder:
```
/home/z/my-project/public/
```

## Nama File yang Direkomendasikan
- `sertifikat-bpom.png` atau `sertifikat-bpom.jpg`
- `sertifikat-halal-mui.png` atau `sertifikat-halal-mui.jpg`
- `sertifikat-gmp.png` atau `sertifikat-gmp.jpg`
- `sertifikat-iso.png` atau `sertifikat-iso.jpg`
- `sertifikat-cpotb.png` atau `sertifikat-cpotb.jpg`
- `sertifikat-tkdn.png` atau `sertifikat-tkdn.jpg`

## Cara Update di Kode
Setelah mengupload gambar ke folder `public/`, update kode di `src/app/page.tsx`:

### 1. Ganti placeholder dengan gambar asli:
```jsx
// Ganti ini:
<div className="aspect-square bg-surface rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-border">
  <div className="text-center">
    <Shield className="w-16 h-16 text-primary mx-auto mb-2" />
    <p className="text-muted-foreground text-sm">Sertifikat BPOM</p>
  </div>
</div>

// Menjadi ini:
<img 
  src="/sertifikat-bpom.png"
  alt="Sertifikat BPOM Coffiy"
  className="aspect-square w-full rounded-lg mb-4 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
/>
```

### 2. Lakukan untuk semua 6 sertifikat:
- BPOM
- Halal MUI
- GMP
- ISO
- CPOTB
- TKDN

## Tips Tambahan
1. **Ukuran Gambar**: Gunakan ukuran yang konsisten (misal: 400x400px)
2. **Format**: PNG atau JPG dengan kualitas baik
3. **Optimasi**: Kompres gambar untuk loading yang cepat
4. **Responsive**: Gambar akan otomatis responsif

## Contoh Kode Lengkap
```jsx
<Card className="bg-muted border-border p-6 rounded-xl hover:bg-border transition-colors duration-200">
  <CardContent className="p-0">
    <img 
      src="/sertifikat-bpom.png"
      alt="Sertifikat BPOM Coffiy"
      className="aspect-square w-full rounded-lg mb-4 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
    />
    <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
      Sertifikat BPOM
    </h3>
    <p className="text-muted-foreground text-center text-sm">
      Terdaftar resmi di Badan Pengawas Obat dan Makanan Indonesia
    </p>
  </CardContent>
</Card>
```

## Preview
Setelah mengganti gambar, refresh halaman untuk melihat perubahan. Sertifikat akan ditampilkan dengan:
- Hover effect (scale 105%)
- Shadow yang menarik
- Responsive design
- Smooth transitions