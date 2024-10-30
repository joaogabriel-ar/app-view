FROM node:18-alpine

WORKDIR /app-view

COPY package*.json /app-view

COPY . .

EXPOSE 9000

RUN npm install

# Correct CMD syntax

CMD ["npm", "run", "vite"]  
