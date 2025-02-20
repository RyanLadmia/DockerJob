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
docker run -d -p 8080:80 -v game-results:/usr/share/nginx/html --name tictactoe-game tic-tac-toe
```

-v game-results:/app/results → Monte un volume game-results sur /app/results dans le conteneur.

![Image n°7](image/7.png)

# Résultat :

localhost:8080 :  

![Image n°8](image/8.png)

# Vérifier la création du volume :

```
docker volume ls
```
Lister tous les volumes Docker disponibles sur le système.

![Image n°9](image/9.png)


# Inspecter le conteneur : 
```
docker exec -it tictactoe-game ls -l
```

![Image n°13](image/13.png)



# Inspecter le volume :

```
 docker volume inspect game-results
```
Cette commande affiche les détails du volume nommé game-results, notamment :  
Son chemin sur l'hôte (Mountpoint)  
Son ID unique  
Son utilisation par les conteneurs  
Son driver de stockage
 

![Image n°10](image/10.png)



# Lister les fichiers du conteneurs :

```
docker exec -it tictactoe-game ls /usr/share/nginx/html
```
Lister les fichiers dans /usr/share/nginx/html à l'intérieur du conteneur.

![Image n°11](image/11.png)



# Afficher les résultats :

```
docker exec -it tictactoe-game cat /usr/share/nginx/html/results.json
```
 Afficher le contenu du fichier results.json dans le conteneur.  

![Image n°12](image/12.png)


# Arrêter le conteneur :

```
docker stop <id_du_conteneur>
```

![Image n°14](image/14.png)
