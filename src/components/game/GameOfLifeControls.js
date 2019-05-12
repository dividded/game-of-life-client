import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNextGeneration from '../../actions/gameFlow/getNextGeneration';
import clear from '../../actions/gameFlow/clear';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const DELAY_IN_MS = 50;

class GameOfLifeControls extends Component {
    constructor(props) {
        super(props);
        this.state = {timer: null, isChangingToNextGenerations: false};

        this.toggleGenerationChange = this.toggleGenerationChange.bind(this);
        this.getNextGeneration = this.getNextGeneration.bind(this);
        this.startChangingGenerations = this.startChangingGenerations.bind(this);
        this.stopChangingGenerations = this.stopChangingGenerations.bind(this);
    }

    componentWillUnmount() {
        this.stopChangingGenerations();
    }

    getNextGeneration() {
        const {filledTiles, gameSettings, getNextGeneration} = this.props;
        
        const {aliveTilesAroundDeadToCreateLife, 
               aliveTilesAroundLifeToKeepLife} = gameSettings;
        
        getNextGeneration(filledTiles,
                          aliveTilesAroundDeadToCreateLife, 
                          aliveTilesAroundLifeToKeepLife);
    }

    toggleGenerationChange() {
        if(this.state.isChangingToNextGenerations) {
            this.stopChangingGenerations();
        } else {
            this.startChangingGenerations();
        }
    }

    startChangingGenerations() {
        this.setState({isChangingToNextGenerations: true});

        const timer = setInterval(
            () => this.getNextGeneration(),
            DELAY_IN_MS
        );

        this.setState({timer});
    }

    stopChangingGenerations() {
        this.setState({isChangingToNextGenerations: false});
        clearInterval(this.state.timer);
    }

    render() {
        let generatingButtonMessage = 
            this.state.isChangingToNextGenerations ? "Stop generations" : "Start generations";
        
        return (
            <Grid container>
                <Grid item xs={2}>
                    <Button color="primary" variant="contained" onClick={this.toggleGenerationChange}>
                        {generatingButtonMessage}
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="primary" variant="contained" onClick={this.getNextGeneration}>
                        Next Step
                    </Button>
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={2}>
                    <Button color="primary" variant="contained" onClick={this.props.clear}>
                        Clear
                    </Button>
                </Grid>
            </Grid>);
        }
}

const mapStateToProps = ({filledTiles, gameSettings}) => {
    return {filledTiles, gameSettings};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getNextGeneration, clear}, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GameOfLifeControls);
  
