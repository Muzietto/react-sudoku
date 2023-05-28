import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default function SudokuCell({
  value,
  startValue,
}) {
  return <>
  <Typography
    variant='h2'
    color={`${(startValue === 0) ? 'primary' : 'secondary'}`}
  >
    {(value) ? value : '_'}
  </Typography>
  </>
}
