# Utilisation d'Alpine avec Nginx et PHP-FPM
FROM alpine:latest

# Installation de Nginx, PHP et ses extensions
RUN apk add --no-cache nginx php php-fpm php-json php-mbstring

# Copier les fichiers du projet
COPY index.html /usr/share/nginx/html/
COPY save.php /usr/share/nginx/html/
COPY results.json /usr/share/nginx/html/

# Donner les permissions nécessaires
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Configuration minimale de Nginx pour supporter PHP
RUN mkdir -p /etc/nginx/conf.d && \
    echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ =404; \
    } \
    location ~ \.php$ { \
        fastcgi_pass 127.0.0.1:9000; \
        fastcgi_index index.php; \
        include fastcgi.conf; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Définir les volumes pour la persistance des fichiers
VOLUME /usr/share/nginx/html/results.json

# Exposer le port 80
EXPOSE 80

# Lancer PHP-FPM et Nginx en parallèle
CMD php-fpm81 -D && nginx -g "daemon off;"
