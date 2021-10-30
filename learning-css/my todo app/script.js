let deleteThis = document.querySelectorAll(".delete");
let newText = document.querySelector('.header__create >[type = "text"]');
let mainInner = document.querySelector(".main__inner");
let currentNumber = 0; 
let completeList = []; 
let activeList = []; 


let allActiveComplete = document.querySelectorAll(".list__item");

function removeAllChildren(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}


allActiveComplete.forEach(a => {

  a.addEventListener("click", (e) =>{

console.log(e.target.id);
    if (e.target.id =="active"){
      removeAllChildren(mainInner);
      activeList.forEach(b => {
        mainInner.appendChild(b);
      });
    };

    if (e.target.id =="complete"){
      removeAllChildren(mainInner);
      completeList.forEach(b => {
        mainInner.appendChild(b);
      });
      };


      if (e.target.id =="all"){
        removeAllChildren(mainInner);
        completeList.forEach(b => {
          mainInner.appendChild(b);
        });
        activeList.forEach(b => {
          mainInner.appendChild(b);
        });
        };

    
  } 
  
  )
  
});









function addClickEventDelete(a){
  a.addEventListener("click",(e) =>{
    mainInner.removeChild(e.currentTarget.parentElement);

    console.log(e.currentTarget.id);
    thisIndex = returnIndex(activeList,e.currentTarget.id);
    console.log(thisIndex);
    if ( thisIndex >= 0){
    deleted = activeList.splice(thisIndex,1);
    };
    
    thisIndex = returnIndex(completeList,e.currentTarget.id);
    if ( thisIndex >= 0){
    deleted = completeList.splice(thisIndex,1);
    };
})};

function addClickEventDone(a){
  a.addEventListener("click",(e) =>{
    if (e.target.checked){
    completeList.push(e.target.parentElement);
    thisIndex = returnIndex(activeList,e.target.id);
    deleted = activeList.splice(thisIndex,1);
    } else{
    activeList.push(e.target.parentElement);
    thisIndex = returnIndex(completeList,e.target.id);
    deleted = completeList.splice(thisIndex,1);
    }
    
}
)


};

function returnIndex (thisList, targetChar){
  count = 0; 
  thisIndex = 0; 
  for( let i of thisList){

    if (i.title === targetChar){
      console.log("true");
      thisIndex = count;
      return thisIndex;
    }
      
      count++;
      
  }
 
return -1; 
}



function createNewList (thisText){

let newList = document.createElement("div");
newList.classList.add("list__other");

let newInput = document.createElement("input");
newInput.type = "checkbox";
addClickEventDone(newInput);

let newLabel = document.createElement("label");

let newSecondInput = document.createElement("input");
newSecondInput.type = "text";
newSecondInput.value = thisText.value; 

let newDelete = document.createElement("div");
newDelete.classList.add("delete");
newDelete.innerHTML = '<img src="images/icon-cross.svg" alt ="">';
addClickEventDelete(newDelete);

newSecondInput.draggable = false; 
newList.appendChild(newInput);
newList.appendChild(newLabel);
newList.appendChild(newSecondInput);
newList.appendChild(newDelete);

newInput.id = String.fromCharCode(currentNumber+65);
newLabel.setAttribute("for",String.fromCharCode(currentNumber+65));

newDelete.id = String.fromCharCode(currentNumber+65);
newList.title = String.fromCharCode(currentNumber+65);

newList.draggable = true;

newList.addEventListener('dragstart', drag)
newList.addEventListener('dragover', allowDrop);
newList.addEventListener('dragenter',myDragEnter)
newList.addEventListener('dragleave',myDragLeave)


newList.addEventListener('drop', drop);

currentNumber++; 
mainInner.appendChild(newList);
activeList.push(newList);


// console.log(newList.innerHTML);
// console.log(newSecondInput.value);

}



function allowDrop(allowdropevent) {
  // allowdropevent.target.style.borderTop = "5px solid limeGreen";
  allowdropevent.preventDefault();

  if (allowdropevent.target.getAttribute("draggable") == 'false'){
    allowdropevent.dataTransfer.dropEffect = 'none';
  }
  

  
}
function myDragEnter (dragEnterEvent){
  if( dragEnterEvent.target.className == ('list__other')){
dragEnterEvent.target.style.borderTop = "2px solid hsl(220, 98%, 61%)";
  };
}

function myDragLeave (dragLeaveEvent){
  if(dragLeaveEvent.target.className == ('list__other')){
  dragLeaveEvent.target.style.borderTop = ' 1px solid hsl(233, 14%, 35%)';
  dragLeaveEvent.target.style.borderBottom = ' 1px solid hsl(233, 14%, 35%)';
  };
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.getAttribute('title'));
  console.log(dragevent.target.getAttribute('title'));
  // mainInner.removeChild(dragevent.target);
  dragevent.target.style.color = 'green';
}

function drop(dropevent) {
  dropevent.preventDefault();
  var data = dropevent.dataTransfer.getData("text");
  console.log(document.querySelector(`[title = "${data}"]`));
  dropevent.target.style.border = 'initial';
  mainInner.insertBefore(document.querySelector(`[title = "${data}"]`),dropevent.target);
  // document.getElementById("drag").style.color = 'black';
}



// "<div class="list__other">
// <input type="checkbox" id="b">
// <label for="b"></label>
// <input type="text" placeholder="Create a new todo...">
// <div class="delete"><img src="images/icon-cross.svg" alt=""></div>
// </div>  "



newText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      createNewList(newText);
      newText.value = ''; 
      
    }
});