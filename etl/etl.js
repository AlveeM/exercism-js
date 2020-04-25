export const transform = (oldData) => {
  return Object.entries(oldData).reduce((acc, [key, values]) => {
    values.forEach(char => acc[char.toLowerCase()] = +key)
    return acc;
  }, {})
};
