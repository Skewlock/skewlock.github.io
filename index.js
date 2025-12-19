<<<<<<< HEAD
var quotes = [
    "Point Gratuit Félicitation !",
    "Christophe arrive en retard",
    "Une PRD Exceptionnelle est mentionnée",
    "Yollande a besoin de plus d'explications sur un sujet",
    "Mélanie demande à écourter un sujet qui s'éternise par manque de temps",
    "Plus de 5 personnes sont absentes (alors que la présence est obligatoire)",
    "Une discussion s'éternise sur une PRD",
    "Le nom complet Sopra Steria est mentionné",
    "Carole est absente de la réunion",
    "Le ton monte entre deux personnes",
    "La démat est en panne",
    "Un débat inutile sur un sujet niche occupe une partie majeure de la réunion",
    "L'INRAE pose (encore) problème",
    "Le tableau en arrière plan est enfin utilisé (c'est une belle déco hein ?)",
    "Quelqu'un ammène des viennoiseries le matin",
    "La personne qui prend des notes n'en avait pas envie du tout",
    "Presque tout le monde est sur son téléphone (toi aussi qui fait ce bingo)",
    "Tu devrais prendre les notes et tu remplis ce bingo à la place (on t'en veut pas)",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26"
]

var bingoSize = 5;
grid_state = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];


function changedBingo(element)
=======
function loadPage()
>>>>>>> 8660e6f (idk man)
{
    if (!localStorage.getItem("playerName"))
    {
        initGame();
    }
    else
    {
        loadGame();
    }
}

<<<<<<< HEAD
    let tickedCases = document.getElementById("cases");
    tickedCases.innerHTML = "cases cochées: " + countTicked(grid_state) + "/" + parseInt(bingoSize * bingoSize);
}
=======
function initGame()
{
    window.location = "welcomePage.html";
}

function loadGame()
{
    console.log("loading")
    pages = [
        "story/pages/storyIntro.html"
    ];
    let lvl = parseInt(localStorage.getItem("playerLvl"));
    window.location = pages[lvl];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function validateName()
{
    let name = document.getElementById("nameInput").value;
    localStorage.setItem("playerName", name);
    localStorage.setItem("playerLvl", 0);
    document.body.classList.toggle('shutdown');
    await sleep(1000);
    window.location = "story/pages/storyIntro.html";
}
>>>>>>> 8660e6f (idk man)
