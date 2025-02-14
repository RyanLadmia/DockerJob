# nginx : C'est un serveur web. Il permet d’héberger des sites et de servir des fichiers HTML/PHP.
# alpine : C'est une version très légère de l'image nginx, basée sur Alpine Linux (un système d'exploitation minimaliste, optimisé pour les conteneurs).

FROM nginx:alpine

# Cette commande copie le fichier index.html (présent dans le même dossier que le Dockerfile) vers le dossier /usr/share/nginx/html/ du conteneur.

COPY index.html /usr/share/nginx/html/

# Même principe que la ligne précédente, sauf que cette fois, on copie save.php, un fichier PHP qui pourrait contenir du code pour enregistrer des données (ex: sauvegarder une partie de morpion).

COPY save.php /usr/share/nginx/html/

# Copie le fichier results.json dans le même dossier du conteneur.

COPY results.json /usr/share/nginx/html/

# Indique que le conteneur va écouter sur le port 80 (le port HTTP par défaut).

EXPOSE 80