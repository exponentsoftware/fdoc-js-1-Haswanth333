const arrOne = [1, 4, 6, 2, 1];

const arrTwo = [1, 4, 6, 2, 3];

function checkUniqueness(array) {
  const arr = array.filter((value, index) => array.indexOf(value) === index);

  console.log(arr);

  if (array.length !== arr.length) {
    console.log("Items of aray are not unique");
  } else {
    console.log("Items of aray are unique");
  }
}

checkUniqueness(arrOne);

checkUniqueness(arrTwo);
