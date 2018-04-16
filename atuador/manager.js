
const mqtt = require("mqtt");
let client = mqtt.connect("ws://localhost:9001");

let temperatura, arState;

client
    .on("connect", () => {
        client.subscribe("sensor/temperatura");
        // client.subscribe("sensor/light");
        // client.subscribe("sensor/light-manager");
        client.subscribe("sensor/ar");
        // client.subscribe("sensor/ar-manager");
    })
    .on("message", (topic, payload) => {
        if (topic == "sensor/temperatura") {
            temperatura = parseInt(payload);
            console.log("Temperatura: " + payload);
        } else if (topic == "sensor/ar"){
            arState = parseInt(payload);
            console.log("Ar : " + payload);
        }
    });

// Exports
module.exports.getTemperatura = () => {
    return temperatura;
}

module.exports.ligarArCondicionado = () => {
    if (! arState) {
        console.log("Ligando ar condicionado!");
        client.publish("sensor/ar-manager", "ligar");
        return "Ar condicionado está sendo ligado!"
    }
    return "Ar condicionado já estava ligado!"
}

module.exports.desligarArCondicionado = () => {
    if (arState) {
        console.log("Desligando ar-condicionado!");
        client.publish("sensor/ar-manager", "desligar");
        return "Ar condicionado está sendo desligado!"
    }
    return "Ar condicionado já estava desligado!"
}

module.exports.statusArCondicionado = () => {
    if (! arState) {
        return "Desligado!";
    }
    return "Ligado";
}

// // lamp
// let lightState;
// const lampState = mqtt.connect("ws://localhost:1883");
// const lampManager = mqtt.connect("ws://localhost:1883");

// // Subscriber lamp
// lampState.on("connect", () => {
//     lampState.subscribe("sensor/light");
// })
// .on("message", (topic, payload) => {
//     lightState = new Boolean(payload);
// });

// // Modify lamp state
// // lampManager.on("connect", () => {
// //     console.log("Connected in light state");
// // });

// const setLamp = (state) => {
//     lightState = state;
//     lampManager.publish("sensor/light-manager", lightState);
// };

// // ar
// let arOn;
// const arState = mqtt.connect("ws://localhost:1883");
// const arManager = mqtt.connect("ws://localhost:1883");

// // Subscribe
// arState.on("connect", () => {
//     arState.subscribe("sensor/ar");
// })
// .on("message", (topic, payload) => {
//     arOn = new Boolean(payload);
// });

// // Manager
// arManager.on("connect", () => {
//     console.log("connected from ar manager");
// });

// const setAr = (state) => {
//     arOn = state;
//     arManager.publish("sensor/ar-manager", arOn);
// };

// module.exports = {
//     getTemp = temp,
//     getLamp = lightState,
//     setLamp = setLamp,
//     getAr = arOn,
//     setAr = setAr
// };
