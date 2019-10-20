import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`;
}

export default function DisasterIndex(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"> <b>{props.disasterIndex } / 10.0</b></Typography>
        <StyledRating
          readOnly
          name="customized-color"
          value={props.disasterIndex}
          getLabelText={getLabelText}
          precision={0.01}
          max={10}
          size='large'
          icon={<ErrorIcon fontSize='inherit' />}
        />
      </Box>
    </div>
  );
}