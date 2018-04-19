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
	const selectedRadBtnWifi=document.querySelector('input[name="question"]:checked');
		if(selectedRadBtnWifi.value===null){
			 const msg = '<span style="color:red;">You must select a WiFi option</span><br /><br />';
                    document.getElementById('result').innerHTML = msg;
                    // let x = document.getElementById("myRadio").required;
                    return false
		}
	console.log(selectedRadBtnWifi);
	return selectedRadBtnWifi;
}
 function getPool(){
	const selectedRadBtnPool=document.querySelector('input[name="question_2"]:checked');
	console.log(selectedRadBtnPool);
	return selectedRadBtnPool;
}
////////END OF CAPTURE FUNCTIONS////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////FILTERING///////////////////////////////
////////////////////////////////////////////////////
function filterResults(ratingRange,budget,distance,selectedRadBtnWifi,selectedRadBtnPool){
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
			if(userWifi.wifi===selectedRadBtnWifi.value||selectedRadBtnWifi.value==null){
			return true;
			}
			// console.log("success");
			return false;	
			})

 		// return matchWifi;
 		let matchPool=matchWifi.filter(function(userPool){
			if(userPool.pool===selectedRadBtnPool.value){
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
    		newLi.appendChild(document.createTextNode(` ${result.name} is available - ${result.pricePerNight} Per Night.`));
    		newUl.appendChild(newLi);

divElem.appendChild(newUl); 
})
	}else{
		 const msg = 'No Matches Found.';
                    document.getElementById('result').innerHTML = msg;
                    return false
			// alert("No Match Found!");
			// const divElemValid = document.getElementById("result");
			// const newHead = document.createElement("h2");
			// newHead.appendChild(document.createTextNode(`No Match Found!`));
			// divElemValid=appendElement(newHead);
	}

}

// const divElem = document.getElementById("result");
// const data = (result)
// const newUl = document.createElement("ul");

// data.forEach(function(result){
//     const newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode(result.name));
//     newUl.appendChild(newLi);
// })
// divElem.appendChild(newUl); 
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
// const selectMenu  = document.getElementById("ratingRange");
// selectMenu.addEventListener("change",function(){
//   program()
// })


//////// END OF RESULTS FUNCTION//////////////



// const divElem = document.getElementById("result");
// const data = (poolChoice)
// const newUl = document.createElement("ul");

// data.forEach(function(result){
//     const newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode(result.name));
//     newUl.appendChild(newLi);
// })
// divElem.appendChild(newUl); 
// ////////////////////////////////////////////////////
// }//END OF FUNCTION//
////////////////////////////////////////////////////


// function resultPrint(poolChoice){
// 	const divElem = document.getElementById("result");
	
// 	poolChoice.forEach(function(results){
// 		const newList = document.createElement("ul");
// 		newList.appendChild(document.createTexNode(results));
// 		divElem.appendChild(newList)
// 	})

// }

////////////////////////////////////////////////////
/////////////Search Button Event Listner////////////
////////////////////////////////////////////////////


