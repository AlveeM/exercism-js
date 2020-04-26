export const countWords = (inputStr) => {
  const wordsArr = inputStr.toLowerCase().match(/\w+(?:[']\w+)*/g);
  const output = {};

  wordsArr.forEach(word => (word in output) ? output[word]++ : output[word] = 1);

  return output;
};
