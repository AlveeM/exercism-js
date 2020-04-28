export const clean = (str) => {
  // test for punctuations and letters
  if (/[@!:]/g.test(str)) throw new Error('Punctuations not permitted');
  if (/[a-z]/gi.test(str)) throw new Error('Letters not permitted');

  // var: store only digits from str
  let num = str.replace(/[^0-9]/gi, '');
  // var: store num length
  const len = num.length;

  // test number length validity
  if (len < 10) throw new Error('Incorrect number of digits');
  if (len > 11) throw new Error('More than 11 digits');

  // test country code validity
  if (len == 11 && num[0] != 1) {
    throw new Error('11 digits must start with 1');
  }

  // if: valid 11 digits; update num to 10 digits
  if (len == 11 && num[0] == 1) num = num.slice(1);

  // test area and exchange code validity
  if (num[0] == 0) throw new Error('Area code cannot start with zero');
  if (num[0] == 1) throw new Error('Area code cannot start with one');
  if (num[3] == 0) throw new Error('Exchange code cannot start with zero');
  if (num[3] == 1) throw new Error('Exchange code cannot start with one');

  return num;
};
