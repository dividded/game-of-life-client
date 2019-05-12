import React from 'react';
import Board from './Board';
import GameOfLifeControls from './GameOfLifeControls';
import GameOfLifeSettings from './GameOfLifeSettings';
import Grid from '@material-ui/core/Grid';

const GameOfLife = () => 
    <>
        <Grid container spacing={24}>
            <Grid item xs={7}>
                <Board/>
            </Grid>
            <Grid item xs={3}>
                <GameOfLifeSettings/>
            </Grid>
        </Grid>

        <GameOfLifeControls/>
    </>

export default GameOfLife;