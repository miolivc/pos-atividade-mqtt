
const manager = require("./manager");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// const router = express.router();

app.use(bodyParser.json());

app.get("/temp", (req, resp) => {
    let temp = manager.getTemperatura();
    resp.json({'temperatura': temp});
});

// router.get("/lamp", (req, resp) => {
//     let lamp = manager.getLamp;
//     resp.json({'lampada': lamp});
// });

// router.put("/lamp", (req, resp) => {
//     let state = req.
//     manager.setLamp(state);
// });

app.listen(3000, ()=> {
    console.log("App running!");
});