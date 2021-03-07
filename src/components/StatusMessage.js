import React from 'react'

const StatusMessage = ({winner,current}) => {
    // const message=winner ? `The winner is ${winner}`:`The next player is ${current.isXNext?'X':'O'}`;

    const noMovesLeft = current.board.every(el => el !== null);

    return (
        <h2>
            {winner && `The winner is ${winner}`}
            {!winner && !noMovesLeft && `The next player is ${current.isXNext?'X':'O'}`}
            {!winner && noMovesLeft && "X and 0 tied!"}
        </h2>
    );
};

export default StatusMessage
