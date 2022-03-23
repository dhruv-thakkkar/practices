//The bracket notation allows you to access properties by name stored in a variable:

var obj = { "abc" : "hello" };
var x = "abc";
var y = obj[x];
console.log(y) //print hello

var obj = { "abc" : "hello" };
var x = "abc";
var y = obj.x;
console.log(y) //print undefined

//If property name is number. 
var ob = {
    1: 'One',
    7 : 'Seven'
  }
  ob.7  // SyntaxError
  ob[7] // "Seven"
  
//If property name has special character. 
var ob = {
    'This is one': 1,
    'This is seven': 7,
  }  
  ob.'This is one'  // SyntaxError
  ob['This is one'] // 1
  