/* const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('i am new World!');
    res.end();
}).listen(8080);

http.post('pCall',(req,res)=>{
    console.log(res);
})
console.log(http,"   http"); */
var nodemailer = require("nodemailer");

var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var cors = require('cors');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); 
app.use(express.static(path.join(__dirname, '../')));
app.get('/',function(req,res){
  console.log("get method  !!!!");
  res.end();
});

app.get('/mailer',function(req,res){
  var mailOptions={
		to : 'rajadurai.p@spi-global.com',
		subject : "virtualQ for Sabarimala darishanam",
		html: 'Date is available !!! hurry up!!!'
  }
  var smtpTransport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secureConnection: false,
    tls: {
        ciphers:'SSLv3'
    },
    auth: {
        user: "sidharaj.s@spi-global.com",
        pass: "sidhu91@FAMILY"
    }
  });
  return new Promise((resolve,reject)=>{
      smtpTransport.sendMail(mailOptions, function(error, response){
          if(error){
                console.log(error);   
                reject(error);    
          }else{
              /* console.log("Message sent: "); */
              resolve("Log file delivered successfully!!!");
              res.end("   yes mail delivered");
          }
      });
  });
  
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
});



sendexcelLogs = async(config) =>{
  
  
}