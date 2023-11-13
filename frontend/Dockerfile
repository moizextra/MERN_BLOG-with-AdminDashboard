# Dockerfile for React client

# Build react client
FROM node:18-alpine

# Working directory be app
WORKDIR /frontend

COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/

### Installing dependencies

RUN npm install

# Install Vite globally
RUN npm install -g vite

# copy local files to app folder
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
