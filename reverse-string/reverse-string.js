export const reverseString = (str) => {
  var output = '';
  for (var i = str.length - 1; i >= 0; i--) {
    output += str[i]
  };
  return output;
};
