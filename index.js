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
{
    let val = parseInt(element.value);
    if (val > 5)
        return;
    bingoSize = val;
    generateBingo();
}


function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


function generateBingo()
{
    shuffle(quotes);
    let grid = document.getElementById("bingo-grid");
    resetGrid();
    let row = "";
    let table = "";
    for (let i = 0; i < bingoSize; i++)
    {
        table += "<tr>\n";
        row = "";
        for (let j = 0; j < bingoSize; j++)
        {
            row += "<td id=\"" + parseInt((parseInt(i) * bingoSize) + parseInt(j)) +"\" onclick=\"tileClicked(this);\">";
            row += quotes[i * bingoSize + j];
            row += "</td>";
        }
        table += row;
        table += "\n</tr>";
    }
    grid.innerHTML = table;
}

function resetGrid()
{
    for (let i = 0; i < grid_state.length; i++)
        grid_state[i] = false;
    document.getElementById("cases").innerHTML = "cases cochées: 0/" + parseInt(bingoSize * bingoSize);
}

function countTicked(state)
{
    let count = 0;
    for (let i = 0; i < state.length; i++)
    {
        if (state[i])
            count++;
    }
    return count;
}

function tileClicked(element)
{
    let state = grid_state[parseInt(element.id)];
    if (state)
        element.classList.remove("ticked");
    else
        element.classList.add("ticked");
    grid_state[parseInt(element.id)] = !state;

    let tickedCases = document.getElementById("cases");
    tickedCases.innerHTML = "cases cochées: " + countTicked(grid_state) + "/" + parseInt(bingoSize * bingoSize);
}
