FROM node:8.9-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --silent && npm install gulp-cli typescript -g && npm run build
COPY . /app
EXPOSE 3000
CMD node app.js
