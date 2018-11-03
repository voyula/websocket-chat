FROM node:8.9-alpine
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm install -g gulp-cli typescript && npm run build
EXPOSE 3000
EXPOSE 8680
CMD node app.js
