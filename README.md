# Atividade de POS: mqtt

### 1. Executando localmente:
**1.1. Para ativar o broker:**  
    - `docker pull toke/mosquitto`  
    - `docker run -p 1883:1883 -p 9001:9001 -d --name broker toke/mosquitto`  
    -  `broker toke/mosquitto`  
**1.2. Para executar os sensores:**
    - `npm install`  
    - `node temperatura.js`  
    - `node lampada.js`  
    - `node ar-condicionado.js`  
**1.3. Para executar a REST API:**  
    - `npm install`  
    - `node temperatura.js`  
**1.4. Para Executar o cliente:**  
    - Linux: `python3 main.py`  
    - MacOS X: `brew install python3 && python3 main.py`
 
