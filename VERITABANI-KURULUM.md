# Veritabanı Kurulum Rehberi

## 1. MySQL Kurulumu

1. XAMPP, WAMP veya MySQL Server kurun
2. MySQL servisini başlatın

## 2. Veritabanlarını İçe Aktarma

`datalar` klasöründeki veritabanlarını MySQL'e aktarmanız gerekiyor:

### Yöntem 1: MySQL Workbench ile
1. MySQL Workbench'i açın
2. Server > Data Import seçin
3. "Import from Self-Contained File" seçin
4. Her veritabanı için .sql dosyasını seçin ve import edin

### Yöntem 2: Komut Satırı ile
```bash
# datalar klasörünü MySQL data dizinine kopyalayın
# Örnek: C:\xampp\mysql\data\
```

## 3. Veritabanı Yapısı

Entegre edilen veritabanları:
- `gsm` - GSM numarası sorguları
- `400k_vesika` - Vesika/kimlik sorguları  
- `secmen2015` - Seçmen kayıtları
- `adres` - Adres sorguları

## 4. .env.local Ayarları

`.env.local` dosyasında veritabanı bilgilerinizi güncelleyin:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_PORT=3306
```

## 5. MySQL2 Kütüphanesini Yükleme

```bash
npm install mysql2
```

Veya `install-mysql.bat` dosyasını çalıştırın.

## 6. API Endpoint'leri

Oluşturulan API endpoint'leri:
- `/api/query/gsm` - GSM sorgulama
- `/api/query/vesika` - Vesika sorgulama
- `/api/query/adres` - Adres sorgulama
- `/api/query/secmen` - Seçmen sorgulama

## 7. Kullanım

Her sorgu:
- Kullanıcı girişi gerektirir
- Yetki kontrolü yapar (permissions: "sorgu" veya "full")
- Bakiye kontrolü yapar (minimum 1 kredi)
- Başarılı sorguda bakiyeden 1 kredi düşer

## Notlar

- Veritabanı tablo yapılarını kontrol edin
- Gerekirse `lib/mysql.ts` dosyasındaki sorguları tablo yapınıza göre güncelleyin
- MySQL servisinin çalıştığından emin olun
