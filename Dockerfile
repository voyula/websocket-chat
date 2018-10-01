FROM node:8.9-alpine
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm install gulp-cli typescript -g && npm run build
EXPOSE 3000
CMD node app.js
