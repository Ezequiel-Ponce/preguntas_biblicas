@echo off
cd /d "C:\Users\Admin\Desktop\proyecto"

"C:\Program Files\Git\bin\bash.exe" -c "git config --global user.email 'admin@example.com' && git config --global user.name 'Admin' && git add . && git commit -m 'Actualizar preguntas biblicas exactas' && git remote add origin https://github.com/ezequiel-ponce/preguntas_biblicas.git && git branch -M main && git push -u origin main"

pause
