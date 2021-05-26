import FactConfig from "./factConfig.js";
const factConfig = new FactConfig();
const randomFactBtn = document.getElementById("randomFactBtn");
const dailyFactBtn = document.getElementById("dailyFactBtn");
const reloadBtn = document.getElementById("reloadBtn");
const enFactBtn = document.getElementById("enFactBtn");
const deFactBtn = document.getElementById("deFactBtn");
const factSpan = document.getElementById("fact");
const factLink = document.getElementById("factSrc");
function onButtonClick(action) {
    return (e) => {
        const clickedButton = e.currentTarget;
        if (clickedButton.classList.contains("selected"))
            return;
        const currentlySelected = clickedButton.parentElement.getElementsByClassName("selected")[0];
        currentlySelected.classList.remove("selected");
        clickedButton.classList.add("selected");
        action();
        fetchAndShowFact();
    };
}
randomFactBtn.addEventListener("click", onButtonClick(() => factConfig.setType("random")));
dailyFactBtn.addEventListener("click", onButtonClick(() => factConfig.setType("today")));
enFactBtn.addEventListener("click", onButtonClick(() => factConfig.setLanguage("en")));
deFactBtn.addEventListener("click", onButtonClick(() => factConfig.setLanguage("de")));
reloadBtn.addEventListener("click", fetchAndShowFact);
async function fetchAndShowFact() {
    const factData = await factConfig.fetchFact();
    displayFact(factData);
}
window.addEventListener("load", fetchAndShowFact);
function displayFact(factData) {
    factSpan.innerText = factData.text;
    factLink.innerText = factData.source;
    factLink.href = factData.source_url;
}
//# sourceMappingURL=main.js.map