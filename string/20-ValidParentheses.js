let s = "()";
flag = true
let stack = [];
if(s.length%2==0){
    for (let i = 0; i < s.length; i++) {
    
      let currentSymbol = s.charAt(i);
      if (currentSymbol == "{") {
        stack.push("}");
      } else if (currentSymbol == "[") {
        stack.push("]");
      } else if (currentSymbol == "(") {
        stack.push(")");
      } else if(stack.pop() !==currentSymbol){
        flag =  false
      }
    }
}else{
    flag = false
}
if(stack.length>0){
  flag = false
}
console.log(flag);


/* 
()

1 (
s = ]

-----------------
2 ) == )
s = empty

*/

