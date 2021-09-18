const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

cleanText = (inputPara) => {
  // replacing special characters with empty string an including '.' in the string
  const result = inputPara.replace(/[^a-zA-Z 0-9 .]/g, "");
  return result;
};

console.log(cleanText(sentence));
