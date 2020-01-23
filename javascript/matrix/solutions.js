// 1.

export class Matrix {
    constructor(matrixStr) {
        this.matrix = matrixStr.split('\n').map( row => row.split(' ').map(element => parseInt(element)) )
    }

    get rows() {
        return this.matrix;
    }

    get columns() {
        return this.matrix[0].map((column, index) => this.rows.map((row) => row[index]))
    }
}


// 2.

export class Matrix {
  constructor(matrix) {

    this.row = matrix.split('\n').map(elem => elem.split(' ').map(Number);

    this.col = this.row.reduce((acc, cur) => {
     if(acc.length === 0) {
       cur.map( e => acc.push([e]))
     } else {
       cur.map( (e, idx) => acc[idx].push(e) )
     }
     return acc;
    },[])
  }

  get rows() {
    return this.row;
  }

  get columns() {
    return this.col;
  }
}


// 3.

class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this.matrix.split('\n').map((row) => row.split(' ').map((value) => Number(value)));
  }

  get columns() {
    const columns = [];

    this.rows.forEach((row) => {
      row.forEach((element, index) => {
        columns[index] = columns[index] || [];
        columns[index].push(element);
      });
    });

    return columns;
  }
}


// 4.

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  get rows() {
    return this.matrix.split('\n')
      .map((row) => row.split(' ').map(Number))
  }

  get columns() {
    return this.rows[0].map((column, index) => {
      return this.rows.map((row) => row[index])
    })
  }
}
