export const gigasecond = (moment) => {
  const GIGASECOND = 1e12;
  const newMoment = new Date(Date.parse(moment) + GIGASECOND);
  return newMoment;
};
