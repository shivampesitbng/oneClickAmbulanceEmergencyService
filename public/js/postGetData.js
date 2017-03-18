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

var nearestHospEmail;

//var userPh;

var ref;

var f ; //flag - user or Hosp

var count;



var flagUpdate = 0;
var flagUpdate2 = 0;
//Writ func - user



function writeUserData(){
	
	
	
	var name = document.getElementById("username").value;
	var ph = document.getElementById("ph").value;
	localStorage.setItem('user_ph', JSON.stringify(ph));
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
	//		userPh=ph;
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
				var user;
			//if(userEmail == hosp[k].gMail2){ //query by email
				hospName = hosp.hospName;
				contact = hosp.contact;
				gMail2 = hosp.gMail2;
				
				hosLat =  hosp.hosLat;
				hosLng = hosp.hosLng; 
				//user = hosp.user;
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
var dist = [];
function getData3(){
	//var userEmail3 = userEmail.replace(".", "DOT");
	//console.log(userEmail3);
	
	ref2 = database.ref('hosp/');
	ref2.on('value',gotData2, errData2);
	//getData Func - user
	
	var nearestHosp;
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
			
			//Cal Dist
			//Hosp Lat Lng retriev Local stor
			
			
			
			locate();
			
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
			
			/************** calculate distance ************************/
			//Haversine formula
			var rad = function(x) {
			  return x * Math.PI / 180;
			};

			//var getDistance = function(p1, p2) {
			/*  var R = 6378137; // Earth’s mean radius in meter
			  var dLat = rad(retrievedObjectLat - hosLat);
			  var dLong = rad(retrievedObjectLng - hosLng);
			  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(rad(hosLat)) * Math.cos(rad(retrievedObjectLat)) *
				Math.sin(dLong / 2) * Math.sin(dLong / 2);
			  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			  var d = R * c; */
			  
			//  return d; // returns the distance in meter
			//};
			
			var lat = [retrievedObjectLat, hosLat]
		  var lng = [retrievedObjectLng, hosLng]
		  var R = 6378137;
		  var dLat = (lat[1]-lat[0]) * Math.PI / 180;
		  var dLng = (lng[1]-lng[0]) * Math.PI / 180;
		  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		  Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
		  Math.sin(dLng/2) * Math.sin(dLng/2);
		  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		  var d = R * c;
		  
		  console.log(d);
		  
		  var e =  Math.round(d);
			
			console.log(e);
			
			dist[i] = e;
			
			
			
			
			//dist[i] = (retrievedObjectLat - hosLat)*(retrievedObjectLat - hosLat)+(retrievedObjectLng- hosLng)*(retrievedObjectLng- hosLng);
			
			console.log(dist[i]);
			
			
		}
		//console.log(dist[0]+" ");
		//console.log(dist[1]+" ");
		//console.log(dist[2]+" ");
		//console.log(dist[3]+" ");
		var min;
		min = dist[0];
		
		console.log(min);
		var i = 0;
		nearestHosp=i;
		for(i =0 ; i<keys.length ; i++){
			console.log(dist[i]+" ");
			
 
			
			if ( dist[i] < min ) 
			{
				min = dist[i];	
						nearestHosp=i;
						console.log(i);
						console.log(nearestHosp);
			}
			
		}
		//min=Math.sqrt(min);
		console.log(min);
		
		
		min = min/1000;
		
		console.log(nearestHosp);
		//log nearesrt hosp;
		console.log("nearesrt hosp detail : ");
		nearestHosp  = keys[nearestHosp];
		
		 console.log(hosp[nearestHosp].hospName);
		 console.log(hosp[nearestHosp].contact);
		console.log(hosp[nearestHosp].gMail2);
				
		 console.log( hosp[nearestHosp].hosLat);
		console.log(hosp[nearestHosp].hosLng);
		
		nearestHospEmail=hosp[nearestHosp].gMail2;
		console.log(nearestHospEmail);
		
		document.getElementById("NearestHospDetail").innerHTML = "Nearest Hosp Detail: " + hosp[nearestHosp].hospName + " Ph: " +hosp[nearestHosp].contact + " Loc:" +
			hosp[nearestHosp].hosLat+ " " + hosp[nearestHosp].hosLng + " Distance: " + min + "km away " ;
		
	}
	
	function errData2(data2){
		console.log("Error!");
	}
	
	
}



function sendLoc(){
	//getData();
	var userEmail2 = userEmail.replace(".", "DOT");
	console.log(userEmail2);
	
	nearestHospEmail = nearestHospEmail.replace(".", "DOT");
	console.log(nearestHospEmail);
	// WriteData
	ref3 = database.ref('hospUser/' + nearestHospEmail + '/user/' + userEmail2);
	
			locate();
			
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
			
			
	//console.log(userPh);
	
	var userPh = localStorage.getItem('user_ph') || 'NA';
	//JSON.stringify(retrievedObjectLat);
	console.log(userPh);
	userPh = userPh.substr(1).slice(0, -1);
	console.log(userPh);
	
	
	
	
			var data3 = {
				
				userMail : userEmail,
				userLat : retrievedObjectLat,
				userLng : retrievedObjectLng,
				userPh : userPh
				
				
			}
			ref3.set(data3);
			localStorage.setItem('uStatus', JSON.stringify(1));
			
			user_status();
			
}
function getUserCall(){
	console.log("userEmail: " + loggedInEmail);
	//var userEmail2 = userEmail.replace(".", "DOT");
	var userEmail3 = loggedInEmail;
	console.log(userEmail3);
	
	ref3 = database.ref('hospUser/' + userEmail3 + '/user/' );
	ref3.on('value',gotData3, errData3);
	
	//getData Func - user
	function gotData3(data3){
		//console.log(data.val());
		var user = data3.val();
	if(user){
		console.log(user);
		var keys = Object.keys(user);
		console.log(keys);
		
		console.log(user[keys[0]]);
		console.log(user[keys[1]]);
		
		var container = document.getElementById("container");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
	
		for(var i =0 ; i<keys.length ; i++){
			//var k  = keys[i];
			//console.log(k);
				var userMail;
				var userLat;
				var userLng;
				
				console.log(user[keys[i]]);
			//if(userEmail == hosp[k].gMail2){ //query by email
				
			/*	userLat = user[keys[i]].userLat;
				userLng = user[keys[i]].userLng;
				user = user[keys[i]].userMail;
			//}
			console.log(user , userLat ,userLng ); */
			
			var p = document.createElement("p");
			p.innerHTML = "User Details - Calling Ambulance :" + "User Email-> " +user[keys[i]].userMail+ " User Loc-> " + user[keys[i]].userLat + ","+user[keys[i]].userLng
			+ " User Ph-> " + user[keys[i]].userPh;
			 container.appendChild(p);
			 
			//document.getElementById("container").innerHTML = "User Details - Calling Ambulance :" + user[keys[i]].userLat + " "+user[keys[i]].userLng;
			
				/*var button = document.createElement("button");
				button.innerHTML = "<button onclick='cancelCallHosp(user[keys[i]].userMail);'>Cancel</button>";
               // button.value = "Cancel" + i;
				//button.style = "width:100px;height:50px;" ;
				//button.onclick = cancelCallHosp(user[keys[i]].userMail);
				container.appendChild(button);*/
		} 
		
	}else{
		document.getElementById("container").innerHTML = "Nobody Wants an Ambulance :)";
	}	
		
	}
	
	function errData3(data3){
		console.log("Error!");
	}
}

function cancelCall(){
	console.log("userEmail: " + nearestHospEmail);
	var userEmail3 = nearestHospEmail.replace(".", "DOT");
	console.log(userEmail3);
	
	var userEmail4 = userEmail.replace(".", "DOT");
	console.log(userEmail4);
	
	
	
	ref4 = database.ref('hospUser/' + userEmail3 + '/user/' + userEmail4);
	
	ref4.remove();
	localStorage.setItem('uStatus', JSON.stringify(0));
	
	user_status();
	
}
function user_status(){
			var uStatus = localStorage.getItem('uStatus') || '0';
			//JSON.stringify(retrievedObjectLat);
			console.log(uStatus);
			retrievedObjectLat = Number(uStatus);
			console.log(uStatus);
			
			
			
			
			if(uStatus == 0)
				document.getElementById("status").innerHTML = "You did not Call/Cancelled Ambulance Service";
			else
				document.getElementById("status").innerHTML = "You Called an Ambulance";
}
/*
function cancelCallHosp(x){
	//console.log("userEmail: " + nearestHospEmail);
	var x = x.replace(".", "DOT");
	console.log(x);
	
	var userEmail4 = userEmail.replace(".", "DOT");
	console.log(userEmail4);
	
	
	
	ref5 = database.ref('hospUser/' + userEmail4 + '/user/' + x);
	
	ref5.remove();
	localStorage.setItem('uStatus', JSON.stringify(0));	
}
*/