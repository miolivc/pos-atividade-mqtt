
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

    .put("/ar-condicionado/ligar", (req, resp) => {
        resp.json({'status': manager.ligarArCondicionado()});    
    })

    .put("/ar-condicionado/desligar", (req, resp) => {
        resp.json({'status': manager.desligarArCondicionado()});    
    })

    .listen(3000, ()=> {
        console.log("App running!");
    });