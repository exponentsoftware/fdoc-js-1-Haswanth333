function triangle(length) {
  let result = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      result += "#";
    }
    result += "\n";
  }
  console.log(result);
}

triangle(6);

triangle(7);
