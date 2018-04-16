
const mqtt = require("mqtt");
let client = mqtt.connect("ws://localhost:9001"); // Broke ports: 9001, 1883
// const subscriber = mqtt.connect("ws://localhost:1883"); 
let arState = false;

// Publisher

client.on("connect", () => {
    console.log("Connected to MQTT Broker: ar-condicionado");
    client.subscribe("sensor/ar-manager");
});

client.on("message", (topic, payload) => {
    arState = new Boolean("topic " + topic + ": " + payload);
});

const sendLightState = () => {
    client.publish("sensor/ar", arState);  
    console.log("Publishing state: " + arState);
};

setInterval(sendLightState, 10000); 

// Subscriber
// subscriber.on("connect", () => {
//     subscriber.subscribe("sensor/ar-manager");
// });

// client.on("message", (topic, payload) => {
//     arState = new Boolean("topic " + topic + ": " + payload);
// })