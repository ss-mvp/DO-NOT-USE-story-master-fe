import React from 'react'
import TopThreeWinner from './TopThreeWinnerBar'
import dummywinner from '../dummywinner.json'

export function WinnerBoard() {
    return (
        <div className="winnerboard m-5">
            {
                dummywinner.map( (el, index) => <TopThreeWinner username={el.username} index={index} />)
            }
        </div>
    )
}
