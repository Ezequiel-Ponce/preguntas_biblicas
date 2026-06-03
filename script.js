// Variables globales
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedDifficulty = '';
let correctAnswers = 0;
let wrongAnswers = 0;
let questionsAnswered = [];

// Elementos del DOM
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

// Función para iniciar el quiz
function startQuiz(difficulty) {
    selectedDifficulty = difficulty;
    currentQuestions = getRandomQuestions(difficulty, 10);
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    questionsAnswered = [];

    // Cambiar pantalla
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    // Mostrar primera pregunta
    loadQuestion();
}

// Función para cargar una pregunta
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    
    // Actualizar contador
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    document.getElementById('currentScore').textContent = score;

    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Mostrar pregunta
    document.getElementById('question').textContent = question.question;

    // Mostrar opciones de respuesta
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    // Mezclar opciones
    const shuffledOptions = shuffleArray(
        question.options.map((option, index) => ({ text: option, index: index }))
    );

    shuffledOptions.forEach((item, displayIndex) => {
        const button = document.createElement('button');
        button.className = 'answer-option';
        button.textContent = item.text;
        button.onclick = () => selectAnswer(item.index, displayIndex);
        answersContainer.appendChild(button);
    });

    // Ocultar explicación y botón siguiente
    document.getElementById('explanationContainer').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
}

// Función para seleccionar una respuesta
function selectAnswer(correctIndex, displayIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-option');
    
    // Deshabilitar todos los botones
    answerButtons.forEach(btn => btn.classList.add('disabled'));

    // Mostrar respuesta correcta e incorrecta
    const isCorrect = correctIndex === question.correct;

    if (isCorrect) {
        answerButtons[displayIndex].classList.add('correct');
        score += 10;
        correctAnswers++;
    } else {
        answerButtons[displayIndex].classList.add('incorrect');

        // Mostrar la respuesta correcta
        answerButtons.forEach(btn => {
            if (btn.textContent === question.options[question.correct]) {
                btn.classList.add('correct');
            }
        });
        wrongAnswers++;
    }

    // Mostrar explicación
    const explanationContainer = document.getElementById('explanationContainer');
    document.getElementById('explanation').textContent = question.explanation;
    explanationContainer.style.display = 'block';

    // Mostrar botón siguiente
    document.getElementById('nextBtn').style.display = 'block';

    // Actualizar puntuación mostrada
    document.getElementById('currentScore').textContent = score;

    questionsAnswered.push({
        question: question.question,
        answered: isCorrect,
        userAnswer: question.options[correctIndex]
    });
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Función para mostrar resultados
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    // Calcular porcentaje
    const percentage = Math.round((correctAnswers / currentQuestions.length) * 100);

    // Mostrar información
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('percentage').textContent = percentage;

    // Mensaje motivacional
    const messageElement = document.getElementById('performanceMessage');
    let message = '';

    if (percentage === 100) {
        message = '🏆 ¡PERFECTO! ¡Eres un experto en la Biblia! 🏆';
    } else if (percentage >= 80) {
        message = '⭐ ¡Excelente! ¡Muy buen desempeño! ⭐';
    } else if (percentage >= 60) {
        message = '👍 ¡Bien hecho! ¡Sigue practicando! 👍';
    } else if (percentage >= 40) {
        message = '💪 ¡Buen intento! ¡Puedes hacerlo mejor! 💪';
    } else {
        message = '📚 ¡Sigue estudiando la Biblia y vuelve a intentarlo! 📚';
    }

    messageElement.textContent = message;
}

// Función para salir del quiz
function exitQuiz() {
    if (confirm('¿Estás seguro de que quieres salir? Perderás tu progreso.')) {
        location.reload();
    }
}

// Inicializar en pantalla de inicio
window.addEventListener('load', () => {
    startScreen.classList.add('active');
});
