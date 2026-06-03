@echo off
cd /d "C:\Users\Admin\Desktop\proyecto"
"C:\Program Files\Git\bin\bash.exe" -c "git add questions.js && git commit -m 'Actualizar preguntas: sin repeticiones entre niveles' && git push origin master"
pause
