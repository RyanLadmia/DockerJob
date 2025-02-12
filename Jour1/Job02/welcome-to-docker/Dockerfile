# Start your image with a node base image (updated to Node 20)
FROM node:20-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# Clean npm cache, update npm to the latest version, install packages, and build
RUN npm cache clean --force \
    && npm install -g npm@latest \
    && npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]
