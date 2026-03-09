@echo off
title Git Push
color 0A

echo ================================
echo   GIT REPOSITORY HAZIRLANIYOR
echo ================================
echo.

REM Git kontrolu
where git >nul 2>nul
if errorlevel 1 (
    echo [HATA] Git bulunamadi!
    echo Git yukleyin: https://git-scm.com/
    pause
    exit
)

echo [OK] Git bulundu
echo.

REM Git init
if not exist ".git\" (
    echo [BILGI] Git repository olusturuluyor...
    git init
    git branch -M main
    echo [OK] Repository olusturuldu
    echo.
)

REM Dosyalari ekle
echo [BILGI] Dosyalar ekleniyor...
git add .
echo [OK] Dosyalar eklendi
echo.

REM Commit
echo [BILGI] Commit yapiliyor...
set /p commit_msg="Commit mesaji girin (bos birakilirsa 'Update'): "
if "%commit_msg%"=="" set commit_msg=Update
git commit -m "%commit_msg%"
echo [OK] Commit tamamlandi
echo.

REM Remote kontrol
git remote -v | findstr "origin" >nul 2>nul
if errorlevel 1 (
    echo [UYARI] Remote repository tanimli degil!
    echo.
    echo GitHub'da yeni repository olusturun, sonra:
    echo git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
    echo.
    pause
    exit
)

REM Push
echo [BILGI] GitHub'a yukleniyor...
git push -u origin main
echo.

if errorlevel 0 (
    echo [OK] Basariyla yuklendi!
    echo.
    echo Simdi Vercel'e gidin:
    echo 1. https://vercel.com
    echo 2. New Project
    echo 3. Repository'nizi secin
    echo 4. Environment Variables ekleyin
    echo 5. Deploy
) else (
    echo [HATA] Yukleme basarisiz!
)

echo.
pause
