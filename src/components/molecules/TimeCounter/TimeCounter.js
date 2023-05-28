import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function TimeCounter({
  seconds = 0,
}) {

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return <Grid
    container
    direction = 'row'
    >
    <Grid item>
      <Typography variant='h3'>{`${pad2(hours)}:`}</Typography>
    </Grid>
    <Grid item>
      <Typography variant='h3'>{`${pad2(minutes - (hours * 60))}:`}</Typography>
    </Grid>
    <Grid item>
      <Typography variant='h3'>{pad2(seconds - (minutes * 60))}</Typography>
    </Grid>
  </Grid>
}

function pad2(digit) {
  if (digit < 10) return `0${digit}`;
  return `${digit}`;
}
