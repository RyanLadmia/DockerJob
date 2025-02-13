# Terminal de Docker Desktop :

![Image n°1](image/1.png)

# Chercher une image dans Docker Desktop :

![Image n°2](image/2.png)

# Pull une image sur Docker Desktop :

![Image n°3](image/3.png)

# Ajout de l'image dans la liste :

![Image n°4](image/4.png)

# Lancer un conteneur :  

assignez lui le port 8600 en considérant que l’image est configuré sur le port 8080 et en conservant l'accès à l’invite de commande :  

- Méthode n°1 :
```
docker run -it -p 8600:8080 pengbai/docker-supermario
```  
Pour que le conteneur tourne en arrière plan :
```
docker run -d -p 8600:8080 pengbai/docker-supermario
```

![Image n°5](image/5.png)

Le résultat se trouve à localhost:8600 :

![Image n°6](image/6.png)


- Méthode n°2 :  

Lancer un conteneur sans lui donner de port :
```
docker run -d pengbai/docker-supermario
```

![Image n°7](image/7.png)


Puis aller dans Images,  
Puis cliquer sur le lien de l'image :

![Image n°8](image/8.png)

Puis aller sur Run :

![Image n°9](image/9.png)

Puis attribuer manuellement un port :

![Image n°10](image/10.png)

![Image n°10.5](image/10.5.png)

Le résultat se trouve à localhost:8888

![Image n°11](image/11.png)

# Fenêtre Images :

Lorsque les conteneurs se lance voici ce qu'il se passe :

![Image n°12](image/12.png)

# Résultats des conteneurs qui tournent :

![Image n°13](image/13.png)


# Voici les capture d'écran du jeu dans le navigateur :

![Image n°14](image/14.png)  ![Image n°15](image/15.png)
![Image n°16](image/16.png)  ![Image n°17](image/17.png)


# Arrêter un conteneur par son ID :

- 1ère façon de trouver l'ID :
```
docker ps
```
![Image n°18](image/18.png)

```
docker ps -a
```
![Image n°19](image/19.png)



- 2ème façon de trouver l'ID :

![Image n°20](image/20.png)


- 1ère façon d'arrêter un conteneur :
```
docker stop <id_du_conteneur>
```
ou
```
docker stop <nom_du_conteneur>
```
Résultat :
![Image n°21](image/21.png)

- 2ème façon :  
Cliquer sur stop sans utiliser le Terminal :

![Image n°22](image/22.png)


# Supprimer un conteneur :

- 1ère méthode avec le nom :
```
docker rm <nom_du_conteneur>
```
ou
```
docker rm <id_du_conteneur>
```

![Image n°23](image/23.png)


- 2ème méthode en cliquant :

![Image n°24](image/24.png)

![Image n°25](image/25.png)



 