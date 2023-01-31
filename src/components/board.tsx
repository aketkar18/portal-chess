import React from 'react';
import './board.css';

const x: Element[][] = Array.from({ length: 8 }, () => Array(8));
console.log(x);

export default function Board() {
    const rows = x.map((row, rowIndex) => {
      const columns = row.map((_, columnIndex) => {
        const squareClass = (rowIndex + columnIndex) % 2 === 0 ? 'black-square' : 'white-square';
        return <div className={`square ${squareClass}`} />;
      });
      return <div className="row">{columns}</div>;
    });
  
    return (
      <div id="board">
        {rows}
      </div>
    );
  }
