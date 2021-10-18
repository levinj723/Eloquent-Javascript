// Im going down to Carolina or Georgia

// const JOURNAL = require("./04_data/code/journal");

// function journalEvents (journal) {

//     let events = [];
// for (let entry of journal){

//     for ( let event of entry.events){

//         if (!events.includes(event)){

//             events.push(event);
//         }


//     }

//     }

// return events;

// }

// console.log(journalEvents(JOURNAL));

// function tableFor( event, journal){

//     let table = [0 , 0, 0 , 0 ];

// for (let entry of journal){

//     let arraycount = 0;

//     if(entry.events.includes(event)){

//         arraycount += 1 ;

//     }
//     if (entry.squirrel == true){
//         arraycount += 2 ; 

//     }
//     table[arraycount] +=1;

// }

// return table; 

// }

// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt((table[2] + table[3]) *
//     (table[0] + table[1]) *
//     (table[1] + table[3]) *
//     (table[0] + table[2]));
//     }

// function getPhiTable(JOURNAL){

//     let phiTable = [];

// for (let entry of journalEvents(JOURNAL)){

//     phiTable.push (phi(tableFor(entry,JOURNAL)));
// }

// return phiTable;

// }

// // let max = getPhiTable(JOURNAL).reduce(function(a, b) {
// //     return Math.max(a, b);
// // }, 0);

// let max = Math.max(...getPhiTable(JOURNAL));

// console.log(max);


// for (let entry of getPhiTable(JOURNAL)){
//     console.log(entry);
// }
// console.log (tableFor(journalEvents(JOURNAL)[16], JOURNAL));
// console.log(journalEvents(JOURNAL)[25]);

// console.log (getPhiTable(JOURNAL).indexOf(max));




// function range( start, end, myStep = 1)
// {
//     let trigger = true;
    
//     let i = start;

//     theRange = [];
//     while ( trigger)
//     {
        

//         if (myStep < 0 ){
//             if(i <= end){
//                 trigger = false;
//                 break;
//             }
//         }else if(i>=end) 
//         {
//             trigger = false;
//             break;
//         }
        
//         theRange.push(i);

//         i += myStep;
        
        

//     }

// return theRange;
// }
// function theSum (numbers){
// let total = 0;
//     for (let number of numbers ){

//         total += number;
//     }

// return total;
// }

// console.log(range(1,10,2));



// function reverseArray (myArray =[]){

//     let tempArray = []; 
//     let counter = 0;

//     while (myArray.length > 0)
//     {
//         counter++;
//         tempArray.push (myArray.pop());
      
        
//     }
//     myArray = tempArray; 
// return myArray;

// }

// console.log(reverseArray([1,2,3,4,5,6,7,8]));





// function elementToList (element, myObject){


    
// let myObj = { value: element, rest: myObject};



// return myObj;



// }

// function arrayToList ( myArray = [] ){

// let List ={};

// while ( myArray.length > 0)
// {
// List = elementToList(myArray.pop(), List);



// // console.log(myArray);


// }
// return List;

// }


// function listToArray(myList ){

//     arrayVar = [];
// for (let node = myList; node.value; node = node.rest){

    
//     arrayVar.push(node.value);

// }
// return arrayVar;
// }




// function nth (myList, myNumber ){

//    let nthValue = 0;
//    let counter = 0; 

// for (let node = myList; counter <= myNumber; node = node.rest){

//     nthValue = node.value;
//     counter++;
    
// }
// return nthValue;
// }


// firstArray = [1,2,3];
// secondArray = listToArray(arrayToList(firstArray));


// console.log(nth(arrayToList([1,16,3,4,5,6]),2));

// console.log(listToArray(arrayToList([1,2,3,4,5,6])));

// function prepend( thisElement, thisList){

//     return elementToList(thisElement,thisList);
// }



// function Equal (a,b){

// if (a == b )
// return true;
// else 
// return false;
// }


// e = 17;
// f = 6;


// function deepEqual(c,d){

//   if (!(typeof(c) == 'object')){
//      return Equal(c,d);
//   }


//     let g = Object.entries(c);
//     let h = Object.entries(d);
   


//     // console.log(g[0][0]);
//     // console.log(h.length);


//     if (!Equal( g.length , h.length)){
//         return false; 
//     }


//     for (let i = 0; i < g.length; i++ ){


//     if (!Equal(g[i][0], h[i][0]) || !Equal(g[i][1], h[i][1]) )
//     return false;
   

//     }

    
//     return true; 

// }

    


    
    



// console.log(deepEqual(e,f));


let labels = [];
let i =0;
let repeat = (5, i => {
  labels.push(`Unit ${i + 1}`);
});

function noisy(f) {
    return (...args) => {
      console.log("calling with", args);
      let result = f(...args);
      console.log("called with", args, ", returned", result);
      return result;
    };
  }
  noisy(Math.min)(3, 2, 1);
console.log(Math.min(3,2,1))

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  }
  
  console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  }));
