const nodemailer = require("nodemailer");
const express = require('express');
const server = express();

server.get('/', 
            (req,res) => {

            // A simpler simulation
              let preview = "A verification email sent to your account: <a href='#openemail'> Go To Email </a>";

              for (let i=0;i<100;i++) preview += "<br>"; // just adding empty lines

              preview += "<hr> <h1 id='openemail'> Email Server Simulation</h1> <hr>";
              preview +=
              `<b>from:</b> 'maillingList@subscription.com'<br>
              <b>to:</b> ${req.query.email} <br>
              <b>subject:</b> "Verify Your email"<br> 
              Thank you for your interest in our mailing list
              <br>

              <a href="https://verify-email-fcdun4ebkq-uc.a.run.app?email=${req.query.email}"> 
              Click here to verify your email
              </a>
              `             
              res.status(200).send(preview);

            }
);

server.listen(8080, '0.0.0.0', () => {console.log('listening on port 8080.');});
/*
// The entry point for the GCF recieves the HTTP request and response objects
async function sendVerificationEmail(req,res) {
  
  let testAccount = await nodemailer.createTestAccount();
  
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });
  
  let info = await transporter.sendMail({
    from: 'maillingList@subscription.com', 
    to: req.query.email, 
    subject: "Verify Your email", 
    text: "Thank you for your interest in our mailing list", 
    // The html body of the message contains the URL to trigger the verify-email GCF
    html: '<a href="https://us-central1-fit-heaven-286717.cloudfunctions.net/verify-email?email=' 
            + req.query.email 
            +'"> Click here to verify your email</a>' 
    , 
  });

  // Send the preview url as a response
  let preview = "A verification email sent to your account: <a href='" 
                + nodemailer.getTestMessageUrl(info)
                + "'> Here </a>";
  res.status(200).send(preview);
}


module.exports.sendVerificationEmail = sendVerificationEmail;
*/
