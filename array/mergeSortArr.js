/* 
Merge two sorted arrays [1, 3, 5, 8], [2, 3, 4, 9]
into one which is also sorted without using any inbuilt js function. 
output = [1,2,3,3,4,5,8,9]
*/
let list1 = [1, 2, 4],
  list2 = [1, 3, 4];
if (list2) {
  for (let i = 0; i < list2.length; i++) {
    list1.push(list2[i]);
  }
}

if (list1) {
  for (let i = 0; i < list1.length; i++) {
    //const element = list1[i];
    //const nextElement = list1[i + 1];
    while (list1[i] > list1[i + 1]) {
      let temp = list1[i];
      list1[i] = list1[i + 1];
      list1[i + 1] = temp;
      i--;
    }
  }
}
console.log(list1);
