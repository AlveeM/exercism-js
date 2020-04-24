export const age = (planet, seconds) => {
  return +(seconds / (31557600 * OrbitalPeriods[planet.toLowerCase()])).toFixed(2);
};

export const OrbitalPeriods = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}