@echo off
echo ======================================
echo Angular Demo Deploy to GitHub Pages
echo ======================================

REM Nastavenia - UPRAV TIETO HODNOTY
set PROJECT_NAME=demo
set GITHUB_USERNAME=b-mi
set REPO_NAME=ngx-mat-grayscale-theme

REM echo.
REM echo ======================================
REM echo 1. Test build projektu %PROJECT_NAME%
REM echo ======================================
REM call ng build ngx-mat-grayscale-theme
REM if %errorlevel% neq 0 (
    REM echoc error CHYBA: Build projektu build ngx-mat-grayscale-theme zlyhal!
    REM pause
    REM exit /b 1
REM )
REM echo pause
REM pause

REM call ng build %PROJECT_NAME% --base-href=/ngx-mat-grayscale-theme/
REM if %errorlevel% neq 0 (
    REM echoc error CHYBA: Build projektu %PROJECT_NAME% zlyhal!
    REM pause
    REM exit /b 1
REM )

REM echo.
REM echo Build úspešný!
REM echo.

REM pause

REM echo ======================================
REM echo 2. Publikovanie na GitHub Pages
REM echo ======================================
REM echo URL: https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
REM echo.

REM Publikovanie
call ng deploy  --repo=https://github.com/b-mi/ngx-mat-grayscale-theme.git --dry-run

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