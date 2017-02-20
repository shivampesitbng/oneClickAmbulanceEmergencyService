var lat , lng ;

function locate(){
	$(document).ready(function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(success, fail);
			console.log("succes/fail");
		}
		else{
			//$("p").html("HTML 5 not supported");
			console.log("HTML 5 not supported");
		}
	});
}
function success(position){
	
	/* $("p").html("Latitude: "+position.coords.latitude+
		"<br>Longitude: "+position.coords.latitude+
		"<br>Accuracy: "+position.coords.accuracy); */
		
		//console -- print
		console.log("Latitude: "+position.coords.latitude+
		" Longitude: "+position.coords.longitude+
		" Accuracy: "+position.coords.accuracy);
		
		lat = position.coords.latitude;
		lng = position.coords.longitude;
		
		console.log(lat +" "+ lng);
		
		localStorage.setItem('lat', JSON.stringify(lat));
		localStorage.setItem('lng', JSON.stringify(lng));

}
function fail(error){
	var errorType = {
		0: "Unknown Error",
		1: "Permission denied by the user",
		2: "Position of the user not available",
		3: "Request timed out"
	};
	var errMsg = errorType[error.code];
	if(error.code == 0 || error.code == 2){
		errMsg = errMsg +" "+error.message; 
	}
	//$("p").html(errMsg);
	
	console.log("Error: " + errMsg);
}


