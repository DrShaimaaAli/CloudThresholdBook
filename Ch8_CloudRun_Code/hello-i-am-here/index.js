const express = require('express');
const os = require('os');

const server = express();

server.get('/', (request, response) => {
                    response.send("Hello "+request.query.name + " I'm here at "+os.hostname + "\n");
                }
          );

server.listen(8080, '0.0.0.0', () => {console.log('listening on port 8080.');});

