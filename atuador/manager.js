
const mqtt = require("mqtt");
let client = mqtt.connect("ws://localhost:9001");
// let client = mqtt.connect("ws://host-broker:9001");

let temperatura, arState, lightState;

client
    .on("connect", () => {
        client.subscribe("sensor/temperatura");
        client.subscribe("sensor/light");
        client.subscribe("sensor/ar");
    })
    .on("message", (topic, payload) => {
        if (topic == "sensor/temperatura") {
            temperatura = parseInt(payload);
            console.log("Temperatura: " + payload);

        } else if (topic == "sensor/ar"){
            arState = parseInt(payload);
            console.log("Ar : " + payload);
            
        } else if (topic == "sensor/light") {
            lightState = parseInt(payload);
        }
    });

// Exports Temperatura
module.exports.getTemperatura = () => {
    return temperatura;
}

// Exports Ar
module.exports.ligarArCondicionado = () => {
    if (! arState) {
        console.log("Ligando ar condicionado!");
        client.publish("sensor/ar-manager", "ligar");
        return "Ar condicionado está sendo ligado!";
    }
    return "Ar condicionado já estava ligado!";
}

module.exports.desligarArCondicionado = () => {
    if (arState) {
        console.log("Desligando ar-condicionado!");
        client.publish("sensor/ar-manager", "desligar");
        return "Ar condicionado está sendo desligado!";
    }
    return "Ar condicionado já estava desligado!";
}

module.exports.statusArCondicionado = () => {
    if (! arState) {
        return "Ar-condicionado Desligado!";
    }
    return "Ar-condicionado Ligado!";
}

module.exports.statusArCondicionadoBin = () => {
    if (! arState)
        return "0";
    return "1";
}

//Exports lampada
module.exports.ligarLuz = () => {
    if (! lightState) {
        console.log("Ligando luz!");
        client.publish("sensor/light-manager", "ligar");
        return "A luz está sendo ligada!";
    }
    return "A luz já estava ligada!";
}

module.exports.desligarLuz = () => {
    if (lightState) {
        console.log("Desligando luz!");
        client.publish("sensor/light-manager", "desligar");
        return "A luz está sendo desligada!";
    }
    return "A luz já estava desligada!";
}

module.exports.statusLuz = () => {
    if (! lightState) {
        return "Lampada desligada!";
    }
    return "Lampada ligada!";
}

module.exports.statusLuzBin = () => {
    if (! lightState)
        return "0";
    return "1";
}
