import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import React from 'react';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    inline: {
        display: 'inline-block'
    },
    sliderValue: {
        display: 'inline-block',
        padding: '15px'
    }
  };

const MoreLessInput = ({classes, label, value, changeValue, step = 1}) => 
    <>
        <Typography>{label}</Typography>
        <div className={classes.inline} onClick={() => changeValue(value - step)}>
            <Fab size="small" color="primary">
                <ArrowBack/>
            </Fab>
        </div>
        <Typography className={classes.sliderValue}>
            {value}
        </Typography>
        <div className={classes.inline} onClick={() => changeValue(value + step)}>
            <Fab size="small" color="primary">
                <ArrowForward/>
            </Fab>
        </div>
    </>
        
MoreLessInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MoreLessInput);