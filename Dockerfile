FROM node:lts-alpine
WORKDIR /usr/src/desafio
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4002
CMD [ "npm", "run", "dev" ]