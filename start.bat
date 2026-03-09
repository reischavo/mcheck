@echo off
title Proje Baslat
color 0A

echo ================================
echo   PROJE BASLATILIYOR
echo ================================
echo.

REM Node.js kontrolu
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [HATA] Node.js bulunamadi!
    echo Lutfen Node.js yukleyin: https://nodejs.org/
    echo.
    pause
    exit
)

echo [OK] Node.js bulundu
node --version
echo.

REM npm kontrolu
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [HATA] npm bulunamadi!
    pause
    exit
)

echo [OK] npm bulundu
npm --version
echo.

REM node_modules kontrolu
if not exist "node_modules\" (
    echo [BILGI] Bagimlililar yukleniyor... (Bu biraz zaman alabilir)
    npm install
    if %errorlevel% neq 0 (
        echo [HATA] Bagimlililar yuklenemedi!
        pause
        exit
    )
    echo [OK] Bagimlililar yuklendi
    echo.
)

REM .env.local kontrolu
if not exist ".env.local" (
    if exist ".env.example" (
        echo [BILGI] .env.local olusturuluyor...
        copy .env.example .env.local >nul
        echo [UYARI] .env.local dosyasini duzenleyin!
        echo.
    )
)

REM Cache temizleme
if exist ".next\" (
    echo [BILGI] Cache temizleniyor...
    rmdir /s /q .next 2>nul
)

echo ================================
echo   SUNUCU BASLATILIYOR
echo ================================
echo.
echo Tarayicinizda acin: http://localhost:3000
echo.
echo Durdurmak icin: CTRL+C
echo.

npm run dev

pause
