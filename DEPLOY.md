# Deployment Rehberi

## Vercel'e Deploy

### 1. GitHub Repository Oluşturma

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/mcheck.git
git push -u origin main
```

### 2. Vercel'e Deploy

1. https://vercel.com adresine gidin
2. GitHub ile giriş yapın
3. "New Project" tıklayın
4. Repository'nizi seçin
5. Environment Variables ekleyin:
   - `AUTH_SECRET`: got0GXssEyADEjm71nndiVoIotTXTcAequMhF+89Dj0=
   - `AUTH_URL`: https://your-domain.vercel.app
   - `DB_HOST`: (MySQL host adresi)
   - `DB_USER`: (MySQL kullanıcı adı)
   - `DB_PASSWORD`: (MySQL şifresi)
   - `DB_PORT`: 3306

6. "Deploy" butonuna tıklayın

### 3. Veritabanı Kurulumu

Vercel ücretsiz planında MySQL yok. Alternatifler:

#### Seçenek 1: PlanetScale (Ücretsiz MySQL)
1. https://planetscale.com adresine gidin
2. Ücretsiz hesap oluşturun
3. Veritabanı oluşturun
4. Connection string'i Vercel environment variables'a ekleyin

#### Seçenek 2: Railway (Ücretsiz MySQL)
1. https://railway.app adresine gidin
2. MySQL database oluşturun
3. Connection bilgilerini Vercel'e ekleyin

#### Seçenek 3: Kendi VPS'iniz
- DigitalOcean, Hetzner, Contabo gibi VPS sağlayıcılardan sunucu kiralayın
- MySQL kurun
- Vercel'den bağlantı yapın

### 4. Data Klasörü

`data` klasöründeki JSON dosyaları hassas veri içeriyor. Bunları:
- GitHub'a yüklemeyin (.gitignore'da)
- Vercel'e manuel yükleyin veya
- Veritabanına taşıyın

### 5. Datalar Klasörü (MySQL Databases)

`datalar` klasöründeki MySQL veritabanlarını:
1. Export edin (mysqldump)
2. Hosting MySQL'e import edin
3. Connection bilgilerini güncelleyin

## Alternatif Hostingler

### Netlify
- Next.js desteği var
- Ücretsiz plan mevcut
- Benzer deployment süreci

### Railway
- Full-stack hosting
- MySQL dahil
- Ücretsiz $5 kredi/ay

### DigitalOcean App Platform
- $5/ay'dan başlayan planlar
- MySQL dahil
- Tam kontrol

## Production Build Test

Deployment öncesi local'de test edin:

```bash
npm run build
npm run start
```

Hata varsa düzeltin, sonra deploy edin.

## Önemli Notlar

1. `.env.local` dosyasını GitHub'a yüklemeyin
2. Hassas verileri environment variables olarak ekleyin
3. MySQL bağlantısını test edin
4. Production'da `AUTH_URL`'i güncelleyin
5. CORS ayarlarını kontrol edin
