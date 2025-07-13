@echo off
echo ======================================
echo Angular Demo Deploy to GitHub Pages
echo ======================================

REM Nastavenia - UPRAV TIETO HODNOTY
set PROJECT_NAME=demo
set GITHUB_USERNAME=b-mi
set REPO_NAME=ngx-mat-grayscale-theme
set PROJECT_PATH=C:\cesta\k\tvojmu\angular\projektu

echo.
echo ======================================
echo 1. Test build projektu %PROJECT_NAME%
echo ======================================
call ng build %PROJECT_NAME%
if %errorlevel% neq 0 (
    echo CHYBA: Build projektu %PROJECT_NAME% zlyhal!
    pause
    exit /b 1
)

echo.
echo Build úspešný!
echo.

echo ======================================
echo 2. Publikovanie na GitHub Pages
echo ======================================
echo URL: https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
echo.

REM Publikovanie
call ng deploy --project=%PROJECT_NAME% --base-href=/%REPO_NAME%/

if %errorlevel% equ 0 (
    echo.
    echo ======================================
    echo ✅ ÚSPECH!
    echo ======================================
    echo Aplikácia je publikovaná na:
    echo https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
    echo.
    echo Môže trvať 1-2 minúty kým sa zmeny prejavia.
) else (
    echo.
    echo ======================================
    echo ❌ CHYBA!
    echo ======================================
    echo Publikovanie zlyhalo. Možné riešenia:
    echo 1. Skontroluj GitHub credentials
    echo 2. Overte repo URL
    echo 3. Skontroluj názov projektu v angular.json
)

echo.
pause