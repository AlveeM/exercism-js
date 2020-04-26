export const findAnagrams = (inputWord, anagramArr) => {
  inputWord = inputWord.toLowerCase();
  const output = [];
  const inputWordSorted = inputWord.split('').sort().join('');

  for (let word of anagramArr) {
    if (word.toLowerCase() != inputWord) {
      let wordSorted = word.toLowerCase().split('').sort().join('');
      if (wordSorted == inputWordSorted) output.push(word);
    }
  }

  return output;
}
