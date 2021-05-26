import {UselessFactModel} from "./types.js";
import FactConfig from "./factConfig.js";


const factConfig = new FactConfig();

const randomFactBtn = document.getElementById("randomFactBtn") as HTMLButtonElement;
const dailyFactBtn = document.getElementById("dailyFactBtn") as HTMLButtonElement;
const reloadBtn = document.getElementById("reloadBtn") as HTMLButtonElement;
const enFactBtn = document.getElementById("enFactBtn") as HTMLButtonElement;
const deFactBtn = document.getElementById("deFactBtn") as HTMLButtonElement;
const factSpan = document.getElementById("fact") as HTMLElement;
const factLink = document.getElementById("factSrc") as HTMLAnchorElement;

function onButtonClick(action: () => void) {
	return (e: MouseEvent) => {
		const clickedButton = e.currentTarget as HTMLElement;
		if (clickedButton.classList.contains("selected"))
			return;
		const currentlySelected = clickedButton.parentElement.getElementsByClassName("selected")[0];
		currentlySelected.classList.remove("selected");
		clickedButton.classList.add("selected");
		action();
		fetchAndShowFact();
	}
}

randomFactBtn.addEventListener("click", onButtonClick(
	() => factConfig.setType("random")));
dailyFactBtn.addEventListener("click", onButtonClick(
	() => factConfig.setType("today")));
enFactBtn.addEventListener("click", onButtonClick(
	() => factConfig.setLanguage("en")));
deFactBtn.addEventListener("click", onButtonClick(
	() => factConfig.setLanguage("de")));
reloadBtn.addEventListener("click", fetchAndShowFact);

async function fetchAndShowFact() {
	const factData = await factConfig.fetchFact();
	displayFact(factData);
}
window.addEventListener("load", fetchAndShowFact);

function displayFact(factData: UselessFactModel) {
	factSpan.innerText = factData.text;
	factLink.innerText = factData.source;
	factLink.href = factData.source_url;
}
