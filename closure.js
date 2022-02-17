//A function, and a reference to that function's outer scope
    function outer(){
        function inner(){
            return 10;
        }
        return inner;
    }
var b = outer();
console.log(b())