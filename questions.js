// Base de datos de preguntas bíblicas - Reina Valera 1960
const allQuestions = {
    easy: [
        {
            question: "¿Cuántos días tardó Dios en crear el cielo y la tierra?",
            options: ["Seis días", "Siete días", "Tres días", "Diez días"],
            correct: 0,
            explanation: "Dios creó los cielos y la tierra en seis días y descansó en el séptimo (Génesis 1:31 - 2:2)."
        },
        {
            question: "¿Quién fue la madre de Jesús?",
            options: ["María de Nazaret", "Marta", "María Magdalena", "Elisabet"],
            correct: 0,
            explanation: "María de Nazaret fue la madre de Jesús según los evangelios de Mateo y Lucas."
        },
        {
            question: "¿Quién construyó el arca porque Dios le pidió salvar a su familia y animales?",
            options: ["Abraham", "Moisés", "Noé", "David"],
            correct: 2,
            explanation: "Noé construyó el arca por mandato de Dios para salvar a su familia y a los animales del diluvio (Génesis 6-9)."
        },
        {
            question: "¿Quién fue el primer hombre creado por Dios?",
            options: ["Adán", "Enoc", "Abel", "Set"],
            correct: 0,
            explanation: "Adán fue el primer hombre creado por Dios, según Génesis 1:27."
        },
        {
            question: "¿Cuántos apóstoles escogió Jesús?",
            options: ["10", "12", "14", "7"],
            correct: 1,
            explanation: "Jesús escogió a doce apóstoles para acompañarlo y difundir su mensaje."
        },
        {
            question: "¿Cuál fue el primer milagro de Jesús según el Evangelio de Juan?",
            options: ["Convertir agua en vino", "Sanar a un ciego", "Multiplicar los panes", "Calmar la tormenta"],
            correct: 0,
            explanation: "El primer milagro registrado en el Evangelio de Juan es convertir el agua en vino en las bodas de Caná (Juan 2:1-11)."
        },
        {
            question: "¿Dónde oró Jesús antes de ser arrestado?",
            options: ["Monte de los Olivos", "Templo", "Mar de Galilea", "Monte Sinaí"],
            correct: 0,
            explanation: "Jesús oró en el Monte de los Olivos, en el huerto de Getsemaní, antes de su arresto."
        },
        {
            question: "¿Qué alimentos bendijo Jesús para alimentar a cinco mil hombres?",
            options: ["Pan y pescado", "Pan y vino", "Manzanas y dátiles", "Carne y pan"],
            correct: 0,
            explanation: "Jesús bendijo cinco panes y dos peces para alimentar a cinco mil hombres (Mateo 14:13-21)."
        },
        {
            question: "¿Cuántas plagas envió Dios sobre Egipto?",
            options: ["Cinco", "Siete", "Diez", "Doce"],
            correct: 2,
            explanation: "Dios envió diez plagas sobre Egipto para liberar a Israel de la esclavitud (Éxodo 7-12)."
        },
        {
            question: "¿Quién es el rey que escribió muchos de los Salmos?",
            options: ["Moisés", "David", "Isaías", "Salomón"],
            correct: 1,
            explanation: "El rey David escribió muchos salmos y es reconocido como autor principal del libro de los Salmos."
        }
    ],
    medium: [
        {
            question: "¿En qué libro de la Biblia está la historia de David y Goliat?",
            options: ["Jueces", "1 Samuel", "2 Samuel", "1 Reyes"],
            correct: 1,
            explanation: "La historia de David y Goliat se narra en 1 Samuel 17."
        },
        {
            question: "¿Quién negó a Jesús tres veces antes de que cantara el gallo?",
            options: ["Pedro", "Juan", "Tomás", "Judas"],
            correct: 0,
            explanation: "Pedro negó a Jesús tres veces antes de que cantara el gallo, tal como predijo Jesús (Mateo 26:69-75)."
        },
        {
            question: "¿Quién fue tragado por un gran pez?",
            options: ["Jonás", "Jeremías", "Eliseo", "Daniel"],
            correct: 0,
            explanation: "El profeta Jonás fue tragado por un gran pez y permaneció en su vientre tres días y tres noches (Jonás 1:17)."
        },
        {
            question: "¿Cuántos años de vida sacrificó Daniel en el foso de los leones?",
            options: ["Una noche", "Tres noches", "Siete noches", "Doce noches"],
            correct: 0,
            explanation: "Daniel pasó una noche en el foso de los leones y fue protegido por Dios (Daniel 6)."
        },
        {
            question: "¿Cuál es la oración que Jesús enseñó en Mateo 6?",
            options: ["Padrenuestro", "Gloria a Dios", "Magnificat", "Salmo 23"],
            correct: 0,
            explanation: "El Padrenuestro es la oración que Jesús enseñó a sus discípulos en Mateo 6:9-13."
        },
        {
            question: "¿Cuántos libros tiene el Nuevo Testamento?",
            options: ["27", "39", "66", "23"],
            correct: 0,
            explanation: "El Nuevo Testamento de la Biblia Reina Valera 1960 tiene 27 libros."
        },
        {
            question: "¿Quién fue elegido rey de Israel después de Saúl?",
            options: ["Salomón", "David", "Josué", "Roboam"],
            correct: 1,
            explanation: "David fue elegido rey de Israel después de Saúl."
        },
        {
            question: "¿Quién era la madre de Juan el Bautista?",
            options: ["María", "Elisabet", "Marta", "Ana"],
            correct: 1,
            explanation: "Elisabet fue la madre de Juan el Bautista y pariente de María."
        },
        {
            question: "¿Qué significa el nombre 'Imanuel'?",
            options: ["Dios con nosotros", "Rey de reyes", "Salvación del pueblo", "Luz del mundo"],
            correct: 0,
            explanation: "Imanuel significa 'Dios con nosotros' y aparece en Isaías 7:14."
        },
        {
            question: "¿Quién escribió la mayoría de las cartas del Nuevo Testamento?",
            options: ["Pablo", "Pedro", "Santiago", "Juan"],
            correct: 0,
            explanation: "Pablo escribió la mayoría de las epístolas del Nuevo Testamento."
        }
    ],
    hard: [
        {
            question: "¿Quién escribió el libro del Apocalipsis?",
            options: ["Pedro", "Juan", "Pablo", "Santiago"],
            correct: 1,
            explanation: "El apóstol Juan escribió el libro del Apocalipsis mientras estaba en Patmos."
        },
        {
            question: "¿Quién fue llevado al cielo en un carro de fuego?",
            options: ["Elías", "Eliseo", "Moisés", "Ezequías"],
            correct: 0,
            explanation: "Elías fue llevado al cielo en un carro de fuego (2 Reyes 2:11)."
        },
        {
            question: "¿Cuántos sellos aparecen en el libro de Apocalipsis?",
            options: ["5", "6", "7", "12"],
            correct: 2,
            explanation: "En el Apocalipsis hay siete sellos que se rompen durante la visión de Juan."
        },
        {
            question: "¿Qué rey pidió sabiduría a Dios y escribió Proverbios?",
            options: ["David", "Salomón", "Ezequías", "Josías"],
            correct: 1,
            explanation: "Salomón pidió sabiduría a Dios y escribió muchos proverbios."
        },
        {
            question: "¿Qué profeta predijo setenta años de cautiverio en Babilonia?",
            options: ["Jeremías", "Isaías", "Oseas", "Joel"],
            correct: 0,
            explanation: "Jeremías predijo 70 años de cautiverio en Babilonia (Jeremías 25:11-12)."
        },
        {
            question: "¿Quién fue el primer mártir cristiano en el libro de Hechos?",
            options: ["Esteban", "Santiago", "Felipe", "Bernabé"],
            correct: 0,
            explanation: "Esteban fue el primer mártir cristiano, apedreado en Hechos 7."
        },
        {
            question: "¿Qué fiesta hebrea celebra la liberación de Egipto?",
            options: ["Pesaj", "Shavuot", "Sukkot", "Janucá"],
            correct: 0,
            explanation: "Pesaj, o Pascua, celebra la liberación de los israelitas de Egipto."
        },
        {
            question: "¿Qué palabra describe al cobrador de impuestos en el Nuevo Testamento?",
            options: ["Publicano", "Sacerdote", "Fariseo", "Rabí"],
            correct: 0,
            explanation: "Publicano era el nombre que se usaba para los cobradores de impuestos en tiempos de Jesús."
        },
        {
            question: "¿Qué significa INRI, la inscripción colocada en la cruz de Jesús?",
            options: ["Jesús Nazareno Rey de los Judíos", "Justo Nazareno Rey Israel", "Jesús Nombre Rey Israel", "Jesús Nazareno Rey de Israel"],
            correct: 0,
            explanation: "INRI significa 'Jesús Nazareno Rey de los Judíos', según Juan 19:19-20."
        },
        {
            question: "¿Cuántas cartas atribuidas a Pablo hay en el Nuevo Testamento?",
            options: ["13", "11", "15", "10"],
            correct: 0,
            explanation: "Tradicionalmente se atribuyen 13 cartas a Pablo en el Nuevo Testamento."
        }
    ]
};

// Función para mezclar un array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Función para obtener preguntas del nivel seleccionado
function getRandomQuestions(difficulty, count = 10) {
    const questions = allQuestions[difficulty];
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}
