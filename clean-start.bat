@echo off
title Temiz Baslat
color 0A

echo ================================
echo   CACHE TEMIZLENIYOR
echo ================================
echo.

REM .next klasorunu sil
if exist ".next\" (
    echo [BILGI] .next cache temizleniyor...
    rmdir /s /q .next 2>nul
    echo [OK] Cache temizlendi
) else (
    echo [BILGI] Cache zaten temiz
)
echo.

REM node_modules/.cache temizle
if exist "node_modules\.cache\" (
    echo [BILGI] node_modules cache temizleniyor...
    rmdir /s /q node_modules\.cache 2>nul
    echo [OK] node_modules cache temizlendi
)
echo.

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
