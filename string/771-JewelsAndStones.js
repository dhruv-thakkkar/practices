let jewels = "aA", stones = "aAAbbbb";
let jewelsArr = jewels.split("")
count = 0;

for(let i=0 ; i< stones.length ; i ++){
    let stone = stones.charAt(i);
    if(jewelsArr.includes(stone)){
        count ++;
    }
}
console.log(count)
