var p = {
    "p1": [1,2,3],
    "p2": "value2",
    "p3": "value3"
};

/* for (let key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }
}
 */

for(let key in p){
    if (p.hasOwnProperty(key)) {
    console.log(key)
    }
}