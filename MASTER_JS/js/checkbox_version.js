class Hotel { // creates the hotel object class

	constructor(name,rating,pricePerNight,distanceFromCity,wifi,
		pool){
	this.name=name;
	this.rating=rating;
	this.pricePerNight=pricePerNight;
	this.distanceFromCity=distanceFromCity;
	this.wifi=wifi;
	this.pool=pool
	 
}
}
let hotels=[];// Creates an empty array.
hotels.push(new Hotel("The Grand",5,190,0.5,"Yes","No"));
hotels.push(new Hotel("The Plaza",4,70,1,"Yes","Yes"));
hotels.push(new Hotel("The Lord Milburn",4,65,5,"Yes","No"));
hotels.push(new Hotel("The Grange",3,57,1,"Yes","No"));
hotels.push(new Hotel("The Windmill",1,5,10,"Yes","No"));
hotels.push(new Hotel("The Excel",3,56, 0.5,"Yes","No"));
hotels.push(new Hotel("The Ritz",2,14,5,"Yes","No"));
hotels.push(new Hotel("The Victoria",4,80,0.5,"Yes","No"));
hotels.push(new Hotel("Pheonix House",4,72, 1,"Yes","No"));
hotels.push(new Hotel("The Lodge",2,25,1,"No","No"));
hotels.push(new Hotel("The Sanctum",5,180, 2,"Yes","Yes"));
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
hotels.push(new Hotel("The Break Inn",1,20,1,"No","No"))
hotels.push(new Hotel("The Pottery",3,33,2,"Yes","No"));
hotels.push(new Hotel("The Lakeside",5,110,3,"Yes","Yes"));
hotels.push(new Hotel("Regency",1,15,1,"No","No"));
hotels.push(new Hotel("Millard Dock",3,15,3,"No","No"));
hotels.push(new Hotel("The Osprey",2,15,2,"No","No"));
hotels.push(new Hotel("Chateau Bonville",4,50, 3,"Yes","No"));
hotels.push(new Hotel("River Arnold Lodge",2, 35, 4,"Yes","No"));
hotels.push(new Hotel("Queens Hotel",2,25,3,"No","No"));
////////////////////////////////////////////////////
////////////EVENT LISTENER///////////////////////
////////////////////////////////////////////////////
	let priceSlider=document.getElementById("priceRange").value;
		priceRange.addEventListener("input", function() {
	       priceResult.innerHTML = "£" + priceRange.value;
	  		},false);
	let distSlider=document.getElementById("distanceRange").value;
		distanceRange.addEventListener("input", function() {
	       distanceResult.innerHTML=distanceRange.value + " Miles.";
	  		},false);

////////////////////////////////////////////////////
////////////DATA CAPTURE////////////////////////////
////////////////////////////////////////////////////

function getUserRating(){
	let ratingRange=document.getElementById("ratingRange").value;
		console.log(ratingRange);
		return ratingRange;
}
function getBudget(){
	let budget=document.getElementById("priceRange").value;
		console.log(budget);
		return budget;
}
function getDistance(){
	let distance=document.getElementById("distanceRange").value;
		console.log(distance);
		return distance;
}
function getWifi(){
		const selectedWifi=document.getElementById("wifiYes");
				if(selectedWifi.checked===true){
                    console.log(selectedWifi);
                    return "Yes";
                }else{
                	return "No";
		}
	}
 function getPool(){
	const selectedPool=document.getElementById("poolYes");
			if(selectedPool.checked===true){
				console.log(selectedPool);
			     return "Yes";
            }else{
                return "No";}
	// console.log(selectedPool);
	// return selectedPool;
}
////////END OF CAPTURE FUNCTIONS////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////FILTERING///////////////////////////////
////////////////////////////////////////////////////
function filterResults(ratingRange,budget,distance,selectedWifi,selectedPool){
	let matchRating=hotels.filter(function(userRating){
		if (userRating.rating==ratingRange){
			return true;
			}
			return false;
			})
		// return matchRating;
	let	matchPrice=matchRating.filter(function(userPrice){
		if (userPrice.pricePerNight<=budget){
			return true;
			}
			return false;
			})
	// return matchPrice;
	let matchDistance=matchPrice.filter(function(userDistance){
		if (userDistance.distanceFromCity<=distance){
			return true;
			}
			return false;
			})
	// return matchDistance;
	let matchWifi=matchDistance.filter(function(userWifi){
			if(userWifi.wifi==selectedWifi){
			return true;
			}
			// console.log("success");
			return false;	
			})

 		// return matchWifi;
 		let matchPool=matchWifi.filter(function(userPool){
			if(userPool.pool==selectedPool){
			return true;
			}
			// console.log("success");
			return false;
			alert("NO MATCHES");	
			})
 		return matchPool;

}
////////////END OF FILTERING /////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////RESULTS///////////////////////////////
//////////////////////////////////////////////////
function displayResults(matchPool){
	if(matchPool.length>0){
		console.log(`Success`)
		matchPool.forEach(function(result){
			const divElem = document.getElementById("result");
			const data = (result)
			const newUl = document.createElement("ul");
    		const newLi = document.createElement("li");
    		const newImg = document.createElement("img");

    		newLi.appendChild(newImg);
    		newLi.appendChild(document.createTextNode(` ${result.name} is available - ${result.pricePerNight} Per Night.`));
    		newUl.appendChild(newLi);
    		newImg.setAttribute("src","images/"+result.name+".jpg");


divElem.appendChild(newUl); 
})
	}else{
		 const msg = 'No Matches Found.';
                    document.getElementById('result').innerHTML = msg;
                    return false;

}

////////////END OF RESULTS ///////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////RUN PROGRAM///////////////////////////
//////////////////////////////////////////////////
function program(){
	const userRating=getUserRating();
	const userBudget=getBudget();
	const userDistance=getDistance();
	const userWifi=getWifi();
	const userPool=getPool();
	const matchingResults=filterResults(userRating,userBudget,userDistance,userWifi,userPool);
	displayResults(matchingResults);

}
function checkSubmit(e) {
   if(e && e.keyCode == 13) {
      document.forms[0].submit();
   }
}
checkSubmit();

const searchBtn=document.getElementById("searchButton");
searchBtn.addEventListener("click",function(){
	program();
	// console.log(searchButton)
	
})
function checkSubmit(e) {
   if(e && e.keyCode == 13) {
      document.forms[0].submit();
   }
}
checkSubmit();
////////////////////////////////////////////////////
/////////////Search Button Event Listner////////////
////////////////////////////////////////////////////


