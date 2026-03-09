# Performans İyileştirme Notları

## Sorun: Ana Sayfa Donuyor

Ana sayfada WebGL/Three.js tabanlı `SynapticShift` animasyonu ağır işlem yapıyor ve tarayıcıyı yavaşlatıyor.

## Çözümler

### Çözüm 1: Basit Hero Section Kullan (Önerilen)

`app/page.tsx` dosyasında:

```tsx
// Ağır animasyonlu versiyon yerine
import { LandingHero } from "@/components/LandingHero";

// Basit versiyonu kullanın
import { SimpleLandingHero } from "@/components/SimpleLandingHero";

// Sonra component'i değiştirin
<SimpleLandingHero />
```

### Çözüm 2: Animasyonu Tamamen Kaldır

`components/LandingHero.tsx` dosyasında `SynapticShift` component'ini kaldırıp sadece gradient arka plan kullanın:

```tsx
<div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black" />
```

### Çözüm 3: Animasyon Parametrelerini Düşür (Yapıldı)

Zaten uygulandı:
- `complexity`: 12 → 8 (daha az hesaplama)
- `intensity`: 1.8 → 1.5
- `breathing`: true → false (ekstra animasyon kapalı)
- `speed`: 0.4 → 0.3

### Çözüm 4: Sadece Masaüstünde Göster

```tsx
const SynapticShift = dynamic(() => import("@/components/synaptic-shift"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
});

// Mobilde gösterme
{typeof window !== 'undefined' && window.innerWidth > 768 && (
  <SynapticShift ... />
)}
```

## Önerilen Aksiyon

1. `app/page.tsx` dosyasını aç
2. `LandingHero` yerine `SimpleLandingHero` kullan
3. Sunucuyu yeniden başlat

Bu sayede site hızlı çalışacak ve donma olmayacak.
