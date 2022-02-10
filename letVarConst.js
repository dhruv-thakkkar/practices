const lol = 30 ;
let age = 30;
var cake = 30;
if(1 == 1){
     const lol = 20 ;
     let age = 20;
     var cake = 20;
     
     //console.log(foo); // ReferenceError
     let foo = "Foo";
      console.log(foo); // Foo

      //console.log(doo); // Undefined
      console.log("inner age-->",age); // Foo
      console.log("inner cake-->",cake); // Foo

}
console.log("lol--->",eval(lol))
console.log("age-->",age); //prints 30 
console.log("cake-->",cake); //prints 20

//let replaceMeifYouCanNoob = 30;
//let replaceMeifYouCanNoob = 40;
//console.log(replaceMe) //redeclaration error
