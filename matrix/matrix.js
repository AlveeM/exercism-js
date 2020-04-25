export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split('\n')
                  .map(
                    row => row.split(' ').map(Number)
                  );
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    const rows = this.matrix;
    return rows[0].map(function buildArr(_, i) {
      return rows.map(function buildSubArr(row) {
        return row[i];
      })
    })
  }
}
