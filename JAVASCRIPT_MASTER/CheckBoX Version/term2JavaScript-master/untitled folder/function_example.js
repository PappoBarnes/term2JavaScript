5. If you have got the above to work, think how you have organised and structured your code. It would probably be a good idea to have something like the following (main would be called from the event listener function). Re-factor yuor code to use a number of different functions.
*/


function getUserName(){
    const userName = document.getElementById("username").value;
  return userName;
}
function getContinent(){
    const continent = document.getElementById("continent").value;
  return continent;
}


function filterCountries(continent){
    const matchingCountries = countries.filter(function(country){
    if(country.continent == continent){
      return true;
    }
    return false;
  })
  return matchingCountries
}

function displayResults(userName, matchingCountries){
  if(matchingCountries.length>0){
      console.log(`${userName}, here is a list of countries:`)
      matchingCountries.forEach(function(country){
        console.log(country.name);
      })
  }else{
    console.log(`${userName}, no countries match`)
  }
    
}



function main(){
    // const userName = getUserName();
    const continent = getContinent();
    const matchingCountries = filterCountries(continent);
    displayResults(userName, matchingCountries);
}

const btn  = document.getElementById("formBtn");
btn.addEventListener("click",function(){
  main()
})

const selectMenu  = document.getElementById("continent");
selectMenu.addEventListener("change",function(){
  main()
})