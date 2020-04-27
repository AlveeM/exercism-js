export const isIsogram = (str) => {
  const charMap = {};
  str = str.toLowerCase();

  for (let char of str) {
    if (charMap[char] && isLetter(char)) {
      return false;
    } else {
      charMap[char] = 1;
    }
  }

  return true;
};

const isLetter = (char) => {
  return /[a-z]/.test(char)
}