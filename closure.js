function abc() {
  function def() {
    console.log("inside def");
  }
  return def;
}
let def = abc();
def();
