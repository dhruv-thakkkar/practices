let words = {
  "G": "G",
  "()": "o",
  "(al)": "al",
};
let str = "";
let command = "G()()()()(al)";
for(let i=0 ; i< command.length ; i ++){
    let word = command.charAt(i);
    let nextWord = command.charAt(i+1);
    if(word == "G"){
        str = str + words["G"]
    }
    if(word == "("){
        if(nextWord == ")"){
            str = str +  words["()"]
        }else{
           str = str +  words["(al)"]
        }
    }
}
console.log(str)