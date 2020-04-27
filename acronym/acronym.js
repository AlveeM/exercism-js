export const parse = (string) => {
  const firstLetters = string.match(MATCH_FIRST_LETTER)
  return firstLetters.join('').toUpperCase();
};

const MATCH_FIRST_LETTER = /(?<=^|[_ -])[a-z]/gi;
// ?<= positive lookbehind
// ^ start of the string
// | or
// [_-] match a single character in the list
// [a-z] match a single character in the list
// g -> global flag
// i -> case insensitive flag