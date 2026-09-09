@echo off
title Deploying Projjal Paul Portfolio to Vercel
echo ===================================================
echo   Deploying Projjal Paul's Portfolio to Vercel
echo ===================================================
echo.
echo Step 1: Checking Vercel login status...
call vercel login
echo.
echo Step 2: Deploying to Production (--prod)...
call vercel --prod --yes
echo.
echo ===================================================
echo   Deployment Complete!
echo ===================================================
pause
