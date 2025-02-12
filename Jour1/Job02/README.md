# Création de l'image :

```
docker build -t welcome-to-docker .
```

Lors de la création de l'image, j'ai eu un message d'erreur indiquant que la version de Node.js dans l'image Docker (v18.20.6) n'est pas compatible avec la version de npm que j'essaies d'installer (npm@11.1.0), qui nécessite Node.js v20.17.0 ou supérieur. J'ai donc procédé à une modification du fichier Dockerfile comme ceci  :

![Image n°1](image/1.png)

J'ai ensuite réussi à créer l'image.  
  
![Image n°2](image/2.png)
