export const classify = (num) => {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');

  const aliquotSum = findAliquotSum(num);

  if (aliquotSum == num) return 'perfect';
  if (aliquotSum > num) return 'abundant';
  if (aliquotSum < num) return 'deficient';
};

export const findAliquotSum = (num) => {
  const factors = findFactors(num);

  return factors.reduce((acc, next) => acc + next) - num;
}

export const findFactors = (num) => {
  if (num == 1) return [1];

  const factors = [1];
  for (let i = 2; i < Math.floor(num); i++) {
    if (num % i == 0) factors.push(i);
  }
  factors.push(num);

  return factors;
}