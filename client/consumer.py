#   !/usr/bin/python3
#   -*- coding: utf-8 -*-

import requests

baseUrl = "http://localhost:3000"

#   Temperatura
def getTemperatura():
    response = requests.get(baseUrl + "/temperatura")
    return response.json()["temperatura"]

#   Ar-condicionado
def getStatusAr():
    # response = requests.get(baseUrl + "/ar-condicionado/bin") int answer
    response = requests.get(baseUrl + "/ar-condicionado")
    return response.json()["status"]

def ligarAr():
    response = requests.put(baseUrl + "/lampada/ligar")
    return response.json()["status"]

def desligarAr():
    response = requests.put(baseUrl + "/lampada/desligar")
    return response.json()["status"]

#   Lampada
def getStatusLuz():
    # response = requests.get(baseUrl + "/lampada/bin")
    response = requests.get(baseUrl + "/lampada")
    return response.json()["status"]

def ligarLuz():
    response = requests.put(baseUrl + "/lampada/ligar")
    return response.json()["status"]

def desligarLuz():
    response = requests.put(baseUrl + "/lampada/desligar")
    return response.json()["status"]

# print("Temperatura: {0} Lampada: {1} Ar: {2} \
# ".format(getTemperatura(), getStatusLuz(), getStatusAr()))