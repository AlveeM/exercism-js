export class HighScores {
  constructor(scores) {
    this._scores = scores;
    this._sortFlag = false;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this._scores);
  }

  get personalTopThree() {
    if (!this._sortFlag) {
      this._scores.sort((a, b) => b - a);
      this._sortFlag = true;
    } else {
      return this._scores.slice(0, 3);
    }

    return this._scores.slice(0, 3);
  }
}
