//https://www.youtube.com/watch?v=gvicrj31JOM
/* Example 1 */

function Video(){
    this.title = "1243";
  //  console.log(this)
}
let constructor = new Video(); //if this called in constructor then THIS will reference an empty object

/*  Example 2 */

function NormalFunction(){
    this.title = "1243";
    console.log(this)

}
NormalFunction(); //if this called in normal function than THIS will reference the global object that is the Window Object.