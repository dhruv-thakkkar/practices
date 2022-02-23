const printWithoutReturn = (name) => ("Hello "+name) //as in single line it does not need return word.

const printWithReturn = (name) => {
    return ("Hello "+name); //as used multiple lines it will need return
}

console.log(printWithoutReturn("dhruv"))
console.log(printWithReturn("dhruv"))

/* Example 3 */
let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
      return this; //arrow function cannot use its own THIS
  },
  thisInRegular() {
    return this;
},
};
console.log(me.thisInArrow());
console.log("===============");
console.log(me.thisInRegular());


this.qwe = "why is qwe working ?"
let arrow = () =>{
    this.abc = "why is abc not working ?"
    console.log(this)
}
console.log(this)