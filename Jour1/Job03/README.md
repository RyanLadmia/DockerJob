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

- Méthode n°2 :




