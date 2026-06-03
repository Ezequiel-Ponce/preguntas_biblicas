@echo off
cd /d "C:\Users\Admin\Desktop\proyecto"
"C:\Program Files\Git\bin\bash.exe" -c "git remote set-url origin https://github.com/ezequiel-ponce/preguntas_biblicas.git && git push -u origin main"
pause
