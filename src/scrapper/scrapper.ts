import { Refeicao, TipoRefeicao } from "../model/refeicao";
import axios from "axios";
import cherio from "cheerio";

// I suck balls at scraping. if you see this, implement interfaces for object building and work on this scraping.
export class Scrapper {
    public static async get(restaurant: RestaurantLink): Promise<Refeicao> {

        const url = restaurant;
        const axiosInstance = axios.create();

        axiosInstance.get(url).then((response) => {
            const html = response.data;
            const $ = cherio.load(html);

            // Get the first table of the content
            const today_table = $("table").first();
            // Get the second table of the content
            const tomorrow_table = $("table").eq(1);

            console.log(today_table.text());
            

        });

        return new Refeicao(TipoRefeicao.Almoço, []);
    }

}


// Enum for the links of the restaurants
export enum RestaurantLink {
    "Politecnico" = "https://pra.ufpr.br/ru/ru-centro-politecnico/",
    "Reitoria" = "https://pra.ufpr.br/ru/ru-central/",
    "Agrárias" = "https://pra.ufpr.br/ru/cardapio-ru-agrarias/",
    "Botânico" = "https://pra.ufpr.br/ru/cardapio-ru-jardim-botanico/",
}