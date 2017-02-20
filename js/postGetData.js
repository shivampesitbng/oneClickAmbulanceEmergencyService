/***************** Database ******************/

//initialise db
var database = firebase.database();

//retriev logeed in email
var loggedInEmail = localStorage.getItem('loggedInEmail') || 'Default Value';
JSON.stringify(loggedInEmail);
console.log(loggedInEmail);
loggedInEmail = loggedInEmail.substr(1).slice(0, -1);
console.log(loggedInEmail);
loggedInEmail=loggedInEmail.replace(".", "DOT");
console.log(loggedInEmail);



// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject') || 'Default Value';
JSON.stringify(retrievedObject);
console.log(retrievedObject);
retrievedObject = retrievedObject.substr(1).slice(0, -1);
console.log(retrievedObject);



//check if not first time,get Data
if(retrievedObject != "efault Valu"){	
	console.log("getting data...");
	getData();
}

var ref;

var f ; //flag - user or Hosp

var count;



var flagUpdate = 0;
//Writ func - user



function writeUserData(){
	
	
	
	var name = document.getElementById("username").value;
	var ph = document.getElementById("ph").value;
	
	//var userEmail2 = userEmail.replace("@", "ATTHERATE");
	var userEmail2 = userEmail.replace(".", "DOT");
	console.log(userEmail2);
	
	// WriteData
	ref = database.ref('users/' + userEmail2);
	
	var data = {
		name : name,
		ph : ph,
		gMail : userEmail,
		
	}
	if(flagUpdate == 1){
		
		console.log(flagUpdate);
		ref.update(data);
		
	}
	else{
		console.log(flagUpdate);
		ref.set(data);
	}
		
	
	// Put the object into storage
	console.log(userEmail);
	localStorage.setItem('testObject', JSON.stringify(userEmail));
	
	f = 1;
	localStorage.setItem('flag', JSON.stringify(f));
	
	location.href = "map.html";
}

//update


function UpdateUserData(data){
	flagUpdate = 1;
	writeUserData();
}

//Retriev
//Button trigger getData
function getData(){
	
	//var userEmail2 = userEmail.replace("@", "ATTHERATE");
	//if(f != 1){
		console.log("userEmail: " + loggedInEmail);
		//var userEmail2 = userEmail.replace(".", "DOT");
		var userEmail2 = loggedInEmail;
		console.log(userEmail2);
	//}
	ref = database.ref('users/' + userEmail2);
	ref.on('value',gotData, errData);
	//getData Func - user
	function gotData(data){
		console.log(data.val());
		var user = data.val();
		console.log(user);
		
		var keys = Object.keys(user);
		console.log(keys);
		
		var name;
		var ph;
		var gMail;
		//for(var i =0 ; i<keys.length ; i++){
			//console.log(keys.length);
			//var k  = keys[i];
			
			//if(userEmail == user[k].gMail){ //query by email
				name = user.name;
				ph = user.ph;
				gMail = user.gMail;

				
			//}
			console.log(name, ph, gMail);
		//}
		
		//Reflect in EditText
		document.getElementById("username").value = name;
		document.getElementById("ph").value = ph;
		
	
		
	}
	function errData(data){
		console.log("Error!");
	}
	
}

//GET ALL USER DATA FUCNTION
/*function getData(){
	
	
	
	ref = database.ref('users/');
	ref.on('value',gotData, errData);
	//getData Func - user
	function gotData(data){
		console.log(data.val());
		var user = data.val();
		console.log(user);
		
		var keys = Object.keys(user);
		console.log(keys);
		
		var name;
		var ph;
		var gMail;
		for(var i =0 ; i<keys.length ; i++){
			//console.log(keys.length);
			var k  = keys[i];
			
			//if(userEmail == user[k].gMail){ //query by email
				name = user[k].name;
				ph = user[k].ph;
				gMail = user[k].gMail;

				
			//}
			console.log(name, ph, gMail);
		}
		
		//Reflect in EditText
		document.getElementById("username").value = name;
		document.getElementById("ph").value = ph;
		
	
		
	}
	function errData(data){
		console.log("Error!");
	}
	
}*/
/************** HOSPITAL DB ********************/

// WriteData
//var ref2 = database.ref('hosp');


// Retrieve the object from storage
var retrievedObject2 = localStorage.getItem('testObject2') || 'Default Value';
JSON.stringify(retrievedObject2);
console.log(retrievedObject2);
retrievedObject2 = retrievedObject2.substr(1).slice(0, -1);
console.log(retrievedObject2);


//check if not first time,get Data
if(retrievedObject2 != "efault Valu"){	
	console.log("getting data...");
	getData2();
}



//Writ func - user
function writeUserData2(){
	var hospName = document.getElementById("hospName").value;
	var contact = document.getElementById("contact").value;
	
	
	if(f != 1){
		var userEmail3 = userEmail.replace(".", "DOT");
		console.log(userEmail3);
	}
	
	// WriteData
	ref2 = database.ref('hosp/' + userEmail3);
	
	//Hosp Lat Lng retriev Local stor
	var retrievedObjectLat = localStorage.getItem('lat') || '0';
	//JSON.stringify(retrievedObjectLat);
	console.log(retrievedObjectLat);
	retrievedObjectLat = Number(retrievedObjectLat);
	console.log(retrievedObjectLat);
				
	var retrievedObjectLng = localStorage.getItem('lng') || '0';
	//JSON.stringify(retrievedObjectLng);
	console.log(retrievedObjectLng);
	retrievedObjectLng = Number(retrievedObjectLng);
	console.log(retrievedObjectLng);
	
	
	
	var data2 = {
		hospName : hospName,
		contact : contact,
		gMail2 : userEmail,
		
		hosLat : retrievedObjectLat,
		hosLng : retrievedObjectLng
		
	}
	
	if(flagUpdate == 1){
		
		console.log(flagUpdate);
		ref2.update(data2);
		
	}
	else{
		console.log(flagUpdate);
		ref2.set(data2);
	}
	
	// Put the object into storage
	console.log(userEmail);
	localStorage.setItem('testObject2', JSON.stringify(userEmail));
	
	f = 2;
	localStorage.setItem('flag', JSON.stringify(f));
	
	location.href = "hosp.html";
}

//user hosp data
function UpdateUserData2(data){
	flagUpdate = 1;
	writeUserData2();
}


//Retriev
//Button trigger getData
function getData2(){
	
	//var userEmail3 = userEmail.replace(".", "DOT");
	//console.log(userEmail3);
	
	console.log("userEmail: " + loggedInEmail);
	//var userEmail2 = userEmail.replace(".", "DOT");
	var userEmail3 = loggedInEmail;
	console.log(userEmail3);
	
	ref2 = database.ref('hosp/' + userEmail3);
	ref2.on('value',gotData2, errData2);
	//getData Func - user
	
	
	//getData Func - user
	function gotData2(data2){
		//console.log(data.val());
		var hosp = data2.val();
		var keys = Object.keys(hosp);
		//console.log(keys);
		//for(var i =0 ; i<keys.length ; i++){
			//var k  = keys[i];
				var hospName;
				var contact;
				var gMail2;
			//if(userEmail == hosp[k].gMail2){ //query by email
				hospName = hosp.hospName;
				contact = hosp.contact;
				gMail2 = hosp.gMail2;
				
				hosLat =  hosp.hosLat;
				hosLng = hosp.hosLng; 
				
			//}
		//}
		console.log(hospName, contact, gMail2 , hosLat , hosLng);
		//Reflect in EditText
		document.getElementById("hospName").value = hospName;
		document.getElementById("contact").value = contact;
		
	}
	
	function errData2(data2){
		console.log("Error!");
	}
	
}
//GET ALL HOSPITALS DETAILS
function getData3(){
	//var userEmail3 = userEmail.replace(".", "DOT");
	//console.log(userEmail3);
	
	ref2 = database.ref('hosp/');
	ref2.on('value',gotData2, errData2);
	//getData Func - user
	
	
	//getData Func - user
	function gotData2(data2){
		//console.log(data.val());
		var hosp = data2.val();
		var keys = Object.keys(hosp);
		//console.log(keys);
		count = keys.length;
		console.log(count);
		for(var i =0 ; i<keys.length ; i++){
			var k  = keys[i];
				var hospName;
				var contact;
				var gMail2;
			//if(userEmail == hosp[k].gMail2){ //query by email
				hospName = hosp[k].hospName;
				contact = hosp[k].contact;
				gMail2 = hosp[k].gMail2;
				
				hosLat =  hosp[k].hosLat;
				hosLng = hosp[k].hosLng; 
				
				/****** dynamically create button for differrnt hospitals ***** /
				/*var container = document.getElementById("container");
				// Clear previous contents of the c1ontainer
				while (container.hasChildNodes()) {
					container.removeChild(container.lastChild);
					
				}
				var button = document.createElement("button");
				container.appendChild(button);
				button.id = k;
				button.innerHTML = i;
				button.style = "width:100px;" */
				
			//}
			console.log(hospName, contact, gMail2 , hosLat , hosLng);
		}
		
		
		
		
	}
	
	function errData2(data2){
		console.log("Error!");
	}
	
	
}



