#   !/usr/bin/python3
#   -*- coding: utf-8 -*-

import consumer

def ligarDesligarAr():
    opt = int(input(" => 1) Ligar Ar-condicionado \
     \n => 2) Desligar Ar-Condicionado \n => 3) Status \n => 0) Sair \n :"))
    if opt == 0:
        return
    elif opt == 1:
        print("\n==> Ar-condicionado: {0}\n\n".format(consumer.ligarAr()))
    elif opt == 2:
        print("\n==> Ar-condicionado: {0}\n\n".format(consumer.desligarAr()))
    elif opt == 3:
        print("\n==> {0}\n\n".format(consumer.getStatusAr()))
    else:
        print("Opção digitada é inexistente! \
        \n Voltando ao menu principal...\n\n")

def ligarDesligarLuz():
    opt = int(input(" => 1) Ligar Lampada \n => 2) Desligar Lampada \
     \n => 3) Status \n => 0) Sair \n :"))
    if opt == 0:
        return
    elif opt == 1:
        print("\n==> Lampada: {0}\n\n".format(consumer.ligarLuz()))
    elif opt == 2:
        print("\n==> Lampada: {0}\n\n".format(consumer.desligarLuz()))
    elif opt == 3:
        print("\n==> {0}\n\n".format(consumer.getStatusLuz()))
    else:
        print("Opção digitada é inexistente!\
         \n Voltando ao menu principal... \n\n")

#   Main
while True:
    opcao = int(input("Bem-vindo a casa inteligente!\
        \n Opções: \n 1) Ver Temperatura \n 2) Ligar/Desligar Ar-condicionado\
        \n 3) Ligar/Desligar Lâmpada \n 0) Sair \n :"))
    if opcao == 0:
        exit()
    elif opcao == 1:
        print("==> A temperatura na casa é de {0}º \n\n".format(consumer.getTemperatura()))
    elif opcao == 2:
        ligarDesligarAr()
    elif opcao == 3:
        ligarDesligarLuz()
    else:
        print("Opção não está presente no menu... tente novamente!\n")