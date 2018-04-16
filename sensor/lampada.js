
const mqtt = require("mqtt");
const publisher = mqtt.connect("ws://localhost:1883"); // Broke ports: 9001, 1883
const subscriber = mqtt.connect("ws://localhost:1883"); // Broke ports: 9001, 1883
let lightState = false; // Light

// Publisher

publisher.on("connect", () => {
    console.log("Connected to MQTT Broker");
});

const sendLightState = () => {
    publisher.publish("sensor/light", lightState); // Send value for Broker 
    console.log("Publishing light state: " + lightState); // Information Log about the temperature
};

setInterval(sendLightState, 10000); // Execute on interval of 10sec

// Subscriber
subscriber.on("connect", () => {
    subscriber.subscribe("sensor/light-manager");
});

subscriber.on("message", (topic, payload) => {
    lightState = new Boolean(payload);  // Set value from lightState
});