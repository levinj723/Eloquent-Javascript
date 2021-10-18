// class rectangle {};

// console.log(Object.getPrototypeOf(rectangle));

// let person1 = new Object();

// person1.name ='Chris';
// person1['age'] = 38;
// person1.greeting = function () {

//     alert(' Hi! I\'m' + this.name +'.');
// };

// let person2 = Object.create(person1); 

// // console.log(person2._proto_);

// console.log(person1.constructor);
// console.log(person2.constructor.name);


// console.log(Object.getPrototypeOf(person1));

// class MultiplicatorUnitFailure extends Error {};

// function Multiply(a,b) {
//     let result = a*b;
//     if (result < 100 && result > 50 ) return (`Result greater than 50 but less than 100.  Result: ${result} `);
//     if (result <= 50 ) return (`Result not greater than 50.  Result: ${result} `);
//     throw new MultiplicatorUnitFailure("Invalid Unit " + result);
//     }
    
 
// // for (;;) {
// //     try {

// // let c = 7;
// // let d = 17;

// // let dir = Multiply (c,d);

// // console.log( dir);
// // break;
// // } catch (e) {
// // if (e instanceof MultiplicatorUnitFailure) {
// // console.log("Not a valid unit. Try again.");
// // } else {
// // throw e;
// // }
// // }
// // }


// const box = {
//     locked: true,
//     unlock() { this.locked = false; },
//     lock() { this.locked = true; },
//     _content: ["hello"],
//     get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this._content;
//     }
// };

// function thisFunction (myString) {

    
//     if (myString.length >= 15 ){
//         throw new Error( "Contents to large.")
//     } 


//     box._content.push (myString );
//     console.log (box.content); 
    

    
// }

// function withBoxUnlocked ( myFunction) {

//     try {
//     box.unlock(); 
//     myFunction ("HOLY FOOKA");
//     }
//     catch (e) {
//         console.log (e);
//         if ( e == "Error: Contents to large.") console.log ("Shita Fooka.");
//         else if ( e == "Error: Locked!") console.log ( "FOOKa ME");
//         else throw e; 
//     } 
//     finally {
//     box.lock();
//     }


// }

// withBoxUnlocked ( thisFunction);
// console.log ( box.locked);
// // console.log ( box.content);