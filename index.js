function loadPage()
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
