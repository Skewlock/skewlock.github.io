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
        "/story/pages/storyIntro.html"
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
    window.location = "/story/pages/storyIntro.html";
}

function replaceText(text, variables)
{
    let finalText;
    let pattern;
    for (const [key, value] of Object.entries(variables))
    {
        pattern = "%{" + key + "}";
        finalText = text.replaceAll(pattern, value);
    }
    return finalText;
}

function loadTextContent()
{
    let vars = {
        "playerName": localStorage.getItem("playerName")
    }
    let element = document.querySelector("p.story");
    let txt = element.innerText;
    let finalText = replaceText(txt, vars);
    element.innerText = finalText;
}

async function steampunkClicked()
{
    let buttons = document.querySelector(".inputBlock1");
    let nameInput = document.querySelector(".inputBlock2");
    let welcomeMsg = document.querySelector("#welcomeMsg");
    let stylesheet = document.querySelector("#style");

    localStorage.setItem("storyChoice", "steampunk");
    await sleep(1000);
    stylesheet.href = "steampunk.css";
    buttons.classList.add("invisible");
    welcomeMsg.classList.add("invisible");
    nameInput.classList.remove("invisible");
}

async function cyberpunkClicked()
{
    let buttons = document.querySelector(".inputBlock1");
    let nameInput = document.querySelector(".inputBlock2");
    let welcomeMsg = document.querySelector("#welcomeMsg");
    let stylesheet = document.querySelector("#style"); 


    localStorage.setItem("storyChoice", "cyberpunk");
    document.body.classList.toggle('shutdown');
    await sleep(700);
    document.body.classList.toggle('shutdown');
    stylesheet.href = "cyberpunk.css";
    buttons.classList.add("invisible");
    welcomeMsg.innerText = "Bien, maintenant identifiez vous Agent."
    nameInput.classList.remove("invisible");
    document.body.classList.toggle('unshut');
    await sleep(700);
    document.body.classList.toggle('unshut');
}