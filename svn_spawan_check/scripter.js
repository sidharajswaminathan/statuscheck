console.log("scripter");
let interface = require('svn-interface');
let request = require('request');
let options = {
    url: "https://svn.inkling.com/svn/dps_cpl_scidmns20ca_g1_objectpat/trunk/",
    auth: {
    user: "S.Vembuganesh@spi-global.com",
    password: "HAB@spi123456"
    }
  }
let path = "./scripterContents/";

connect = async(options)=>{
	return new Promise((resolve,reject) => {
		request(options, function (err, res, body) {
			if (err) {
				console.log("svn connection failed  ---->  ",err);
				reject(err);
			}
			else {
            resolve("USER AUTHENTICATED SUCCESSFULLY!!!");
            checkoutFile('https://svn.inkling.com/svn/dps_cpl_scidmns20ca_g1_objectpat/trunk/assets/widget_data/config',path);
            }
    });
  })
}
//svn --S.Vembuganesh@spi-global.com user --password password co svn://google.com/ad
connect(options);

checkoutFile = async(url,path) =>{
    interface.checkout(url,path,(res)=>{
        console.log(res,"   res");
    })
}

