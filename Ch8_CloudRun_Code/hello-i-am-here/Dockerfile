From node:latest
WORKDIR /usr/src/web-apps/hello-i-am-here
ADD index.js .
ADD package.json .
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node" , "index.js"]