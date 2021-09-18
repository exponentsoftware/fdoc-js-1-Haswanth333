function randomNumbers(len) {
  var arr = [];
  while (arr.length < len) {
    var r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
}

randomNumbers(7);
