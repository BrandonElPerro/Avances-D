import random
import time

attackPlayer = None
attackEnemy = None
healthPlayer = 3
healthEnemy = 3

wins = 0
loses = 0
    
while True:
    num = random.randrange(1, 3)

    print("1 para PIEDRA, 2 para PAPEL y 3 para TIJERA")
    chose = int(input("Elige una opcion: "))

    #Eleccion del jugador

    if chose == 1:
        attackPlayer = "Piedra"
    elif chose == 2:
        attackPlayer = "Papel"
    elif chose == 3:
        attackPlayer = "Tijera"
    else:
        print("Elige un ataque por favor!")
        break

    if chose == 1 or chose == 2 or chose == 3:
        print(f"Elegiste: {attackPlayer}")

    #Eleccion del enemigo / bot

    if num == 1:
        attackEnemy = "Piedra"
    elif num == 2:
        attackEnemy = "Papel"
    else:
        attackEnemy = "Tijera"
        
    if num == 1 or num == 2 or num == 3:
        print(f"El enemigo ataco con {attackEnemy}")

    time.sleep(1.5)

    #Combate

    if attackPlayer == attackEnemy:
        print("Empataste! :o")
    elif attackPlayer == "Piedra" and attackEnemy == "Tijera":
        healthEnemy -= 1
        wins += 1
        print(f"Ganaste! :D / El enemigo esta en {healthEnemy} vidas")
    elif attackPlayer == "Papel" and attackEnemy == "Piedra":
        healthEnemy -= 1
        wins += 1
        print(f"Ganaste! :) / El enemigo esta en {healthEnemy} vidas")
    elif attackPlayer == "Tijera" and attackEnemy == "Papel":
        healthEnemy -= 1
        wins += 1
        print(f"Ganaste! :3 / El enemigo esta en {healthEnemy} vidas")
    else:
        healthPlayer -= 1
        loses += 1
        print(f"Perdiste! D: / Ahora tienes {healthPlayer} vidas")

    #Revision de vidas

    if healthEnemy == 0:
        print("Ganaste la partida campeón! >:D")
    elif healthPlayer == 0:
        print("Perdiste, pero tendra suerte para la proxima! :D")
        
    if healthPlayer == 0 or healthEnemy == 0:
        print(f"Ganaste: {wins} veces y perdiste: {loses} veces")
        time.sleep(1)
        break