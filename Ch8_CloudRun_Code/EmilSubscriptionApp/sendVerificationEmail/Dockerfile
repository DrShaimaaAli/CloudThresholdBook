From node:latest
WORKDIR /usr/src/web-apps/sendVerificationEmail
ADD sendVerificationEmail.js .
ADD package.json .
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node" , "sendVerificationEmail.js"]
