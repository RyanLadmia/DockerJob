# Création de l'image :

```
docker build -t welcome-to-docker .
```

Lors de la création de l'image, j'ai eu un message d'erreur indiquant que la version de Node.js dans l'image Docker (v18.20.6) n'est pas compatible avec la version de npm que j'essaies d'installer (npm@11.1.0), qui nécessite Node.js v20.17.0 ou supérieur. J'ai donc procédé à une modification du fichier Dockerfile comme ceci  :

![Image n°1](welcome-to-docker/image/1.png)

J'ai ensuite réussi à créer l'image :
```
docker build -t welcome-to-docker .
```  
!!! Ne pas oublier l'espace et le point à la fin de la commande.  
Le . à la fin de la commande fait référence au répertoire actuel, donc Docker va chercher le Dockerfile et construire l'image à partir des fichiers présents dans ce dossier.
  
![Image n°2](welcome-to-docker/image/2.png)
  
  

# Lancement de l'image Docker et du conteneur :  
```
docker run -p 3000:3000 welcome-to-docker
```

![Image n°3](welcome-to-docker/image/3.png)
  


# Vérifier si le conteneur est lancée :
```
docker ps
```
  
![Image n°4](welcome-to-docker/image/4.png)
  


# Vérifier les images actives :

```
docker images
```

![Image n°5](welcome-to-docker/image/5.png)
  


# Accèder au conteneur :
  
![Image n°6](welcome-to-docker/image/6.png)
  


# Modification du code ligne 16 :

![Image n°8](welcome-to-docker/image/8.png)



# Arrêt et suppression :

![Image n°9](welcome-to-docker/image/9.png)



# Création d'une nouvelle image :

![Image n°10](welcome-to-docker/image/10.png)


# Visualisation :

![Image n°11](welcome-to-docker/image/11.png)


# Connexion à mon compte :

![Image n°12](welcome-to-docker/image/12.png)


# Création d'une nouvelle image avec un nom différent :

![Image n°13](welcome-to-docker/image/13.png)


# Tag et publication :

![Image n°14](welcome-to-docker/image/14.png)

Dans Docker desktop :

![Image n°15](welcome-to-docker/image/15.png)
 

# Récupérer l'image de quelqu'un :

![Image n°16](welcome-to-docker/image/16.png)


# Repérer le dossier contenant le code :

Ouvrir le Terminel de Docker Desktop et tapper :
```
docker exec -it Const-Ibrahim sh
```

Pour explorer l'intérieur d'un conteneur pour localiser les fichiers ou dossiers avant de les copier, tu peux utiliser la commande docker exec pour obtenir un accès en ligne de commande au conteneur.  
Par exemple, si tu veux naviguer dans les dossiers du conteneur pour vérifier où se trouve le code.  
Cela te permet d'accéder à un shell dans le conteneur, où tu peux naviguer dans le système de fichiers et localiser le code. Une fois que tu as trouvé le dossier, tu peux utiliser docker cp pour le récupérer.

![Image n°17](welcome-to-docker/image/17.png)


Puis tapper j'ai tappé cette commande dans le terminal de VsCode :

![Image n°18](welcome-to-docker/image/18.png)

Le dossier contenant le code de l'image a été ajouté. Je peux maintenant le modifier.


# Reconstruction de l'image de Ibrahim après l'avoir modifiée :


![Image n°19](welcome-to-docker/image/19.png)


# Resultat de la modification :

![Image n°20](welcome-to-docker/image/20.png)


# Tag et push sur Docker hub :


![Image n°21](welcome-to-docker/image/21.png)


# Resultat sur Docker Hub :


![Image n°22](welcome-to-docker/image/22.png)
