/************** gLogin *****************/
var provider = new firebase.auth.GoogleAuthProvider();
var userName, userEmail;
var user;
var loginFlag;

//Sign-In
function signIn(){
	
	firebase.auth().signInWithRedirect(provider);
	firebase.auth().getRedirectResult().then(function(result) {
		if(result.credential){
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
		}
	// The signed-in user info.
	user = result.user;
	console.log(user);
	localStorage.setItem('loginFlag', JSON.stringify(1));
		  
	//$("#login").hide();
	//$("#logout").show();
	
	
	
	
	
	
	// ...
	}).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// The email of the user's account used.
	var email = error.email;
	// The firebase.auth.AuthCredential type that was used.
	var credential = error.credential;
	// ...
	});
	
}
	
//Sign-out
function signOut(){
	firebase.auth().signOut().then(function() {
		console.log("Sign-out successful");
	}, function(error) {
		console.log( "An error happened");
	});
	
	$("#login").show();
	$("#logout").hide();
	location.href="index.html";
	console.log("going to index");
	
}
	
//Manage Users
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		 console.log("User is signed in");
		 userName = user.displayName;
		 console.log(userName);
		 userEmail = user.email;
		 console.log(userEmail);
		 $("#login").hide();
		 
		 document.getElementById("userName").innerHTML = "Hi " + userName + " !";
		document.getElementById("userEmail").innerHTML = "You are logged in by Email: " + userEmail;
		 
		 loginFlag = localStorage.getItem('loginFlag') || '"0"';
		 if(loginFlag == "1"){
			 loginFlagFunc();
			 localStorage.setItem('loginFlag', JSON.stringify(0));
			 
		 }
		 whichPage = localStorage.getItem('whichPage') || '"0"';
		 if(whichPage == "1"){
			 
			 //retriev flag
	var retrievedObjectFlag = localStorage.getItem('flag') || '0';
	JSON.stringify(retrievedObjectFlag);
	console.log(retrievedObjectFlag);
	retrievedObjectFlag = Number(retrievedObjectFlag);
	console.log(retrievedObjectFlag);
			 
				//check
				if(  retrievedObjectFlag == 1){
					console.log("map");
					location.href="map.html";
				}
				//check2 -- for Hosp
				else if( retrievedObjectFlag == 2){
					console.log("hosp");
					location.href="hosp.html";
				}
				else{
					console.log("ch");
					location.href="choice.html";
				}
		 }
		 
		 
	} else {
		console.log("No user is signed in");
		$("#logout").hide();
		//location.href="index.html";
		localStorage.setItem('loginFlag', JSON.stringify(0));
	}
});


function loginFlagFunc(){
	//console.log(user);
	// Retrieve the object from storage
	/*var retrievedObject = localStorage.getItem('testObject') || 'Default Value';
	JSON.stringify(retrievedObject);
	console.log(retrievedObject);
	retrievedObject = retrievedObject.substr(1).slice(0, -1);
	console.log(retrievedObject);
	console.log(user.email);
	
	//retriev obj 2 -- hosp
	var retrievedObject = localStorage.getItem('testObject') || 'Default Value';
	JSON.stringify(retrievedObject);
	console.log(retrievedObject);
	retrievedObject = retrievedObject.substr(1).slice(0, -1);
	console.log(retrievedObject);
	console.log(user.email);*/
	
	//retriev flag
	var retrievedObjectFlag = localStorage.getItem('flag') || '0';
	JSON.stringify(retrievedObjectFlag);
	console.log(retrievedObjectFlag);
	retrievedObjectFlag = Number(retrievedObjectFlag);
	console.log(retrievedObjectFlag);
	
	localStorage.setItem('loggedInEmail', JSON.stringify(userEmail));
	console.log(loggedInEmail);
	
	
	
	
	
	
	//check
	if(  retrievedObjectFlag == 1){
		console.log("map");
		location.href="map.html";
	}
	//check2 -- for Hosp
	else if( retrievedObjectFlag == 2){
		console.log("hosp");
		location.href="hosp.html";
	}
	else{
		console.log("ch");
		location.href="choice.html";
	}
}