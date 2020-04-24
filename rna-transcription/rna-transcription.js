export const toRna = (rnaStr) => {
  return rnaStr.replace(/[GCAT]/g, char => {
    return rnaHash[char];
  });
};

export const rnaHash = {
  G: 'C',
  C: 'G',
  A: 'U',
  T: 'A'
};