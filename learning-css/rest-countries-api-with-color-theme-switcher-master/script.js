 var country =  function(country_name,native,population,region,sub_region,capital,top_level_domain,currencies, languages,border_countries,flagUrl) {


    this.country_name = country_name;
    this.native = native;  
    this.population = population;  
    this.region = region; 
    this.sub_region = sub_region;
    this.capital = capital;  
    this.top_level_domain = top_level_domain; 
    this.currencies = currencies; 
    this.languages = languages; 
    this.border_countries = border_countries; 
    this.flagUrl = flagUrl; 

 }


Belgium = new country("Belgium","Belgi",11319511, "Europe","Western Europe","Brussels",".be","Euro",["Dutch","French","German"],["France","USA","Netherlands"], "1200px-Flag_of_Germany.svg.png"); 

UnitedStates = new country ("USA","The States",300000000,"Americas","North America", "Washington D.C", ".usa", "USD",["English","Spanish"],["Canada","Mexico"], "flag-Stars-and-Stripes-May-1-1795.jpg");

Brazil = new country ( "Brazil","Land of Football", 206135893, "Americas","South America","Brasilia",".bra","BD", "Portugese",["Uraguay","Argentina","Paraguay","Bolivia","Peru","Colombia","Venezuela","Guyana","Suriname"], "Flag-Brazil.jpg");

Iceland = new country ("Iceland", "Not as cold as you think", 334300, "Europe","West Europe","Reykjavik",".IC","IDE","English","","Flag-Iceland.jpg");

Afghanistan = new country ("Afghanistan","Paradise",27657145,"Asia","West Asia","Kabul",".AF","Afghani","Afghani",["Pakistan","Turkmenistan","Uzbekistan","Tajikistan"],"Flag-Afghanistan.jpg");

Aland = new country ( "Aland Islands","Who knows", 28875,"Europe","West Europe","Marlehamn",".AE","AUSD","English","","255px-Flag_of_Åland.svg.png");

Albania = new country ( "Albania", "The armpit of Europe", 2886026,"Europe","East Europe","Tirana",".AL","EURO","Albanian",["Montenegro","Kosovo","North Macedonia","Greece"], "Flag-Albania.jpg");

Algeria = new country ("Algeria","Technologically advanced", 40400000, "Africa","West Africa","Algiers",".AG","Algier","Algerian",["Tunisa","Libya","Niger","Mali","Mauritania","Morocco"],"1200px-Flag_of_Algeria.svg.png");

var allCountries = [Belgium, UnitedStates, Brazil, Iceland, Afghanistan, Aland, Albania, Algeria];


var allCountriesJson = JSON.stringify(allCountries); 
// console.log(allCountriesJson);
localStorage.clear();
localStorage.setItem("myJsonData",allCountriesJson);



// function typedArrayToURL(typedArray, mimeType) {
//    return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
//  }

//  myStoredJson = typedArrayToURL(allCountriesJson,'application/json' ); 





// console.log(myStoredJson); 


var card = document.querySelector(".card"); 

var flags = document.querySelector(".flags")

var search = document.querySelector(".searchMenu");

var searchMenu = document.querySelector(".searchMenuItem"); 


var duplicateCard = []; 

removeAllChildren(flags); 

for ( i = 0 ; i < allCountries.length; i++){


    duplicateCard[i] = card.cloneNode(true); 
    flags.appendChild(duplicateCard[i]);
 

}
var myFlag = document.querySelectorAll("div.flag");
var myCountryVariable = document.querySelectorAll(".country"); 
var nativeName  = document.querySelectorAll(".native")
var myPopulation = document.querySelectorAll(".population"); 
var myRegion = document.querySelectorAll(".region"); 
var mySubRegion  = document.querySelectorAll(".sub-region")
var myCapital = document.querySelectorAll(".capital");
var myDomain = document.querySelectorAll(".domain"); 
var myCurrencies  = document.querySelectorAll(".currencies")
var myLanguages = document.querySelectorAll(".languages");

var cards = document.querySelectorAll(".card"); 



for ( i = 0; i < duplicateCard.length; i++){

   
   myFlag[i].style.backgroundImage = " url( images/" + allCountries[i].flagUrl + ")";
   myCountryVariable[i].innerText = allCountries[i].country_name; 
   myPopulation[i].innerText = allCountries[i].population; 
   myRegion[i].innerText = allCountries[i].region; 
   myCapital[i].innerText = allCountries[i].capital; 
}


  function removeAllChildren(elem) {
   while(elem.firstElementChild){
      // console.log(elem.firstElementChild)

     elem.firstElementChild.remove(); 
   }


}



 $(function() {

$(".mode").click(function(){
  $("header").toggleClass("alternate");
   $(".moon").toggleClass("moonAlternate");
   $(".searchBar").toggleClass("alternate");
   $(".searchBar").toggleClass("alternateDark");
   $(".search").toggleClass("alternate");
   $(".search").toggleClass("alternateDark");
   $(".magnifyGlass img").toggleClass("moonAlternate");
   $(".hero").toggleClass("otherAlternate"); 
   $(".hero").toggleClass("alternateVeryDark"); 
   $(".filterBar").toggleClass("alternateDark"); 
   $(".filterBar").toggleClass("alternate");
   $(".filterMenu").toggleClass("alternateDark"); 
   $(".filterMenu").toggleClass("alternate");
   $(".dropDown").toggleClass("moonAlternate"); 
   $(".filter").toggleClass("alternate");
   $(".info").toggleClass("alternateDark"); 
   $(".info").toggleClass("alternate");
   $(".flags").toggleClass("otherAlternate"); 
   $(".flags").toggleClass("alternateVeryDark");
   $(".searchMenu").toggleClass("alternateDark"); 
   $(".searchMenu").toggleClass("alternate");

});

$(".filterMenu").outerWidth( $(".filterBar").outerWidth()); 

$(window).resize(function(){
$(".filterMenu").outerWidth( $(".filterBar").outerWidth()); 
$(".searchMenu").outerWidth( $(".searchBar").outerWidth()); 
});


$(".filterBar").click(function(){

$(".filterMenu").slideToggle();
$(".flags").css("position","static"); 
// $(".flags").css("bottom", "0px");

});

$(".search").click(function(){

   $(".filterMenu").slideUp();
   $(".flags").css("position","static"); 
   // $(".flags").css("bottom", "0px");
   
   });


$(".hero").mouseleave(function(){

   $(".filterMenu").slideUp();
   $(".flags").css("position","static"); 
   // $(".flags").css("bottom", "0px");
   
   });




$(".filterRegion").click(function() {

   thisRegion = $(this).text(); 
   var filterResult = []; 
   

for (i = 0; i < allCountries.length; i++){

 if ( myRegion[i].innerText == thisRegion){
    console.log ("nice");

    filterResult.push(i); 
 

 }
}
   console.log(filterResult); 

      removeAllChildren(flags); 
      for (i of filterResult){
         flags.appendChild(duplicateCard[i]);
      }

   
     

   
   });




   $(".search").keyup(function(){

      // $(".search").css('color','black'); 
      var searchValue = $(".search").val(); 
      $(".searchMenu").show(); 
      // $(".searchMenu").outerWidth() = $(".searchBar").outerWidth(); 


      var Searches = function (countryName, searchResults, searchIndex, count){
         this.countryName = countryName; 
         this.searchResults = searchResults; 
         this.searchIndex = searchIndex;
         this.count = count; 
      };

     var mySearch = []; 
     var searchIter;  
     var j  = 0 ; 


      for ( i = 0; i < duplicateCard.length; i++){

       if (myCountryVariable[i].innerText.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 && searchValue != "" ){
         
         searchIter = new Searches(myCountryVariable[i].innerText, i, myCountryVariable[i].innerText.toLowerCase().indexOf(searchValue.toLowerCase()),j ); 
         j++; 
         
         console.log(searchIter.searchIndex)
         mySearch.push(searchIter);
         // console.log(myCountryVariable[i].innerText);
       }
    
      }
      

      removeAllChildren(search); 
      var searchItems = []; 
      mySearch.sort( (a,b) => {
         let x = a.countryName.toLowerCase();
         let y = b.countryName.toLowerCase();
         if (x < y) {return -1;}
         if (x > y) {return 1;}
         return 0;
      })

      mySearch.sort( (a,b) => {
      return a.searchIndex - b.searchIndex; 
      })

     
      var one = ""; 
      var two = "";
      var three = ""; 
      

      for (i = 0; i < mySearch.length; i++){
         one = mySearch[i].countryName.slice(0,mySearch[i].searchIndex);
         two = mySearch[i].countryName.slice(mySearch[i].searchIndex, mySearch[i].searchIndex + searchValue.length);
         three = mySearch[i].countryName.slice(mySearch[i].searchIndex + searchValue.length, mySearch[i].countryName.length );

         console.log ("string one: " + one); 
         console.log("string two: " + two); 
         console.log( "string three: " + three); 

         searchItems[i] = searchMenu.cloneNode(true); 
         searchItems[i].innerHTML = one + `<span style = "color: lightBlue" >${two}</span>` + three; 
         search.appendChild(searchItems[i]); 
      }


      document.addEventListener('keydown',function(e){

         if(e.code == "Enter"){
            
            $(".search").val(""); 
            removeAllChildren(search); 
            removeAllChildren(flags); 
            for ( i = 0; i < mySearch.length; i++){

               flags.appendChild(duplicateCard[mySearch[i].searchResults])
            }


         }
      });

      $(".searchMenuItem").click(function(){


         

         var newArray = mySearch.filter((a)=> a.countryName == $(this).text());

         console.log(newArray);
         $(".search").val(""); 
         removeAllChildren(search); 
         removeAllChildren(flags); 
         flags.appendChild(duplicateCard[newArray[0].searchResults]); 

      })

  
    


           

   })


   $(".card").click(function(){


      var tempCountry = $(this).find(".country").text(); 
      var countryIndex; 
      for ( i = 0; i < myCountryVariable.length; i ++ ){

         if ( myCountryVariable[i].innerText == tempCountry){
            countryIndex = i; 
         }
      }
      localStorage.setItem("page",countryIndex);
      window.location.href = 'detail_page.html';

   
   }); 
   




});









