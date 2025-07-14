@echo off
REM Nastavenia - UPRAV TIETO HODNOTY
set PROJECT_NAME=demo
set GITHUB_USERNAME=b-mi
set REPO_NAME=ngx-mat-grayscale-theme

echoc title ======================================
echoc title Angular '%PROJECT_NAME%' Deploy to GitHub Pages
echoc title ======================================


echoc title ======================================
echoc title Aktualizacia verzie projektu %PROJECT_NAME%
echoc title ======================================

call npm version patch

echo.
echoc title ======================================
echoc title Build projektu %PROJECT_NAME%
echoc title ======================================
call ng build %REPO_NAME%
if %errorlevel% neq 0 (
    echoc error CHYBA: Build projektu build %REPO_NAME% zlyhal!
    pause
    exit /b 1
)


echo.
echoc done Build uspesny!
echo.


echoc title ======================================
echoc title 2. Build a publikovanie '%PROJECT_NAME%' na GitHub Pages
echoc title ======================================
echoc info URL: https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
echo.
echoc warning Stlac ENTER pre pokracovanie
pause
call ng deploy --base-href=/%REPO_NAME%/ --no-silent

if %errorlevel% equ 0 (
    echo.
    echoc done ======================================
    echoc done success ✅ ÚSPECH!
    echoc done ======================================
    echoc info Aplikacia je publikovana na:
    echoc info https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
    echo.
    echoc warning Moze trvat 1-2 minuty kym sa zmeny prejavia.
) else (
    echo.
    echoc error ======================================
    echoc error error ❌ CHYBA!
    echoc error ======================================
    echoc error PublikOVANIE ZlYhAlo. MozNe rIEeEnIa:
    echoc error 1. SKoNTrOLUj GitHUB CREdeNtials
    echoc error 2. OvErte REpO Url
    echoc error 3. SkoNtROluj NaZOV proJeKtU V angULAR.jsoN
)

echo.
pause