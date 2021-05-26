export default class FactConfig {
    constructor() {
        this.type = "random";
        this.language = "en";
    }
    setType(type) {
        this.type = type;
    }
    setLanguage(language) {
        this.language = language;
    }
    async fetchFact() {
        const fetchUrl = `https://uselessfacts.jsph.pl/${this.type}.json?language=${this.language}`;
        const request = await fetch(fetchUrl);
        return await request.json();
    }
}
//# sourceMappingURL=factConfig.js.map