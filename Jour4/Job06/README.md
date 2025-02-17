# Fichier docker-compose.yml :

![Image n°1](image/1.png)


# Structure du dossier :

![Image n°2](image/2.png)


# Connexion entre les services :

![Image n°3](image/3.png)


# Démonstration :
  

![Image n°4](image/4.png)  
  

![Image n°5](image/5.png)  
  

Authentification :  

![Image n°6](image/6.png)  


Etat de l'API :

![Image n°7](image/7.png)  


Accès à mysql :

Sur Chrome :

![Image n°8](image/8.png)

Sur FireFox :

![Image n°9](image/9.png)  

Pour accéder au container et donc au mysql en invite de commande :  
```
docker exec -it mysql_container bash
```

Puis :  
```
mysql -u root -p
```
Pour se connecter. Le mot de passe ne se voit pas pour des raisons de sécurité. On doit le saisir à l'aveugle.  
Une fois cela fait :  
  
```
SHOW DATABASES;
```

![Image n°10](image/10.png) 


Pour quitter le shell MySQL :
```
Exit
```
ou
```
Quit
```

![Image n°11](image/11.png) 
