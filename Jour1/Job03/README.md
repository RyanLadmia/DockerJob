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









