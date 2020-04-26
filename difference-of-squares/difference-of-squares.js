export class Squares {
  constructor(N) {
    this.N = N;
  }

  sumOfN() {
    return this.N * (Math.floor(this.N + 1) / 2)
  }

  get sumOfSquares() {
    return (this.N * (this.N + 1) * (2 * this.N + 1)) / 6
  }

  get squareOfSum() {
    return this.sumOfN() ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
