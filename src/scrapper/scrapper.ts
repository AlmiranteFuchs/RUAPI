export class Scrapper {
    public static async get(url: string): Promise<string> {
        const response = await fetch(url);
        const body = await response.text();
        return body;
    }
}

// Enum for the different restaurants we can scrape
export enum Restaurant {
    "Polytecnico" = "polytecnico",
    "Reitoria" = "reitoria",
    "Agrárias" = "agricolas",
    "Botânico" = "botanico",
}