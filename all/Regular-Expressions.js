// let re1 = new RegExp("abc");
// let re2 = /\d*/; 
// console.log(re2);
// console.log(re2.test("ssheysheysheyshey"));

// let cartoonCrying = /boo(hoo)/i;
// console.log(cartoonCrying.test("Boohoooohoohooo"));

// let match = /boo+(hoo+)+/i.exec("BooHoooohooHoOo");
// console.log(match);

// const x = 1;
// function evalAndReturnX(code) {
// eval(code);
// return x;
// }
// console.log(evalAndReturnX("var x = 2"));

// function partialBuildUri(scheme) {
//     return function (domain) {
//       return function (path) {
//         return `${scheme}://${domain}/${path}`;
//       };
//     };
//   }
  
//   // A function could apply them all at once.
//   function buildUri(scheme, domain, path) {
//     return partialBuildUri(scheme)(domain)(path);
//   }
  
//   // Or apply a few to create a flexible system of functions for reuse.
//   function buildHttpsExercismUri(path) {
//     return partialBuildUri('https')('exercism.org');
//   }

// console.log(buildHttpsExercismUri('A'));

// let colors = ['blue', 'yellow','black', 'orange', 'red','orange'];
// let button = document.getElementById('button');

// button.addEventListener('click', function(){
//     let randomColor = colors[Math.floor((Math.random()*colors.length))];
//     document.getElementById('container').style.backgroundColor = randomColor;
// });