FROM node:14

COPY . /usr/src
WORKDIR /usr/src
EXPOSE 8000
RUN npm install
ENTRYPOINT npm start