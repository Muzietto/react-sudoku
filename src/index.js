import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import SudokuSolver from '@src/components/organisms/SudokuSolver/SudokuSolver';
import AbsoluteSudokuGrid3 from '@src/components/molecules/AbsoluteSudokuGrid/AbsoluteSudokuGrid3';
import AbsoluteSudokuGrid2 from '@src/components/molecules/AbsoluteSudokuGrid/AbsoluteSudokuGrid2';

export default function App() {

  const EASY_SUDOKU = [0,2,0,0,0,0,1,0,2,0,0,3,0,0,0,0,4];

  const START_SUDOKU = [0,5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9];
  const HARDEST_SUDOKU = [0,8,0,0,0,0,0,0,0,0,0,0,3,6,0,0,0,0,0,0,7,0,0,9,0,2,0,0,0,5,0,0,0,7,0,0,0,0,0,0,0,4,5,7,0,0,0,0,0,1,0,0,0,3,0,0,0,1,0,0,0,0,6,8,0,0,8,5,0,0,0,1,0,0,9,0,0,0,0,4,0,0];
  const LOST_SUDOKU =    [0,0,5,0,0,3,1,0,0,8,1,9,0,0,0,2,0,7,0,0,0,8,0,0,0,0,0,0,0,0,0,5,6,0,0,2,4,9,0,0,2,0,8,0,0,7,4,6,0,0,7,3,0,0,0,0,0,0,0,0,0,7,0,0,0,7,0,8,0,0,0,6,5,8,0,0,9,5,0,0,4,0];

  const START_SUDOKU2 = [0,2,0,0,0,0,1,0,2,0,0,3,0,0,0,0,4];

  const THE_SUDOKU = START_SUDOKU;
  const sudokuSize = Math.pow(THE_SUDOKU.length - 1, 0.25);

  const startValues = THE_SUDOKU.slice(1).reduce((acc, curr, index) => {
    const rowNum = Math.floor(index / Math.pow(sudokuSize, 2));
    if (!acc[rowNum]) acc[rowNum] = [];
    acc[rowNum] = acc[rowNum].concat([curr]);
    return acc;
  }, [])

    return <Grid
        container
        direction='row'
        justify='center'
        style={{
          marginTop: 20,
          border: '1px solid green'
        }}
      >
        <Grid
          item
          xs={6}
          style={{
            border: '1px solid red'
          }}
        >
          {sudokuSize === 2
            && <AbsoluteSudokuGrid2 />}
          {sudokuSize === 3
            && <AbsoluteSudokuGrid3 />}
          <SudokuSolver
            size={sudokuSize}
            sudoku={THE_SUDOKU}
            startValues={startValues}
          />
        </Grid>
    </Grid>;
}


ReactDOM.render(<App />, document.getElementById('root'));
