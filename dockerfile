FROM node:18.18.0

WORKDIR /usr/src/app/
RUN mkdir -p dist

COPY ./dist ./dist/
COPY .env ./
COPY package*.json ./

RUN npm i 

EXPOSE 3001

CMD ["sh", "-c", "npm run start:prod"]
