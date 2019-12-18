const mailer = require('./mailComposer.js');



async function startProcess(data){
	var mailOptions={
		to : 'castrokabilon.tl@spi-global.com',
		subject : "virtualQ for Sabarimala darishanam",
		html: 'Date is available !!! hurry up!!!'
	}
	const mailResponse = await mailer.sendLogs(mailOptions);
	console.log(mailResponse);
}