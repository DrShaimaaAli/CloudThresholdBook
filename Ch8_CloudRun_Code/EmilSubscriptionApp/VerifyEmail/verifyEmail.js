
/*
// recives the email as a property in the query-string
// and send the confirmation message n the response
exports.verifyEmail = (req, res) => {
    let message = 'Email ' + req.query.email + ' has been verified!' 
    res.status(200).send(message);
  };
 */ 
const express = require('express');

const server = express();

server.get('/', (req, res) => 
                {
                  let message = 'Email ' + req.query.email + ' has been verified!' 
                  res.status(200).send(message);
                }
          );

server.listen(8080, '0.0.0.0', () => {console.log('listening on port 8080.');});