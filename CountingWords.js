function countWords(inputString) {
  let count = 0;

  let str = inputString.split(/\W+/);
  for (let i = 0; i < str.length; i++) {
    if (str[i].length !== 1) {
      count += 1;
    }
  }
  console.log("Number of words excluding single letters are", count);
}

const sentence =
  "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher";

countWords(sentence);
