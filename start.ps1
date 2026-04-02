Write-Host "MUTENDEZI WA KILEGA: Demarrage du projet..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit -Command `"cd server; npm start`""
Write-Host ">> Serveur API demarre" -ForegroundColor Green
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit -Command `"cd client; npm run dev`""
Write-Host ">> Serveur Frontend demarre" -ForegroundColor Green
