export const isTileInArray = (tiles, tileToFind) => {
    return tiles.some((tile) =>
            tile.row === tileToFind.row && tile.col === tileToFind.col);
}

