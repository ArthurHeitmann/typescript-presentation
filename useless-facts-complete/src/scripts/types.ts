export type factLanguage = "en" | "de";
export type factType = "random" | "today";

export interface UselessFactModel {
	id: string,
	text: string,
	source: string,
	source_url: string,
	language: factLanguage,
	permalink: string
}
