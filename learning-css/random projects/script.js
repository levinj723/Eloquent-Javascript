
function person(name) {

  const obj = {}; 
  obj.name = name; 
  obj.greeting = function (){

    return "my name is " +  this.name; 

  }

  return obj; 


}; 

Dicky = person("Dicky"); 

console.log ( Dicky.greeting()); 

function bigPerson(name) {

this.name = name; 
this.greeting = function (){

  return "My name is " + this.name + " and I like beefstu";
}



}


FatGeorge = new bigPerson("george"); 


console.log(FatGeorge.__proto__); 

FatHarry = Object.create(FatGeorge); 

FatHarry.name = "Harry"





