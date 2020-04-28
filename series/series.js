export class Series {
  constructor(numStr) {
    this._num = numStr;
  }

  get digits() {
    return [...this._num].map(Number);
  }

  slices(n) {
    if (n > this._num.length) throw new Error('Slice size is too big.');

    // var: store result of digits()
    const numArr = this.digits;
    // var: array for storing subsets
    const output = [];
    // var: max index until slice is possible
    const maxIdx = numArr.length - n;

    // iterate over numArr
    for (let i = 0; i <= maxIdx; i++) {
      // push slice to output
      output.push(numArr.slice(i, n));
      // increment end position of slice
      n++;
    }

    return output;
  }
}
