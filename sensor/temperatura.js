
const mqtt = require("mqtt");
let client = mqtt.connect("ws://localhost:9001"); // Broke ports: 9001, 1883

client.on("connect", () => {
    console.log("Connected to MQTT Broker");
});

const getTemp = () => {
    return '' + Math.floor(Math.random() * 50); // Generate ficticious temperature with max value 50
};

const sendTemp = () => {
    let value = getTemp();
    client.publish("sensor/temperatura", value); // Send value for Broker 
    console.log("Publishing Temp: " + value); // Information Log about the temperature
};

setInterval(sendTemp, 3000); // Execute on interval of 3sec