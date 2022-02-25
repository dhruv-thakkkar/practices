/* 
A promise in Javascript is an object which represent the eventual completion or failure of an asynchronous operation. 

It has three states:
Pending
Resolved and
Rejected.

The finally method receives a callback which is executed on all promise fulfillment and rejection. 
Here we can write 'cleanup' code which need to be executed always regardless of promise outcome.
*/


let cleanRoom = function () {
  return new Promise(function (res, rej) {
    res("Room is cleaned...");
  });
};

let removeGarbage = function (message) {
  return new Promise(function (res, rej) {
    res(message + " Garbage is removed...");
  });
};

let winIceCream = function (message) {
  return new Promise(function (res, rej) {
    res(message + " Won the iceCream...");
  });
};

cleanRoom()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIceCream(result);
  })
  .then(function (result) {
    console.log(result + " Finished...");
  })
  .finally(function () {
    console.warn("what the hack ?");
  });

Promise.all([cleanRoom(), removeGarbage(), winIceCream()])
  .then(function (result) {
    console.log("all finished...");
  })
  .catch(function (result) {
    console.log(result);
  });
