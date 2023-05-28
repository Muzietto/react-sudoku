import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import SudokuCell from '@src/components/atoms/SudokuCell/SudokuCell';

export default function SudokuRow({
  size = 3,
  values = [],
  startValues = [0,10,20,30,40,50,60,70,80],
}) {
  return <Grid
    container
    direction='row'
    justify='space-between'
  >
    {values.map((value, index) => <Grid
      item
      key={`sudoku_cell${index}`}
    >
      <SudokuCell
      value={value}
      startValue={startValues[index]}
    />
  </Grid>)}
  </Grid>
}
