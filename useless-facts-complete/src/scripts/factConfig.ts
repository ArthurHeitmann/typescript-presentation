import {factLanguage, factType, UselessFactModel} from "./types.js";

export default class FactConfig {
	private type: factType;
	private language: factLanguage;

	constructor() {
		this.type = "random";
		this.language = "en";
	}

	setType(type: factType) {
		this.type = type;
	}

	setLanguage(language: factLanguage) {
		this.language = language;
	}

	async fetchFact(): Promise<UselessFactModel> {
		const fetchUrl = `https://uselessfacts.jsph.pl/${this.type}.json?language=${this.language}`;
		const request = await fetch(fetchUrl);
		return await request.json();
	}
}
