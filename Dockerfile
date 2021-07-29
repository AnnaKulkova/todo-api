FROM node:12

WORKDIR /home/app

COPY package.json yarn.lock tsconfig.json nodemon.json ./
COPY src ./src
COPY migrations ./migrations

RUN yarn install

COPY . .

EXPOSE 3000
CMD yarn start
