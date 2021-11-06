
var jsonData = window.localStorage.getItem('myJsonData');
var pageToLoad = window.localStorage.getItem( 'page'); 
var borderCountryPage; 

var myJson = JSON.parse(jsonData); 


$(function(){

$(".hero button").click( function() {

    window.location.href = "index.html"; 

}); 

$(".border-country").click(function(){

    
    

    for( i = 0; i < myJson.length; i++){
        if ( myJson[i].country_name == $(this).text()){
            borderCountryPage = i; 
        }

    }
    loadedCountry.setAll(borderCountryPage); 

})


})

loadedCountry = {
    flag: function (index) {document.querySelector(".flag-other").style.backgroundImage = " url( images/" + myJson[index].flagUrl + ")"},
    country: function(index) {document.querySelector(".country").innerText = myJson[index].country_name},
    native: function(index) {document.querySelector(".native").innerText = myJson[index].native  },
    population: function(index) {document.querySelector(".population").innerText = myJson[index].population},
    region: function(index) {document.querySelector(".region").innerText = myJson[index].population },
    sub_region:function(index){ document.querySelector(".sub-region").innerText = myJson[index].sub_region},
    capital: function(index) {document.querySelector(".capital").innerText = myJson[index].capital},
    top_level_domain: function (index) {document.querySelector(".domain").innerText = myJson[index].top_level_domain},
    currencies: function(index){ document.querySelector(".currencies").innerText = myJson[index].currencies},
    setLanguages: function(index){
        if(typeof myJson[index].languages != "string"){
            document.querySelector(".languages").innerText =  myJson[index].languages.join();
        }else{
            document.querySelector(".languages").innerText = myJson[index].languages; 
        };
        
      
    },
    setBorderCountries: function(index){

        var tempLength = myJson[index].border_countries.length; 
        var borderCountries = document.querySelector(".border-countries"); 
        removeAllChildren(borderCountries);
        var button = []; 
        for (i = 0; i < tempLength; i++){
            button[i] = document.createElement('button');
            button[i].classList.add("border-country"); 
            button[i].classList.add("alternateDark"); 
            button[i].innerText = myJson[index].border_countries[i]; 
            borderCountries.appendChild(button[i]); 

        }
    },
    setAll: function(index){
        this.flag(index);
        this.country(index); 
        this.native(index); 
        this.population(index); 
        this.region(index); 
        this.sub_region(index); 
        this.capital(index); 
        this.top_level_domain(index); 
        this.currencies (index); 
        this.setLanguages(index); 
        this.setBorderCountries(index); 


    }


}

loadedCountry.setAll(pageToLoad); 

 function removeAllChildren(elem) {
   while(elem.firstElementChild){
      // console.log(elem.firstElementChild)

     elem.firstElementChild.remove(); 
   }


}


{/* <h2 class="country">Germany</h2>
                <p >Native Name: <span class="native">Belgie</span>
                <p >Population: <span class="population"> 81,770,900</span>
                </p>
                <p>Region: <span class="region">Europe</span></p>
                <p>Sub Region: <span class="sub-region">West Europe</span></p>
                <p class="p-capital">Capital: <span class="capital">Berlin</span></p>
                <p>Top Level Domain: <span class="domain">Europe</span></p>
                <p>Currencies: <span class="currencies">West Europe</span></p>
                <p class= "p-languages">Languages: <span class="languages">Berlin</span></p>
                
                   <div class="border-countries-heading">
                       Border Countries:
                   </div>
                <div class="border-countries">
                    
                   <button class="border-country alternateDark">
                       France
                   </button>
                   <button class="border-country alternateDark">
                       Germany
                   </button>
                    <button class="border-country alternateDark">
                        Netherlands
                    </button> */}