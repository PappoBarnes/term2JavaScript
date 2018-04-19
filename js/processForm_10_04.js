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
hotels.push(new Hotel("The Lakeside",5,200,3,"Yes","Yes"));
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
////////////Search Processing///////////////////////
////////////////////////////////////////////////////
function processData(){

////////////////////////////////////////////////////
////////////Data Processing///////////////////////
////////////////////////////////////////////////////
		let userRating=document.getElementById("ratingRange").value;
					console.log(userRating); // The value e.g. 1-5
		let pricePer = document.getElementById("priceRange").value;
    				console.log(pricePer);
    	let distanceFrom = document.getElementById("distanceRange").value;
    				console.log(distanceFrom);
		let selectedRadBtnWifi=document.querySelector('input[name="question"]:checked');
					console.log(selectedRadBtnWifi);
		let selectedRadBtnPool=document.querySelector('input[name="question_2"]:checked');
					console.log(selectedRadBtnPool);
}
////////////////////////////////////////////////////
///////////////Filter Processing/////////////////////
////////////////////////////////////////////////////
function filterData(userRating, pricePer){
		let userChoice=hotels.filter(function(ratingOption){
			if(ratingOption.rating==userRating){
				return true;
				}
				return false;
				})
		return userChoice;

		
    	let priceValue=userChoice.filter(function(priceOption){
			if (priceOption.pricePerNight<=pricePer){
				return true;
				}
				return false;
				})	
	return priceValue;}
////////////////////////////////////////////////////
/////////////Distance Processing///////////////////////
////////////////////////////////////////////////////	
		
//     	let distanceValue=priceValue.filter(function(distanceOption){
// 			if (distanceOption.distanceFromCity<=distanceFrom){
// 				return true;
// 				}
// 				return false;
// 				})
//     	// return distanceValue;	
// console.log(distanceFrom);
// console.log(distanceValue);
// ////////////////////////////////////////////////////
// ////////////WiFi Processing/////////////////////////
// ////////////////////////////////////////////////////
// 		let wifiChoice=distanceValue.filter(function(wifiOption){
// 			if(wifiOption.wifi===selectedRadBtnWifi.value){
// 				return true;
// 				}
// 				// console.log("success");
// 				return false;

// })
// 		// return wifiChoice;
// console.log(wifiChoice);
// ////////////////////////////////////////////////////
// //////////Pool Processing///////////////////////////
// ////////////////////////////////////////////////////
// 		let poolChoice=wifiChoice.filter(function(poolOption){
// 			if(poolOption.pool===selectedRadBtnPool.value){
// 			return true;
// 			}
// 			// console.log("success");
// 			return false;

// 			})
// 		// return poolChoice;
// console.log(poolChoice);

// const divElem = document.getElementById("result");
// const data = (poolChoice)
// const newUl = document.createElement("ul");

// data.forEach(function(result){
//     const newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode(result.name));
//     newUl.appendChild(newLi);
// })
// divElem.appendChild(newUl);


////////////////////////////////////////////////////
// }//END OF FUNCTION//
////////////////////////////////////////////////////


// function resultPrint(poolChoice){
// 	const divElem = document.getElementById("result");
	
// 	poolChoice.forEach(function(results){
// 		const newList = document.createElement("ul");
// 		newList.appendChild(document.createTexNode(results));
// 		divElem.appendChild(newList)
// 	})


function program(){
	let result = processData();
	let filterChoices=filterData(result);
	displayResults(filterChoices);
}
////////////////////////////////////////////////////
/////////////Search Button Event Listner////////////
////////////////////////////////////////////////////
const searchBtn=document.getElementById("searchButton");
searchBtn.addEventListener("click",function(){
	// console.log(searchTerm);
	program();
	
})

