# Création du Dockerfile :  

![Image n°1](image/1.png)

# Création des fichiers :

index.html :  

![Image n°2](image/2.png)

save.php :

![Image n°3](image/3.png)

results.php :

![Image n°4](image/4.png)


# Construction de l'image :

```
docker build -t tic-tac-toe .
```

![Image n°5](image/5.png)


# Construction du volume :

```
docker volume create game-results
```

![Image n°6](image/6.png)


# Exécution du conteneur avec le volume :

```
docker run -d -p 8080:80 --name tictactoe-game -v game-results:/app/results tic-tac-toe
```

-v game-results:/app/results → Monte un volume game-results sur /app/results dans le conteneur.

![Image n°7](image/7.png)

# Résultat :

localhost:8080 :  

![Image n°8](image/8.png)
