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
hotels.push(new Hotel("The Windmill",1,5,10,"No","No"));
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
function nameSearch(){
		const searchTerm=document.getElementById("search").value;
		// console.log(`You entered ${searchTerm}`);
		// let searchValue=hotels.filter(function(hotelOption){
		// 	if (hotelOption.name===searchTerm)
		// 	{
			return searchTerm;
			// return searchValue;
			
			// return false;
// })
		
}
function printResult(searchTerm){
const searchBtn=document.getElementById("searchButton");
searchBtn.addEventListener("click",function(){
	console.log(searchTerm);
	printResult(searchTerm);
	
})
	console.log(searchTerm);
}
////////////////////////////////////////////////////
////////////Rating Processing///////////////////////
////////////////////////////////////////////////////

// 		let userRating=document.getElementById("ratingRange").value;
// 				console.log(userRating); // The value e.g. 1-5
// 		let userChoice=hotels.filter(function(ratingOption){
// 				if(ratingOption.rating==userRating){
// 				return userChoice;
// 				}
						
// })
// console.log(userChoice);
// // console.log(userRating);
// ////////////////////////////////////////////////////
// ///////////////Price Processing/////////////////////
// ////////////////////////////////////////////////////
// 		const pricePer = document.getElementById("priceRange").value;
//     				// console.log(pricePer);
//     	let priceValue=userChoice.filter(function(priceOption){
// 			if (priceOption.pricePerNight<=pricePer)
// 			{
// 			return priceValue;
// 			}
					
// })
// console.log(pricePer);
// console.log(priceValue);
// priceRange.addEventListener("input", function() {
//        priceResult.innerHTML = "£" + priceRange.value;
//   		},false);
// ////////////////////////////////////////////////////
// /////////////Distance Processing///////////////////////
// ////////////////////////////////////////////////////	
// 		const distanceFrom = document.getElementById("distanceRange").value;
//     				// console.log(pricePer);
//     	let distanceValue=priceValue.filter(function(distanceOption){
// 			if (distanceOption.distanceFromCity<=distanceFrom)
// 			{
// 			return distanceValue;
// 			}		
// })
// console.log(distanceFrom);
// console.log(distanceValue);
// distanceRange.addEventListener("input", function() {
//        distanceResult.innerHTML = distanceRange.value + " Miles from the city";
//   		},false);

// ////////////////////////////////////////////////////
// ////////////WiFi Processing/////////////////////////
// ////////////////////////////////////////////////////
// 		const selectedRadBtnWifi=document.querySelector('input[name="question"]:checked');
// 			// console.log(selectedRadBtn);
// 		let wifiChoice=distanceValue.filter(function(wifiOption){
// 			if(wifiOption.wifi===selectedRadBtnWifi.value){
// 			return wifiChoice;
// 			}
// 			// console.log("success");

// })
// console.log(wifiChoice);
// ////////////////////////////////////////////////////
// //////////Pool Processing///////////////////////////
// ////////////////////////////////////////////////////
// 		const selectedRadBtnPool=document.querySelector('input[name="question_2"]:checked');
// 		// console.log(selectedRadBtn);
// 		let poolChoice=wifiChoice.filter(function(poolOption){
// 			if(poolOption.pool===selectedRadBtnPool.value){
// 			return poolChoice;
// 			}
// 			// console.log("success");
// 			return false;

// })
// console.log(poolChoice);


// const divElem = document.getElementById("result");
// const data = (poolChoice)
// const newUl = document.createElement("ul");
// data.forEach(function(result){
//     const newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode(result.name));
//     newUl.appendChild(newLi);
// });
// divElem.appendChild(newUl); 

// ////////////////////////////////////////////////////
// }//END OF FUNCTION//
// ////////////////////////////////////////////////////


// // function resultPrint(poolChoice){
// // 	const divElem = document.getElementById("result");
	
// // 	poolChoice.forEach(function(results){
// // 		const newList = document.createElement("ul");
// // 		newList.appendChild(document.createTexNode(results));
// // 		divElem.appendChild(newList)
// // 	})

// // }

////////////////////////////////////////////////////
/////////////Search Button Event Listner////////////
////////////////////////////////////////////////////
// const searchBtn=document.getElementById("searchButton");
// searchBtn.addEventListener("click",function(){
// 	console.log(searchTerm);
// 	printResult(searchTerm);
	
// })
// if (distanceOption.distanceFromCity<=distanceSelect && distanceOption.wifi===wifiSelect) 
