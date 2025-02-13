# Utiliser l'image officielle PHP avec Apache et la version de php
FROM php:8.2-apache

# Copier le fichier index.php dans le dossier racine du serveur Apache
COPY index.php /var/www/html/

# Exposer le port 80 (port utilisé par Apache dans le container)
EXPOSE 80

# Lancer Apache en arrière-plan
CMD ["apache2-foreground"]
