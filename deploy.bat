@echo off
cd /d "C:\Users\Admin\Desktop\proyecto"

"C:\Program Files\Git\bin\bash.exe" -lc "cd ~/Desktop/proyecto && git remote set-url origin https://github.com/ezequiel-ponce/preguntas_biblicas.git && git add . && git diff --cached --quiet || git commit -m 'Actualizar preguntas biblicas exactas' && git push -u origin master && git push --force-with-lease origin master:main"

pause
