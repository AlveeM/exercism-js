export const isPangram = (str) => {
  const letters = new Set (str.toLowerCase().match(/[a-z]/g))
  return letters.size == 26;
};
