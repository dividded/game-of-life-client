import React from 'react';

const Tile = ({isFilled, onClick}) => 
    <td onClick={onClick} className={getTileClass(isFilled)}/>

const getTileClass = isFilled => isFilled ? "filled-tile" : "empty-tile";

export default Tile;