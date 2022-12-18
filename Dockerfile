FROM node

WORKDIR /usr/irental-cars-api

COPY package.json ./

RUN npm install --legacy-per-deps

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]