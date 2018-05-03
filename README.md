# Desenvolvimento com MQTT

### Observação:  
Os arquivos na pasta *sensor* são simuladores de componentes que enviam informações ao broker mqtt, o atuador e REST API encontram-se na pasta *atuador* e a aplicação cliente que faz o controle dos dispositivos encontra-se na pasta *client*.  

### Requerimentos: 
    -  docker; npm; node; python3; python3-pip 

### 1. Executando as aplicações:  
    
**1.1. Para ativar o broker:**  
    - `docker pull toke/mosquitto`  
    - `docker run -p 1883:1883 -p 9001:9001 -d --name broker toke/mosquitto`   
      
**1.2. Para executar os sensores:**  
    - `npm install`  
    - `node temperatura.js`  
    - `node lampada.js`  
    - `node ar-condicionado.js`  
      
**1.3. Para executar a REST API:**  
    - `npm install && npm start`  
      
**1.4. Para Executar o cliente:**  
    -  `pip3 install requests && python3 main.py`  
 
