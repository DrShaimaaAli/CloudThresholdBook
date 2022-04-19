// recives the email as a property in the query-string
// and send the confirmation message n the response
exports.verifyEmail = (req, res) => {
    let message = 'Email ' + req.query.email + ' has been verified!' 
    res.status(200).send(message);
  };
  