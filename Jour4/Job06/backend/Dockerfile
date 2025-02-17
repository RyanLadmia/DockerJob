# Utiliser Node.js 16 Alpine
FROM node:16-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
