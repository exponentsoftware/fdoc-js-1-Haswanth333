// function reverseArray(arr) {
//   const arr1 = arr.pop();
//   const arr2 = arr.shift();
//   arr.unshift(arr1);
//   arr.push(arr2);
//   console.log(arr);
// }

reverseArray(["A", "B", "C"]);

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  //   return newArray;
  console.log(newArray);
}
