import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

const SliderWithText = ({classes, label, value, min, max, onChange}) => 
  <div className={classes.root}>
    <Typography>{label + " " + value}</Typography>
    <Slider
        classes={{ container: classes.slider }}
        value={value}
        min={min}
        max={max}
        onChange={(event, value) => {
            onChange(parseInt(value, 10));
          }
        }
    />
  </div>

SliderWithText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderWithText);