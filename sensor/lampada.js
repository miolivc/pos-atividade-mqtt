
const mqtt = require("mqtt");
let client = mqtt.connect("ws://localhost:9001"); // Broke ports: 9001, 1883
// const subscriber = mqtt.connect("ws://localhost:1883"); // Broke ports: 9001, 1883
let lightState = false; // Light

// Publisher

client.on("connect", () => {
    console.log("Connected to MQTT Broker");
    client.subscribe("sensor/light-manager");
});

const sendLightState = () => {
    client.publish("sensor/light", lightState); // Send value for Broker 
    console.log("Publishing light state: " + lightState); // Information Log about the temperature
};

setInterval(sendLightState, 10000); // Execute on interval of 10sec

// // Subscriber
// subscriber.on("connect", () => {
//     subscriber.subscribe("sensor/light-manager");
// });

client.on("message", (topic, payload) => {
    lightState = new Boolean("topic:", payload);  // Set value from lightState
});