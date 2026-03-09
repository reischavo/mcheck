# Vercel Desktop ile Deploy

## Adımlar

### 1. Environment Variables Ekle

Vercel Desktop'ta projenize tıklayın, sonra Settings > Environment Variables:

```
AUTH_SECRET=got0GXssEyADEjm71nndiVoIotTXTcAequMhF+89Dj0=
AUTH_URL=https://your-project.vercel.app
NODE_ENV=production
```

MySQL kullanmayacaksanız (şimdilik JSON ile çalışacak):
- `DB_HOST`, `DB_USER`, `DB_PASSWORD` eklemeyin
- MySQL sorgu API'leri hata verecek ama site çalışacak

### 2. Deploy

Vercel Desktop'ta:
1. "Deploy" butonuna tıklayın
2. Build tamamlanmasını bekleyin (2-3 dakika)
3. "Visit" ile sitenizi açın

### 3. İlk Giriş

Deploy sonrası:
- URL: `https://your-project.vercel.app`
- Admin: `admin@mcheck.co` / `mohawk`

### 4. Sorun Giderme

**Build hatası alırsanız:**
1. Vercel Desktop > Logs'a bakın
2. Genellikle environment variables eksikliği
3. `AUTH_URL`'i doğru domain ile güncelleyin

**Sayfa yüklenmiyor:**
1. Browser console'u açın (F12)
2. Network tab'ında hataları kontrol edin
3. Vercel logs'a bakın

**MySQL hataları:**
- Normal, çünkü henüz MySQL bağlantısı yok
- Sorgu sayfaları mock data gösterecek
- İleride PlanetScale/Railway ekleyebilirsiniz

### 5. Domain Bağlama (Opsiyonel)

Vercel Desktop > Settings > Domains:
1. Custom domain ekleyin
2. DNS ayarlarını yapın
3. `AUTH_URL`'i yeni domain ile güncelleyin

### 6. Güncelleme

Kod değişikliği yaptığınızda:
1. Dosyaları kaydedin
2. Vercel Desktop otomatik deploy eder
3. Veya manuel "Deploy" butonuna basın

## Önemli Notlar

- `data/` klasörü Vercel'e yüklenmez (.gitignore'da)
- İlk deploy'da sadece admin kullanıcısı olacak
- Yeni kullanıcılar kayıt olabilir
- MySQL olmadan sorgu sayfaları mock data gösterir
- Production'da performans çok daha iyi olacak

## Sonraki Adımlar

1. ✅ Deploy tamamlandı
2. 🔄 MySQL ekle (PlanetScale/Railway)
3. 📧 Email servisi ekle (opsiyonel)
4. 🎨 Domain bağla (opsiyonel)
5. 📊 Analytics ekle (opsiyonel)
