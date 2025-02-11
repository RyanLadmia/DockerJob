# **Docker Les Bases :**

Ce projet a pour but de fournir des informations sur les bases du fonctionnement de Docker.

## Auteur :

[Ryan Ladmia](https://www.github.com/RyanLadmia)  

Adresse email : ryan.ladmia@laplateforme.io


## A Propos de moi :

Je suis un developpeur fullstack, actuellement en formation à La Plateforme l'école du numérique.  
J'envisage de m'orienter vers la conception d'applications puis vers la cybersécurité.


## Utilisation :

**1. Vérifier la version de Docker :**
```
docker --version
``` 
Cette commande permet de vérifier si Docker est installé sur le système et quelle est sa version.  

Exemple :

![Image n°1](image/1.png)


**2. Informations générales :**
```
docker info
```
Cette commande permet d'afficher des informations générales sur l'installation de Docker (nombre de conteneurs actifs, images stockées, etc.).

Exemple :

![Image n°2](image/2.png)
![Image n°3](image/3.png)


**3. Conteneurs actifs :**
```
docker ps
```
Cette commande permet d'afficher uniquement les conteneurs actifs (qui tournent actuellement).  
-a = liste tous les conteneurs (actifs et arrêtés).  
-q = liste unique les IDs des conteneurs

Exemple 1 : aucun conteneur ne tourne.

![Image n°4](image/4.png)

Exemple 2 : un conteneur en trainde tourner.

![Image n°12](image/12.png)


**4. Afficher les images :**
```
docker images
```
Cette commande permet d'afficher toutes les images Docker stockées localement sur ta machine.

Exemple 1 : aucune image active. 

![Image n°5](image/5.png)

Exemple 2 : image active.

![Image n°13](image/13.png)

**5. Exécuter un conteneur :**
```
docker run [OPTIONS] <nom_de_l_image> [COMMANDE] [ARGUMENTS]
```

Exemple :
```
docker run -d -p 8080:80 docker/welcome-to-docker
```
La commande docker run sert à créer et exécuter un conteneur à partir d'une image :  
-d = détachable (ne se coupe pas si le terminal est fermé).  
-it = interactif (se coupe si le terminal est fermé).  
-p = lier un port du PC avec un port du conteneur.  
-rm = supprime le conteneur lorsque qu'il est arrêté ou que le terminal est ferme.

Exemple 1 : sans instructions ( docker run )

![Image n°6](image/6.png)

Exemple 2 : avec instructions

![Image n°14](image/14.png)

**6. Arrêter un conteneur :**

```
docker stop <nom_du_conteneur>  
```
ou

```
docker stop <id_du_conteneur>
```