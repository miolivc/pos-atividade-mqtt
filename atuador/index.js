
const manager = require("./manager");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app
    .use(bodyParser.json())

    .get("/temperatura", (req, resp) => {
        resp.json({'temperatura': manager.getTemperatura()});
    })

    .get("/ar-condicionado", (req, resp) => {
        resp.json({'status': manager.statusArCondicionado()});    
    })

    .get("/ar-condicionado/bin", (req, resp) => {
        resp.json({'status': manager.statusArCondicionadoBin()});    
    })

    .put("/ar-condicionado/ligar", (req, resp) => {
        resp.json({'status': manager.ligarArCondicionado()});    
    })

    .put("/ar-condicionado/desligar", (req, resp) => {
        resp.json({'status': manager.desligarArCondicionado()});    
    })

    .get("/lampada", (req, resp) => {
        resp.json({'status': manager.statusLuz()});    
    })

    .get("/lampada/bin", (req, resp) => {
        resp.json({'status': manager.statusLuzBin()});    
    })

    .put("/lampada/ligar", (req, resp) => {
        resp.json({'status': manager.ligarLuz()});    
    })

    .put("/lampada/desligar", (req, resp) => {
        resp.json({'status': manager.desligarLuz()});    
    })

    .listen(3000, ()=> {
        console.log("App running!");
    });