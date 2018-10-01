FROM node:8.9-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app
RUN npm install gulp-cli typescript -g && npm run build
EXPOSE 3000
CMD node app.js
