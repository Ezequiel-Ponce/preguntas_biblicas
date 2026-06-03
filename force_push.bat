@echo off
cd /d "C:\Users\Admin\Desktop\proyecto"
"C:\Program Files\Git\bin\bash.exe" -c "git add -A && git commit -m 'Force update: 73 preguntas biblicas totales' && git push origin master --force"
pause
