class Matrix {
    rows: number[][];
    columns: number[][];
    constructor(block: string) {
      this.rows = block.split('\n').map(r => r.split(' ').map(Number));
      this.columns = this.rows.map((_r, ix) => this.rows.map(row => row[ix]))
    }
  }
  
  export default Matrix
