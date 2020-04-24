export const decodedValue = (colorArr) => {
  // update array with only first two elements
  colorArr = colorArr.slice(0, 2);
  // store index of 1st color as string
  const colorOne = String(colorCode(colorArr[0]));
  // store index of 2nd color as string
  const colorTwo = String(colorCode(colorArr[1]));
  // return the concat of strings converted to a number
  return Number(colorOne + colorTwo)
};

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];