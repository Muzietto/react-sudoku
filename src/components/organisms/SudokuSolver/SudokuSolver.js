import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SudokuRow from '@src/components/molecules/SudokuRow/SudokuRow';
import PropTypes from 'prop-types';
import {
  reactExecutor,
} from '@src/model/sudoku/sudoku';
import TimeCounter from '@src/components/molecules/TimeCounter/TimeCounter';

export default function SudokuSolver({
  size = 3,
  sudoku = [],
  startValues = [],
}) {

  const [values, setValues] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
     reactExecutor({
       startCells: sudoku,
       cells: sudoku,
       position: 1,
       candidate: 1,
       STARTMILLIS: new Date().getTime(),
       ENDMILLIS: 0,
     }, size, setValues, setSeconds);
  }, []);

  const rows = values.slice(1).reduce((acc, curr, index) => {
    const rowNum = Math.floor(index / Math.pow(size, 2));
    if (!acc[rowNum]) acc[rowNum] = [];
    acc[rowNum] = acc[rowNum].concat([curr]);
    return acc;
  }, [])
    return <Grid
              container
              direction='column'
              justify='center'
              style={{
                marginTop: 20,
                border: '1px solid green'
              }}
            >
            <Grid item style={{ padding: 30 }}>
            <TimeCounter seconds={seconds} />
            <Divider />
            </Grid>
          {rows.map((row, index) => <Grid item key={`sudoku_row${index}`}>
            <SudokuRow
              size={size}
              values={row}
              startValues={startValues[index]}
            />
          </Grid>)}
        </Grid>;
}
