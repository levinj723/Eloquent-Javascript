

let myText = document.getElementById('textBody');
let nextButton = document.getElementById('next');
let exitButton = document.getElementById('exit');
let saveButton = document.getElementById('save');
let previousButton = document.getElementById('previous')
let myLabel = document.getElementById('label');

let currentPage = 0; 


saveButton.addEventListener("click", saveFunc);
nextButton.addEventListener("click", nextPage);
previousButton.addEventListener("click",previousPage);
exitButton.addEventListener("click", clearPage)
myLabel.innerText= `Sticky Note:  ${currentPage+1}`;

saveState = [];
textBody.value = "";
saveFunc();  


function saveFunc (){
   

saveState[currentPage] = (myText.value);


}



function nextPage (){

   

    if (saveState.length-2 < currentPage){
        textBody.value = ""; 
        currentPage++;
        saveFunc();
        myLabel.innerText= `Sticky Note:  ${currentPage+1}`;
        return 0; 
    }

        currentPage++; 
        myLabel.innerText= `Sticky Note:  ${currentPage+1}`;
    textBody.value = saveState[currentPage];
    

}
function previousPage(){
if (currentPage > 0){
    currentPage--;
    myLabel.innerText= `Sticky Note:  ${currentPage+1}`;
    textBody.value = saveState[currentPage];

}

}

function clearPage(){

    saveState = []; 
    currentPage = 0; 
    textBody.value = '';
    saveFunc(); 
    myLabel.innerText= `Sticky Note:  ${currentPage+1}`;

}