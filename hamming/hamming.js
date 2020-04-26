export const compute = (strand1, strand2) => {
  const s1Len = strand1.length;
  const s2Len = strand2.length;

  if (strand1 == strand2) return 0;

  if (strand1 == "") {
    throw new Error("left strand must not be empty");
  } else if (strand2 == "") {
    throw new Error("right strand must not be empty");
  }

  if (s1Len != s2Len) {
    throw new Error("left and right strands must be of equal length");
  }

  let hammingDistance = 0;

  for (let i = 0; i < s1Len; i++) {
    if (strand1[i] != strand2[i]) hammingDistance++
  }

  return hammingDistance;
};
