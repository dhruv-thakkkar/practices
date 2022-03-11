let abc = new Promise(function(res,rej){
    res("It is resolved..");
    rej("It is rejected..");
})
abc.then(function(msg){
    console.log(msg)
}).catch(function(msg){
    console.log(msg)
}).finally(function(){
   console.log( "I will execute always..")
})