// alert("wazap");

let thisClass = document.getElementsByClassName("header-link");

let sum = 0; 

for ( let thisElement of thisClass){

    sum += thisElement.clientWidth;
}
    
    // alert(sum) ;

let listOne = document.querySelectorAll(".first-link-list");
let listTwo = document.querySelectorAll(".second-link-list");
let listThree = document.querySelectorAll(".third-link-list");
let listFour = document.querySelectorAll(".fourth-link-list");

let linkOne = document.getElementById("link-1");
let linkTwo = document.getElementById("link-2");
let linkThree = document.getElementById("link-3");
let linkFour = document.getElementById("link-4");

linkOne.addEventListener("click", showList(listOne));
linkTwo.addEventListener("click",showList(listTwo) );
linkThree.addEventListener("click",showList(listThree) );
linkFour.addEventListener("click",showList(listFour) );




function showList( list){

    for ( let elem of list ){
        elem.classList.toggle("activate-my-list")
    }
}