@echo off
title Push Portfolio to GitHub
echo ===================================================
echo   Pushing Portfolio to GitHub
echo ===================================================
echo.
set /p REPO_URL="Enter your GitHub Repository URL (or press Enter for default https://github.com/Prorick44/Projjal-Paul-Portfolio.git): "
if "%REPO_URL%"=="" set REPO_URL=https://github.com/Prorick44/Projjal-Paul-Portfolio.git

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
echo.
echo Pushing to %REPO_URL%...
git push -u origin main
echo.
echo ===================================================
echo   Completed!
echo ===================================================
pause
