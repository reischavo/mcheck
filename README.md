# mcheck.co - Sorgu Platformu

Türkiye'nin güvenilir sorgu çözümleri platformu. TC, GSM, Mernis, adres ve daha fazlası için API tabanlı hizmetler.

## Özellikler

- 🔐 Güvenli kimlik doğrulama (NextAuth v5)
- 💳 Kripto ödeme sistemi
- 🛒 Market sistemi (kart satışı)
- 🎫 Destek ticket sistemi
- 👥 Kullanıcı yönetimi (Super Admin, Mini Admin, User)
- 📊 Admin paneli
- 🔍 Çoklu sorgu tipleri (GSM, TC, Adres, Vesika, Seçmen)
- 💰 Bakiye sistemi
- 🎨 Modern UI (Tailwind CSS)

## Teknolojiler

- Next.js 16
- React 19
- TypeScript
- NextAuth v5
- Tailwind CSS 4
- MySQL (sorgu veritabanları)
- JSON (kullanıcı verileri)

## Kurulum

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Environment Variables

`.env.local` dosyası oluşturun:

```env
AUTH_SECRET=got0GXssEyADEjm71nndiVoIotTXTcAequMhF+89Dj0=
AUTH_URL=http://localhost:3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
```

### 3. Veritabanı Kurulumu

MySQL veritabanlarını kurun (detaylar için `VERITABANI-KURULUM.md`)

### 4. Geliştirme Sunucusu

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` açın.

## Admin Girişi

- Email: `admin@mcheck.co`
- Şifre: `mohawk`

## Deployment

Detaylı deployment rehberi için `DEPLOY.md` dosyasına bakın.

### Hızlı Deploy (Vercel)

1. GitHub'a yükle:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

2. Vercel'e git: https://vercel.com
3. Repository'yi import et
4. Environment variables ekle
5. Deploy

## Proje Yapısı

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── panel/             # Kullanıcı paneli
│   ├── login/             # Giriş sayfası
│   └── kayit/             # Kayıt sayfası
├── components/            # React componentleri
├── lib/                   # Utility fonksiyonlar
│   ├── db.ts             # JSON veritabanı işlemleri
│   └── mysql.ts          # MySQL sorgu fonksiyonları
├── data/                  # JSON veritabanı dosyaları
├── datalar/              # MySQL veritabanı dosyaları
└── public/               # Statik dosyalar
```

## Scriptler

- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Production build
- `npm run start` - Production sunucu
- `npm run lint` - Kod kontrolü
- `npm run format` - Kod formatlama

## Bat Dosyaları (Windows)

- `start.bat` - Sunucuyu başlat
- `clean-start.bat` - Cache temizle ve başlat
- `install-mysql.bat` - MySQL2 kütüphanesini yükle
- `deploy.bat` - GitHub'a yükle

## Lisans

Özel proje - Tüm hakları saklıdır.
