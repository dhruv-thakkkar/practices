var obj = {num : 2}
var addToThis = function(a,b,c){
    return this.num + a + b + c;
}
console.log(addToThis.call(obj,1,2,3))

console.log(addToThis.apply(obj,[1,2,3]))