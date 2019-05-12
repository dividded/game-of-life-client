import React from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import switchTile from '../../actions/gameFlow/switchTile';
import {isTileInArray} from '../../reducers/helperTileFunctions';

const Row = ({filledTiles, gameSettings, rowIndex, switchTile}) => 
    <tr>
        {getColumnsInRow(filledTiles, gameSettings, rowIndex, switchTile)}
    </tr>

const getColumnsInRow = (filledTiles, {boardSize, startOffset}, rowIndex, switchTile) => {
    let columnsInRow = [];
    const filledTilesAtRow = filledTiles.filter((filledTile) => 
                                                     filledTile.row === rowIndex);
    
    for(let colIndex = startOffset; 
            colIndex < (boardSize + startOffset); 
            colIndex++) {
        let tile = {row: rowIndex, col: colIndex};
        
        columnsInRow.push(<Tile isFilled={isTileInArray(filledTilesAtRow, tile)} 
                                onClick={() => switchTile(tile)} 
                                key={colIndex}/>);
    }

    return columnsInRow;
}

const mapStateToProps = ({filledTiles, gameSettings}) => {
    return {filledTiles, gameSettings};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({switchTile}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);