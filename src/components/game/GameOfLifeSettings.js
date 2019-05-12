import React from 'react';
import SimpleSlider from '../input/SimpleSlider';
import PlusMinusInput from '../input/PlusMinusInput';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setBoardSize from '../../actions/settings/setBoardSize';
import setStartOffset from '../../actions/settings/setStartOffset';
import setAliveTilesAroundDeadToCreateLife from '../../actions/settings/setAliveTilesAroundDeadToCreateLife';
import setAliveTilesAroundLifeToKeepLife from '../../actions/settings/setAliveTilesAroundLifeToKeepLife';

const MIN_BOARD_SIZE = 1;
const MAX_BOARD_SIZE = 100;
const MIN_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE = 1;
const MAX_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE = 9;
const MIN_ALIVE_TILES_AROUND_LIVE_TO_KEEP_LIFE = 0;
const MAX_ALIVE_TILES_AROUND_LIVE_TO_KEEP_LIFE = 9;

const GameOfLifeSettings = ({gameSettings: {startOffset, 
                                            boardSize, 
                                            aliveTilesAroundDeadToCreateLife, 
                                            aliveTilesAroundLifeToKeepLife}, 
                             setBoardSize, 
                             setStartOffset, 
                             setAliveTilesAroundDeadToCreateLife, 
                             setAliveTilesAroundLifeToKeepLife}) =>
    <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
            <PlusMinusInput label="Starting offset"
                            step={5}
                            value={startOffset}
                            changeValue={setStartOffset}/>
        </Grid>
        <Grid item xs={12}>
            <SimpleSlider label="Board Size"
                        min={MIN_BOARD_SIZE} 
                        max={MAX_BOARD_SIZE} 
                        value={boardSize}
                        onChange={setBoardSize}/>
        </Grid>
        <Grid item xs={12}>
            <SimpleSlider label="Live tiles around dead to create life"
                        min={MIN_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE} 
                        max={MAX_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE} 
                        value={aliveTilesAroundDeadToCreateLife}
                        onChange={setAliveTilesAroundDeadToCreateLife}/>
        </Grid>
        <Grid item xs={12}>
            <SimpleSlider label="Live tiles around life to keep life"
                        min={MIN_ALIVE_TILES_AROUND_LIVE_TO_KEEP_LIFE} 
                        max={MAX_ALIVE_TILES_AROUND_LIVE_TO_KEEP_LIFE} 
                        value={aliveTilesAroundLifeToKeepLife}
                        onChange={setAliveTilesAroundLifeToKeepLife}/>
        </Grid>
    </Grid>

const mapStateToProps = ({gameSettings}) => {
    return {gameSettings};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBoardSize, 
                               setStartOffset, 
                               setAliveTilesAroundDeadToCreateLife, 
                               setAliveTilesAroundLifeToKeepLife}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOfLifeSettings);
