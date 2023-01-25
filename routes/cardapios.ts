import express from "express";
import { RestaurantLink, Scrapper } from "../src/scrapper/scrapper";

const router = express.Router();

router.get('/poli', async (req, res) => {
    let data = await Scrapper.get(RestaurantLink.Politecnico);
    
    // data to json
    let json = JSON.stringify(data); 

    // json to response
    res.send(json);
});

router.get('/reitoria', async (req, res) => {
    let data = await Scrapper.get(RestaurantLink.Reitoria);
    
    // data to json
    let json = JSON.stringify(data); 

    // json to response
    res.send(json);
});

router.get('/agrarias', async (req, res) => {
    let data = await Scrapper.get(RestaurantLink.Agrárias);
    
    // data to json
    let json = JSON.stringify(data); 

    // json to response
    res.send(json);
});

router.get('/botanico', async (req, res) => {
    let data = await Scrapper.get(RestaurantLink.Botânico);
    
    // data to json
    let json = JSON.stringify(data); 

    // json to response
    res.send(json);
});


export default router;
    