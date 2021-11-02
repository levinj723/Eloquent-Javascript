var request = new XMLHttpRequest();
request.open ("GET", "data.json",false)
var jsonData; 

request.onload = function(){

   var stringData = this.responseText;
    jsonData = JSON.parse(stringData);
    console.log(jsonData[0].company);
    
}

request.send(); 

var main = document.querySelector('.main');

var mainBox = document.querySelector('.main__box');
var header = document.querySelector(".header");
var myFilterButton = document.querySelector(".filterButton"); 
var thisFilter = document.querySelector(".filters");
var imgRemove = document.createElement("img");
imgRemove.className ="remove";
// imgRemove.addEventListener("click",myRemove);
imgRemove.src = "images/icon-remove.svg"
var clearFilter = document.createElement("div");
clearFilter.classList.add("clear")
clearFilter.innerText ="Clear";
var outerFilter = document.createElement("div");
outerFilter.className = "outer";

var newNode =[]; 

removeAllChildren(main);


function createAllCards() {

    for (let i = 0; i < jsonData.length; i++){
       newNode[i] = mainBox.cloneNode(true); 

        main.appendChild(newNode[i]); 

    }
}

createAllCards(); 

var newFilterButton = []; 
var imgRemoves = []; 

function createAllFilters(){

    removeAllChildren(thisFilter);
    removeAllChildren(outerFilter)

    for (let i = 0; i < myFilter.length; i++){
        imgRemoves[i] = imgRemove.cloneNode(true);
        imgRemoves[i].className = "remove"; 
        newFilterButton[i] = myFilterButton.cloneNode(true); 
        newFilterButton[i].innerText = myFilter[i];
        newFilterButton[i].appendChild(imgRemoves[i]);
        outerFilter.appendChild(newFilterButton[i]);

     }

        thisFilter.appendChild(outerFilter); 
        clearFilter.addEventListener("click",myClear)
        thisFilter.appendChild(clearFilter); 


for ( i = 0; i < imgRemoves.length; i++){
    imgRemoves[i].addEventListener("click",myRemove);
}

}


var first = document.querySelectorAll(".first");

var second = document.querySelectorAll(".second");
var third = document.querySelectorAll(".third"); 

var company = document.querySelectorAll(".company");
var logo = document.querySelectorAll(".logo");
var myNew = document.querySelectorAll(".new");
var featured = document.querySelectorAll(".featured");
var position = document.querySelectorAll(".position");
var role = document.querySelectorAll(".role"); 
var level = document.querySelectorAll(".level");
var postedAt = document.querySelectorAll(".postedAt");
var contract = document.querySelectorAll(".contract");
var myLocation = document.querySelectorAll(".location"); 


function removeAllChildren(parent){
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  }



function setFirst() {

for (i = 0; i < jsonData.length; i++){

    if (!jsonData[i].new){
        first[i].removeChild(myNew[i]); 
    }
    if (!jsonData[i].featured){
        first[i].removeChild(featured[i]); 
    }

}

}
function setThird() {

    for ( i = 0; i < jsonData.length; i++){

        for (j of jsonData[i].languages){
            var temp = document.createElement("div");
            temp.innerHTML = j; 
            temp.classList.add ("bottom"); 
            third[i].appendChild(temp);
            
        }
        for (j of jsonData[i].tools){
           
            var temp = document.createElement("div"); 
            temp.innerHTML = j; 
            temp.classList.add("bottom");
            third[i].appendChild(temp); 
            
        }

    }


}
function setAllElse () {

    for (i = 0; i < jsonData.length; i++){

        var myLogo = jsonData[i].logo; 
        myLogo = myLogo.substring(2,myLogo.length); 


        company[i].innerHTML = jsonData[i].company;
        logo[i].innerHTML = `<img src=${myLogo} alt="">`;
        position[i].innerHTML = jsonData[i].position;
        role[i].innerHTML = jsonData[i].role;
        level[i].innerHTML = jsonData[i].level; 
        postedAt[i].innerHTML = jsonData[i].postedAt;
        contract[i].innerHTML = jsonData[i].contract;
        myLocation[i].innerHTML = jsonData[i].location; 
    }


}




setFirst(); 
setThird(); 
setAllElse(); 

var myFilter = []; 
var thirds = document.querySelectorAll(".third"); 
var allBottom = document.querySelectorAll(".bottom"); 
var theseBottom = [];
// console.log(allBottom);

var nodesToAdd = []; 
var oldHeight; 
$(function(){
oldHeight = $(".main").css("padding-top"); 
$(".bottom").click(function(){

if (!myFilter.some(b => $(this).text()==b)){

var newHeight = $(".filters").outerHeight(); 
$(".main").css('padding-top',newHeight);


myFilter.push($(this).text());
// $(".filters").css('display','flex'); 
$(".filters").slideDown().css('display','flex');


filterBy(); 
createAllFilters(); 
}

});



});



function myRemove (e){
var num; 
console.log(myFilter.findIndex(b => b == e.target.parentElement.innerText)); 
num = myFilter.findIndex(b => b == e.target.parentElement.innerText); 

removed = myFilter.splice(num,1);


    filterBy(); 
createAllFilters(); 

if( myFilter.length < 1) 
{

    $(function(){

        $(".filters").css('display','none'); 
        $(".main").css('padding-top',oldHeight);
    });
};

$(function(){

var newHeight = $(".filters").outerHeight(); 
$(".main").css('padding-top',newHeight);
    
});


}

function myClear (){

myFilter = []; 

filterBy(); 
createAllFilters(); 

    $(function(){

        $(".filters").css('display','none'); 
        $(".main").css('padding-top',oldHeight);
    });

  
}


function filterBy () {

   var theseNodes = []; 
   var pass;

        for ( j =0; j < thirds.length; j++){
            pass = true; 

              for (k of allBottom){

                if (k.parentElement == third[j]){
                    theseBottom.push(k); 

                }

              }
            

              for (i of myFilter){

                if (!theseBottom.some(b => b.innerHTML == i))
                {
                    pass = false; 
                   
                }

            }

            if (pass){
                
                theseNodes.push(newNode[j]); 
            }

                    theseBottom =[]; 
                


        }

removeAllChildren(main); 

for (i of theseNodes){

    main.appendChild(i); 
};
        


}
