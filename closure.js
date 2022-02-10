//A function, and a reference to that function's outer scope
function outest(){
    function outer(){
        function inner(){
            console.log(10)
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var a = outest();
var b = a();
b();