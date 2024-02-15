

function lesson1() {
  let res = null;

  
  //let rowIsLine = false;

  // loop through each row

  function checkIfRowIsEqual() {
    // declare 2d array
    const matrix = [
      ['x', 'h', 'x'],
      ['o', 'x', 'o'],
      ['s', '3', 's'],
    ];

    // row is complete or not
    let rowLine = true;
  
    for (let i=0; i < matrix.length; i++) {
      // each row
      // go to next row
      rowLine = true;

      // first element of each row, will be compared with other elements.
      let currentCell = matrix[i][0]; 

      // loops over each row
      for (let j=0; j < matrix[i].length; j++) {
        
        console.log(matrix[i][j])
        // if: even one cell is empty =: all row does not contain the same symbol.
        if (matrix[i][j] === '') {
          rowLine = false;
          // this row is not equal. go to the next row.
          break;
        }

        if (currentCell !== matrix[i][j]) {
          rowLine = false;
          break;
        }

      }
      console.log('=============')
      
      // we found complete row
      if (rowLine) break;
    }

    return rowLine;
  }

  //res = checkIfRowIsEqual();

  // loops through matrix cols
  const checkColIsEquals = () => {
    
    const matrix = [
      ['x', 'o', 'o'],
      ['x', 'x', 'x'],
      ['o', 'o', 'x'],
    ];

    // loop through cols and check for all equal values

    /**
      col=0
        row=0, row=1, row=3
      col=1 

              0    0
      matrix[row][col]

              1    0
      matrix[row][col]
     */
    let colIsLine = true;

    for (let col=0; col < matrix[0].length; col++) {
      // each col
      colIsLine = true;
      // first cell in a col
      // [0][0], [0][1] ...
      let firstCell = matrix[0][col];
      // loop as many rows
      for (let row=0; row < matrix.length; row++) {
        console.log(matrix[row][col]);

        // is: cell is empty =: col is not a line
        if (firstCell === '') {
          colIsLine = false;
          break;
        }

        if (firstCell !== matrix[row][col]) {
          colIsLine = false;
          break;
        }
      }
      console.log('out of col')
      // if: col is a line
      if (colIsLine) break;

      // go to next col
    }

    return colIsLine;
  }

  res = checkColIsEquals();

  // loop matrix diagonally

  const checkMatrixDiagonally = () => {

    const matrix = [
      ['x', 'o', 'x'],
      ['o', 'x', 'x'],
      ['x', 'o', 'x'],
    ];

    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    
    // number of diagonal lines
    const diagonalLines = (rowLen + colLen) - 1; // 5
    const midPoint = Math.floor(diagonalLines / 2) + 1;

    let itemsInDiagonal = 0;

    //const items = [];
    let isDiagonalLine = false;

    for (let i=1; i <= diagonalLines; i++) {
      
      let rowIndex = 0;
      let colIndex = 0;

      // each diagonal
      let firstDiagonalCell = '';

      if (i <= midPoint) {
        itemsInDiagonal++;

        for (let j=0; j < itemsInDiagonal; j++) {
          //console.log('i:', i, j)
          rowIndex = (i - j) - 1;
          colIndex = j;
          
          // first cell on the diagonal line
          if (j === 0) firstDiagonalCell = matrix[rowIndex][colIndex];

          // only midPoint can have: rowLen elements
          //console.log(i, midPoint);
          if (i === midPoint) {
            console.log(matrix[rowIndex][colIndex], firstDiagonalCell);
            // if: empty string =: go to next diagonal line
            if (matrix[rowIndex][colIndex] === '') {
              console.log('---');
              isDiagonalLine = false;
              break;
            }
  
            // if: elements are not equals =: it's not a line
            if (firstDiagonalCell !== matrix[rowIndex][colIndex]) {
              console.log('---');
              isDiagonalLine = false;
              break;
            }
            
            // midPoint had all equals elements
            isDiagonalLine = true;
          }
          //console.log(matrix[rowIndex][colIndex]);
          //items.push(matrix[rowIndex][colIndex]);
        }
      }
      // passed mid--line
      else {
        // lines get smaller again
        itemsInDiagonal--;
        for (let j = 0; j < itemsInDiagonal; j++) {
          rowIndex = (rowLen - 1) - j;
          colIndex = (i - rowLen) + j;

          //items.push(matrix[rowIndex][colIndex]);
        }
      }

      // if: found one diagonal line with equal elements break
      if (isDiagonalLine) break;
    }

    return isDiagonalLine;
  }

  //res = checkMatrixDiagonally();

  const checkDiagonalTopRight = () => {

    const matrix = [
      ['o', '1', 'x'],
      ['t', 'o', '2'],
      ['x', '7', 'o'],
    ];

    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    
    // number of diagonal lines
    const diagonalLines = (rowLen + colLen) - 1; // 5
    const midPoint = Math.floor(diagonalLines / 2) + 1;

    let itemsInDiagonal = 0;

    //const items = [];
    let isDiagonalLine = false;

    for (let i=diagonalLines; i >= 0; i--) {
      
      let rowIndex = 0;
      let colIndex = 0;

      // each diagonal
      let firstDiagonalCell = '';

      if (i >= midPoint) {
        itemsInDiagonal++;

        for (let j=0; j < itemsInDiagonal; j++) {
          //rowIndex = (i - j) - 1;
          //colIndex = j;

          /*
          [0, 2], [0,1],[1, 2]
          */ 
         //console.log(i, j, rowLen)
          rowIndex = j; // [0], [0, 1], [0, 1, 2]
          colIndex = (i - rowLen) + j; // (1 - 0) - 1 = 0, [(2-0) - 1 = 1, (2-1) - 1 = 0 ]

          // first cell on the diagonal line
          if (j === 0) firstDiagonalCell = matrix[rowIndex][colIndex];

          // only midPoint can have: rowLen elements
          //console.log(i, midPoint);
           if (i === midPoint) {
             console.log(matrix[rowIndex][colIndex], firstDiagonalCell);
             // if: empty string =: go to next diagonal line
             if (matrix[rowIndex][colIndex] === '') {
               console.log('---');
               isDiagonalLine = false;
               break;
             }
  
             // if: elements are not equals =: it's not a line
             if (firstDiagonalCell !== matrix[rowIndex][colIndex]) {
               console.log('---');
               isDiagonalLine = false;
               break;
             }
            
             // midPoint had all equals elements
             isDiagonalLine = true;
           }
          //console.log(matrix[rowIndex][colIndex]);
          //items.push(matrix[rowIndex][colIndex]);
        }
      }
      // passed mid--line
      else {
        // lines get smaller again
        itemsInDiagonal--;
        for (let j = 0; j < itemsInDiagonal; j++) {
          /*
          # remaining lines under mid--points
          i=4
          i=5

          [row, col]
          [1, 0], [2, 1]
          [2, 0]
          */
          //owIndex = (rowLen - 1) - j;
          //olIndex = (i - rowLen) + j;

          //console.log(i, j)
          rowIndex = (colLen - i) + j;
          colIndex = j;
          
          //items.push(matrix[rowIndex][colIndex]);
        }
      }

      // if: found one diagonal line with equal elements break
      if (isDiagonalLine) break;
    }

    return isDiagonalLine;
  }

  //res = checkDiagonalTopRight();

  console.log(res);
}

const array2d = {
  main: () => {
    lesson1();
  }
};

export default array2d;