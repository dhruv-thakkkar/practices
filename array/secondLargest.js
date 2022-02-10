let array = [1,2,3,4,5,6,7,77,33,101,44,45,100,111,112,114,113];
let largest = 0;
let Secondlargest = 0;
array.forEach(element => {
    if(element>largest){
        Secondlargest = largest;
        largest = element;
    }else{
       Secondlargest = element;
    }
});
console.log(Secondlargest)