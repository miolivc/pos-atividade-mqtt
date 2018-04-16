
const mqtt = require("mqtt");
let client = mqtt.connect("ws://localhost:9001"); // Broke ports: 9001, 1883

let enviar = false;

client
    .on("connect", () => {
        console.log("Connected to MQTT Broker: ar-condicionado");
        client.subscribe("sensor/ar-manager");
    })
    .on("message", (topic, payload) => {
        let state = new String(payload);
        console.log("Recendo nova informação... " + payload);

        if ('ligar' == state) {
            enviar = true;
        } else if('desligar' == state) {
            client.publish("sensor/ar", "0");
            enviar = false;
        }
    });

const sendLightState = () => {
    if(enviar) {
        client.publish("sensor/ar", "1");  
        console.log("Publishing state: ligado");
    }
};

setInterval(sendLightState, 1000);