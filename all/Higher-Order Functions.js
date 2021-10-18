// let myArray = [[1,2,3], [4,5,6], [7,8,9]];

const SCRIPTS = require("./05_higher_order/code/scripts");

// let reducer = (a,b) => a.concat(b);


//    console.log( myArray.reduce((a,b) => a.concat(b)));

// console.log(myArray[0].concat(myArray[1]));




// function setInitial ( a){

//    return a;

// }

// function test (realValue, testValue)
// {
// if( realValue == testValue)
// return true;
// else
// return false;

// }

// function update (){

// return Math.floor(Math.random() * 100);

// }

// function forLoop (finalValue){

//     let final = setInitial(finalValue);
//     let initial = 0; 

//     loopNumber = 0;

// while (!test(initial, final)){

//     initial = update(); 

//     loopNumber +=1
// }

// return loopNumber;
// }

// function findAverage (j){

//     let count = 0; 

// for( let i = 1; i <= 100000; i++){

    

//     count += forLoop(j);

    
// }

// return count/100000;

// }
// console.log (findAverage(1))

// let orange = (myElem) => {

//     myElem < 50;

// }

 
// let thisArray = [];
// function every (array, test, d) {

// for ( let i of array){

//     if (!test(i,d))
//     return false;
// }




// return true;
// }


// let myArray = [1, 41, 10,16,4,5,6];

 
// // console.log ( every([1,51,12,16,4,5,6],orange,51));

// console.log ( myArray.some(orange));

// const array = [111, 211, 311, 41, 511];

// // checks whether an element is even
// let even = (element) => element < 50 ;

// console.log(array.some(even));

// console.log(SCRIPTS.length);

// function characterCount(script) {
//     return script.ranges.reduce((count, [from, to]) => {
//       return count + (to - from);
//     }, 0);
//   }


//   function characterScript(code) {
//     for (let script of SCRIPTS) {
        
//       if (script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })) {
//         return script;
//       }
//     }
//     return null;
//   }

// //   console.log(characterScript('h'.codePointAt(0)));

//   function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
        
//       let name = groupName(item.codePointAt(0));
//     //   console.log(name.name);
     
//       let known = counts.findIndex(c => c.name == name);
//       if (known == -1) {
//         counts.push({name, count: 1});
//       } else {
//         counts[known].count++;
//       }

      
//     }

//     // return counts;
    
    
//     counts = counts.reduce((a,b)=> a.count > b.count ? a:b);

  
//     console.log(counts.name.name);
// //   console.log(counts.name.direction);
    
//     // let thisIndex = SCRIPTS.filter((a=>a.name == counts.name)).direction;

//     // return thisIndex;
//   }
  
//   let myString = "Hey,你好哈利阴茎";

//   let thisArray = countBy(myString,characterScript);

// //   console.log(this[1].name);





// class vec {

// constructor(x,y){

//     this.x = x;
//     this.y = y; 

// }

// plus( vect){

//     return new vec (this.x +vect.x, this.y + vect.y);

// }


// minus (vect){


//     return new vec (this.x -vect.x, this.y -vect.y);
// }

// get length() {

//     return Math.sqrt( Math.pow(this.x,2)+ Math.pow(this.y,2));

// }




// }

// console.log(new vec (1,2).plus(new vec(2,3)));

// console.log(new vec (1,2).minus(new vec(2,3)));

// console.log (new vec ( 3,4).length);


// class group { 

//     constructor (){

//         this.gruppen = [];
//         this.tempItem =0;
//     }

//  has(item) { return this.gruppen.includes(item);

// }

// addItem(itemOne){

// if ( !this.has (itemOne))
// this.gruppen.push(itemOne);

// }

// removeItem(itemtwo)
// {

//     if (this.has(itemtwo))
//     // console.log(this.gruppen.indexOf(itemtwo));
//      this.gruppen.splice(this.gruppen.indexOf(itemtwo),1);

// }

// static from (iterable2){

//     let gruppa = new group;

//     for (let i of iterable2){
        
//         gruppa.addItem(i);
//     }
//     return gruppa;
// }

// *[Symbol.iterator] (){

    
// // let index = 0;

// // console.log(this.gruppen[index]);

// // if (index == this.gruppen.length){
// // return {done: true};
// // }


// // let value = { value: this.gruppen[index]}

// // index++;

// // return {value, done:false};


// for ( let i = 0; i < this.gruppen.length;i++)
// {
//    yield this.gruppen[i]; 


// }

// }

// }


// let Group = group.from([10,20]);

// console.log(Group.has(30));
// Group.addItem(10);
// Group.removeItem(20);
// console.log(Group.has(20));
// for ( let value of group.from(['a','b','c'])){

//     console.log(value);

// }

// let map = {one: false, two: true, hasOwnProperty: true};

// // Fix this call


// console.log (hasOwnProperty.call(map,"three"));