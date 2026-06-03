@echo off
cd /d "C:\Users\Admin\Desktop\proyecto"
"C:\Program Files\Git\bin\bash.exe" -c "git add questions.js && git commit -m 'Expandir banco de preguntas: 25 facil, 24 medio, 24 dificil - Total 73 preguntas unicas' && git push origin master"
pause
