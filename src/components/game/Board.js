import React from 'react';
import Row from './Row';
import { connect } from 'react-redux';

const Board = ({gameSettings}) => 
    <table className="gameOfLifeBoard">
        <tbody>{getRowsInBoard(gameSettings)}</tbody>
    </table>

const getRowsInBoard = ({startOffset, boardSize}) => {
    let rows = [];
    
    for(let rowIndex = startOffset; 
            rowIndex < (boardSize + startOffset); 
            rowIndex++) {
        rows.push(<Row startOffset={startOffset} 
                       rowIndex={rowIndex} 
                       key={rowIndex} 
                       rowSize={boardSize}/>);
    }

    return rows;
}

const mapStateToProps = ({gameSettings}) => {
    return {gameSettings};
}
  
export default connect(mapStateToProps)(Board);
  