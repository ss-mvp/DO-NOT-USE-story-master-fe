import React, { useState } from 'react'
import TopThree from './TopThreeRanking'
import dummywinner from '../dummywinner.json'

export function Ranking() {

    const [winners, setWinners] = useState([])
    const [ranking, setRanking] = useState([
        { topThreeId: null, ranking: null },
        { topThreeId: null, ranking: null },
        { topThreeId: null, ranking: null }
    ])
    
    return (
        <div>
            {
                dummywinner.map((el, index) => <TopThree username={ el.username } index={ index }/>)
            }
        </div>
    )
}
