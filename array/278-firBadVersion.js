var solution = function (isBadVersion) {
  return function (n) {
    let low = 1;
    let high = n;
    let mid = Math.floor((low + high) / 2);
    console.log("input --->", n);
    console.log("low--->", low);
    console.log("mid--->", mid);
    console.log("high--->", high);
    if (isBadVersion(mid)) {
      high = mid
      //mid = mid--;
    } else {
      mid = mid++;
    }
    return mid;
  };
};

var isBadVersion = function (x) {
  if (x >= 3) {
    return true;
  }
  return false;
};
console.log("result-->", solution(isBadVersion)(5));
console.log("result should be-->", 3);
