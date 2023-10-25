var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
  this.front = null;
};

/**
 * @param {number}
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.stack1.length == 0) {
    this.front = x;
  }
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack2.length > 0
    ? this.stack2[this.stack2.length - 1]
    : this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length == 0 && this.stack2.length == 0;
};

var obj = new MyQueue();
obj.push(18);
obj.push(19);
obj.push(20);
obj.push(21);
obj.push(22);
var param_2 = obj.pop();
console.log("obj pop-->", param_2);
var param_3 = obj.peek();
console.log("obj peek-->", param_3);
var param_4 = obj.empty();
console.log("obj empty-->", param_4);
