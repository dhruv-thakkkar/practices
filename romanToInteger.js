let rom = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let s = "MCMXCIV";
let sum = 0;
for(let i = 0; i < s.length;i++){
    let current = rom[s.charAt(i)]
    let next = rom[s.charAt(i+1)]
    if(current<next){
        sum = sum - current;
    }else{
        sum = sum + current;
    }
}
console.log(sum)