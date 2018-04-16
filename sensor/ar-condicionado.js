
const mqtt = require("mqtt");
const publisher = mqtt.connect("ws://localhost:1883"); // Broke ports: 9001, 1883
const subscriber = mqtt.connect("ws://localhost:1883"); 
let arState = false;

// Publisher

publisher.on("connect", () => {
    console.log("Connected to MQTT Broker: ar-condicionado");
});

const sendLightState = () => {
    publisher.publish("sensor/ar", arState);  
    console.log("Publishing state: " + arState);
};

setInterval(sendLightState, 10000); 

// Subscriber
subscriber.on("connect", () => {
    subscriber.subscribe("sensor/ar-manager");
});

subscriber.on("message", (topic, payload) => {
    arState = new Boolean(payload);
});