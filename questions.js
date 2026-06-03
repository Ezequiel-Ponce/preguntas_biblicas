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
            question: "¿Cuántos mandamientos Dios entregó a Moisés?",
            options: ["Cinco", "Diez", "Veinte", "Treinta"],
            correct: 1,
            explanation: "Dios entregó los Diez Mandamientos a Moisés en el Monte Sinaí (Éxodo 20)."
        },
        {
            question: "¿Quién fue el padre de Noé?",
            options: ["Matusalén", "Jared", "Enoc", "Lamec"],
            correct: 3,
            explanation: "Lamec fue el padre de Noé según Génesis 5:28-29."
        },
        {
            question: "¿Cuántos años vivió Matusalén?",
            options: ["700", "800", "900", "969"],
            correct: 3,
            explanation: "Matusalén vivió 969 años, el hombre más longevo de la Biblia (Génesis 5:27)."
        },
        {
            question: "¿Quién fue la primera mujer según la Biblia?",
            options: ["Eva", "Lilith", "Sarah", "María"],
            correct: 0,
            explanation: "Eva fue la primera mujer creada por Dios del lado de Adán (Génesis 2:22)."
        },
        {
            question: "¿Cuántos hijos tuvo Abraham?",
            options: ["Uno", "Dos", "Tres", "Cuatro"],
            correct: 1,
            explanation: "Abraham tuvo dos hijos: Ismael e Isaac (Génesis 16 y 21)."
        },
        {
            question: "¿Quién fue arrojado al foso de los leones?",
            options: ["Daniel", "Jonás", "José", "Sansón"],
            correct: 0,
            explanation: "Daniel fue arrojado al foso de los leones, pero Dios lo protegió (Daniel 6)."
        },
        {
            question: "¿Cuántos años duró el diluvio?",
            options: ["Cuarenta días", "Cien días", "Un año", "Tres años"],
            correct: 2,
            explanation: "El diluvio duró más de un año (Génesis 7:11 - 8:14)."
        },
        {
            question: "¿En qué libro aparece la historia de Sansón?",
            options: ["Jueces", "Samuel", "Reyes", "Crónicas"],
            correct: 0,
            explanation: "La historia de Sansón se narra en el libro de Jueces (Jueces 13-16)."
        },
        {
            question: "¿Cuántas veces negó Pedro a Jesús?",
            options: ["Una vez", "Dos veces", "Tres veces", "Cuatro veces"],
            correct: 2,
            explanation: "Pedro negó a Jesús tres veces antes de que cantara el gallo (Mateo 26:69-75)."
        },
        {
            question: "¿Quién fue el discípulo que traicionó a Jesús?",
            options: ["Judas Iscariote", "Simón Pedro", "Tomás", "Juan"],
            correct: 0,
            explanation: "Judas Iscariote traicionó a Jesús por treinta monedas de plata (Mateo 26:14-15)."
        },
        {
            question: "¿En cuántos días resucitó Jesús?",
            options: ["El mismo día", "Dos días", "Tres días", "Cuatro días"],
            correct: 2,
            explanation: "Jesús resucitó al tercer día después de su crucifixión (1 Corintios 15:4)."
        },
        {
            question: "¿Quién fue arrojado de una ventana en Damasco?",
            options: ["Pablo", "Pedro", "Juan", "Jacobo"],
            correct: 0,
            explanation: "Pablo fue arrojado de una ventana en una cesta para escapar (2 Corintios 11:33)."
        },
        {
            question: "¿Cuántos años tuvo Jesús cuando fue bautizado?",
            options: ["25", "30", "35", "40"],
            correct: 1,
            explanation: "Jesús tenía aproximadamente 30 años cuando fue bautizado (Lucas 3:23)."
        },
        {
            question: "¿En qué ciudad nació Jesús?",
            options: ["Nazaret", "Belén", "Jerusalén", "Capernaúm"],
            correct: 1,
            explanation: "Jesús nació en Belén, según Mateo 2:1 y Lucas 2:4-6."
        },
        {
            question: "¿Cuántos libros tiene el Antiguo Testamento?",
            options: ["27", "39", "46", "52"],
            correct: 1,
            explanation: "El Antiguo Testamento tiene 39 libros en la Biblia Reina Valera 1960."
        },
        {
            question: "¿Quién fue la reina que salvó a su pueblo?",
            options: ["Betsabé", "Ester", "Abigaíl", "Raquel"],
            correct: 1,
            explanation: "La reina Ester salvó a su pueblo judío del edicto de Asuero (Libro de Ester)."
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
            question: "¿Quién fue tragado por un gran pez?",
            options: ["Jonás", "Jeremías", "Eliseo", "Daniel"],
            correct: 0,
            explanation: "El profeta Jonás fue tragado por un gran pez y permaneció en su vientre tres días y tres noches (Jonás 1:17)."
        },
        {
            question: "¿Cuál es la oración que Jesús enseñó a sus discípulos?",
            options: ["Salmo 23", "Padrenuestro", "Gloria Patri", "Magnificat"],
            correct: 1,
            explanation: "Jesús enseñó el Padrenuestro como modelo de oración (Mateo 6:9-13)."
        },
        {
            question: "¿Cuántos libros tiene el Nuevo Testamento?",
            options: ["27", "39", "66", "30"],
            correct: 0,
            explanation: "El Nuevo Testamento tiene 27 libros en la Biblia Reina Valera 1960."
        },
        {
            question: "¿Quién fue elegido rey de Israel después de Saúl?",
            options: ["Salomón", "David", "Josué", "Roboam"],
            correct: 1,
            explanation: "David fue ungido como rey de Israel después de Saúl."
        },
        {
            question: "¿Quién era la madre de Juan el Bautista?",
            options: ["María", "Elisabet", "Marta", "Safira"],
            correct: 1,
            explanation: "Elisabet fue la madre de Juan el Bautista, pariente de María."
        },
        {
            question: "¿Cuántos años estuvo José en la cárcel de Potifar?",
            options: ["Dos años", "Cinco años", "Diez años", "Siete años"],
            correct: 0,
            explanation: "José estuvo aproximadamente dos años en la cárcel antes de ser liberado por el Faraón."
        },
        {
            question: "¿Cuál es el libro más corto del Nuevo Testamento?",
            options: ["3 Juan", "Filemón", "2 Juan", "Judas"],
            correct: 1,
            explanation: "La epístola a Filemón es el libro más corto del Nuevo Testamento con 25 versículos."
        },
        {
            question: "¿Quién fue convertido en sal por mirar atrás en Sodoma?",
            options: ["Abraham", "Lot", "La esposa de Lot", "Ismael"],
            correct: 2,
            explanation: "La esposa de Lot fue convertida en sal por mirar atrás cuando huyeron de Sodoma (Génesis 19:26)."
        },
        {
            question: "¿Cuántos hermanos tenía José en la Biblia?",
            options: ["10", "11", "12", "13"],
            correct: 1,
            explanation: "José tenía 11 hermanos, hijo menor de Jacob y Raquel."
        },
        {
            question: "¿Qué profeta fue arrojado en un hoyo de barro?",
            options: ["Jeremías", "Ezequiel", "Oseas", "Amós"],
            correct: 0,
            explanation: "Jeremías fue arrojado en un hoyo de barro por los príncipes de Judá (Jeremías 38:6)."
        },
        {
            question: "¿Cuántos años reina David sobre Israel?",
            options: ["20", "30", "40", "50"],
            correct: 2,
            explanation: "David reinó 40 años sobre Israel (2 Samuel 5:4)."
        },
        {
            question: "¿Quién fue la mujer que ungió los pies de Jesús con perfume?",
            options: ["María de Magdala", "María de Betania", "La adúltera", "Marta"],
            correct: 1,
            explanation: "María de Betania ungió los pies de Jesús con un perfume muy caro (Juan 12:3)."
        },
        {
            question: "¿Cuántos evangelios hay en el Nuevo Testamento?",
            options: ["Tres", "Cuatro", "Cinco", "Seis"],
            correct: 1,
            explanation: "Hay cuatro evangelios: Mateo, Marcos, Lucas y Juan."
        },
        {
            question: "¿Quién fue Zaqueo en la Biblia?",
            options: ["Un sacerdote", "Un cobrador de impuestos", "Un fariseo", "Un escriba"],
            correct: 1,
            explanation: "Zaqueo era un cobrador de impuestos que se convirtió al seguir a Jesús (Lucas 19:1-10)."
        },
        {
            question: "¿En qué ciudad fue crucificado Jesús?",
            options: ["Belén", "Jerusalén", "Nazaret", "Capernaúm"],
            correct: 1,
            explanation: "Jesús fue crucificado en Jerusalén en el Gólgota (Mateo 27:33-35)."
        },
        {
            question: "¿Quién fue Booz en la Biblia?",
            options: ["Un rey", "Un juez", "Un pariente redentor de Rut", "Un profeta"],
            correct: 2,
            explanation: "Booz fue un pariente redentor de Rut y se convirtió en su esposo (Libro de Rut)."
        },
        {
            question: "¿Cuántas veces levantó Lázaro después de morir?",
            options: ["Una vez", "Dos veces", "Tres veces", "Nunca más"],
            correct: 0,
            explanation: "Lázaro fue resucitado una vez por Jesús después de estar muerto cuatro días (Juan 11:1-44)."
        },
        {
            question: "¿Quién fue la primera mártir cristiana en Jerusalén?",
            options: ["Priscila", "Dorcas", "Lidia", "No se menciona nombre específico"],
            correct: 3,
            explanation: "Aunque Esteban fue el primer mártir cristiano varón, no hay especificación de una mujer primera."
        },
        {
            question: "¿Cuántos años Moisés guió a Israel en el desierto?",
            options: ["20", "30", "40", "50"],
            correct: 2,
            explanation: "Moisés guió a Israel 40 años en el desierto hasta la Tierra Prometida (Éxodo 16:35)."
        },
        {
            question: "¿Quién fue el sabio king más importante del Antiguo Testamento?",
            options: ["David", "Salomón", "Ezequías", "Josafat"],
            correct: 1,
            explanation: "Salomón fue conocido como el rey más sabio del Antiguo Testamento."
        },
        {
            question: "¿Cuántos años vivió Adán?",
            options: ["600", "800", "930", "1000"],
            correct: 2,
            explanation: "Adán vivió 930 años según Génesis 5:5."
        },
        {
            question: "¿En qué ciudad encontraron Jesús en el templo los padres?",
            options: ["Nazaret", "Belén", "Jerusalén", "Capernaúm"],
            correct: 2,
            explanation: "María y José encontraron a Jesús enseñando en el templo de Jerusalén a los 12 años (Lucas 2:42-46)."
        },
        {
            question: "¿Quién fue el padre terrenal de Jesús?",
            options: ["José", "Zacarías", "Simeón", "Herodes"],
            correct: 0,
            explanation: "José fue el padre terrenal adoptivo de Jesús (Mateo 1:16, Lucas 3:23)."
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
            question: "¿Qué profeta predijo setenta años de cautiverio en Babilonia?",
            options: ["Jeremías", "Isaías", "Oseas", "Amós"],
            correct: 0,
            explanation: "Jeremías predijo 70 años de cautiverio en Babilonia (Jeremías 25:11-12)."
        },
        {
            question: "¿Quién fue el primer mártir cristiano en el libro de Hechos?",
            options: ["Esteban", "Santiago", "Felipe", "Andrés"],
            correct: 0,
            explanation: "Esteban fue el primer mártir cristiano, apedreado en Hechos 7."
        },
        {
            question: "¿Qué significa INRI?",
            options: ["Jesús Nazareno Rey de los Judíos", "Jesús Nombre Rey Israel", "Justicia Nunca Rinde Israel", "Jesús Nazareno Reina Israelita"],
            correct: 0,
            explanation: "INRI significa 'Jesús Nazareno Rey de los Judíos' (Juan 19:19-20)."
        },
        {
            question: "¿Cuántas cartas atribuidas a Pablo hay en el Nuevo Testamento?",
            options: ["11", "13", "15", "10"],
            correct: 1,
            explanation: "Se atribuyen tradicionalmente 13 cartas a Pablo en el Nuevo Testamento."
        },
        {
            question: "¿Cuál fue la confesión de fe de Pedro en Mateo 16?",
            options: ["Creo en Dios Padre", "Eres el Cristo, Hijo del Dios viviente", "Seguiré al Mesías", "Creo en la resurrección"],
            correct: 1,
            explanation: "Pedro dijo: 'Tú eres el Cristo, el Hijo del Dios viviente' (Mateo 16:16)."
        },
        {
            question: "¿Cuántos años de tribulación menciona el Apocalipsis?",
            options: ["Tres años", "Siete años", "Diez años", "Mil años"],
            correct: 1,
            explanation: "El Apocalipsis menciona un período de siete años de tribulación."
        },
        {
            question: "¿Qué rey pidió sabiduría a Dios y escribió Proverbios?",
            options: ["David", "Salomón", "Ezequías", "Manasés"],
            correct: 1,
            explanation: "Salomón pidió sabiduría a Dios y escribió el libro de Proverbios."
        },
        {
            question: "¿Cuántos años estuvo cautivo Israel en Babilonia?",
            options: ["50", "70", "100", "120"],
            correct: 1,
            explanation: "Israel estuvo cautivo en Babilonia 70 años (Jeremías 25:11-12)."
        },
        {
            question: "¿Quién fue transformado en una estatua de sal?",
            options: ["Abraham", "Lot", "La esposa de Lot", "Ismael"],
            correct: 2,
            explanation: "La esposa de Lot fue transformada en sal por mirar hacia atrás (Génesis 19:26)."
        },
        {
            question: "¿Cuántos años estuvo Jonás en el vientre del pez?",
            options: ["Uno", "Dos", "Tres", "Cuatro"],
            correct: 2,
            explanation: "Jonás estuvo tres días y tres noches en el vientre del pez (Jonás 1:17)."
        },
        {
            question: "¿Cuántos libros escribió Pablo según la tradición?",
            options: ["10", "12", "13", "15"],
            correct: 2,
            explanation: "Se atribuyen 13 epístolas a Pablo en el Nuevo Testamento."
        },
        {
            question: "¿Quién fue el único que no murió según la Biblia?",
            options: ["Noé", "Elías", "Enoc", "Abraham"],
            correct: 2,
            explanation: "Enoc y Elías fueron arrebatados al cielo sin experimentar la muerte (Génesis 5:24, 2 Reyes 2:11)."
        },
        {
            question: "¿Cuál es el Salmo más corto?",
            options: ["Salmo 117", "Salmo 23", "Salmo 150", "Salmo 1"],
            correct: 0,
            explanation: "El Salmo 117 es el más corto de la Biblia con solo dos versículos."
        },
        {
            question: "¿Cuántas epístolas escribió Juan?",
            options: ["Una", "Dos", "Tres", "Cuatro"],
            correct: 2,
            explanation: "Se atribuyen tres epístolas a Juan: 1 Juan, 2 Juan y 3 Juan."
        },
        {
            question: "¿Quién fue el rey que hizo construir el templo de Jerusalén?",
            options: ["David", "Salomón", "Asa", "Ezequías"],
            correct: 1,
            explanation: "Salomón construyó el templo de Jerusalén (1 Reyes 6)."
        },
        {
            question: "¿Cuántos mandamientos tenían los fariseos?",
            options: ["613", "365", "248", "500"],
            correct: 0,
            explanation: "Los fariseos desarrollaron una tradición de 613 mandamientos."
        },
        {
            question: "¿Quién fue el único resucitado por una resurrección de entre los muertos en el Antiguo Testamento?",
            options: ["El hijo de la viuda de Sarepta", "El hijo de la sunamita", "Lázaro", "Tabita"],
            correct: 1,
            explanation: "El profeta Eliseo resucitó al hijo de la sunamita (2 Reyes 4:32-37)."
        },
        {
            question: "¿Cuál es el versículo del medio de la Biblia?",
            options: ["Salmo 118:8", "Proverbios 5:7", "Éxodo 12:37", "2 Crónicas 20:13"],
            correct: 0,
            explanation: "Salmo 118:8 es considerado el versículo del medio de la Biblia."
        },
        {
            question: "¿Cuántos hijos tuvo Jacob?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            explanation: "Jacob tuvo 12 hijos que fueron los patriarcas de las 12 tribus de Israel (Génesis 35:22-26)."
        },
        {
            question: "¿Quién escribió la mayoría de los Salmos?",
            options: ["Salomón", "David", "Moisés", "Asaf"],
            correct: 1,
            explanation: "David escribió la mayoría de los Salmos, aunque otros autores también contribuyeron."
        },
        {
            question: "¿Cuántos años tenía Abraham cuando nació Isaac?",
            options: ["80 años", "90 años", "100 años", "110 años"],
            correct: 2,
            explanation: "Abraham tenía 100 años cuando nació Isaac, hijo de la promesa (Génesis 21:5)."
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
