export class Triangle {
  constructor(s1, s2, s3) {
    this.sides = [s1, s2, s3];
  }

  isEquilateral() {
    return this.isValidTriangle() && SIDE_PERMUTATIONS.every(([a, b]) => this.sides[a] == this.sides[b]);
  }

  isIsosceles() {
    return this.isValidTriangle() && SIDE_PERMUTATIONS.some(([a, b]) => this.sides[a] == this.sides[b]);
  }

  isScalene() {
    return this.isValidTriangle() && !SIDE_PERMUTATIONS.some(([a, b]) => this.sides[a] == this.sides[b]);
  }

  isValidTriangle() {
    return !this.sides.some(side => side == 0)
           && SIDE_PERMUTATIONS.every(([a, b, c]) => this.sides[a] + this.sides[b] >= this.sides[c]);
  }
}

export const SIDE_PERMUTATIONS = [
  [0, 1, 2],
  [1, 2, 0],
  [2, 0, 1]
];