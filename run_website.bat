@echo off
echo ========================================
echo   Professional Networking Site Runner
echo ========================================
echo.
echo [1/2] Checking/Installing dependencies...
call npm install
echo.
echo [2/2] Starting development server...
echo.
echo The website will be available at the URL shown below (usually http://localhost:5173)
echo.
call npm run dev
pause
