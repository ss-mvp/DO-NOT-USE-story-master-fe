import React, { useState, useEffect } from 'react'
import TopThree from './TopThreeRanking'
import { AxiosWithAuth } from '../../../utils'

export function Ranking() {

    const [winners, setWinners] = useState([])
    const [ranking, setRanking] = useState([
        { topThreeId: null, ranking: null },
        { topThreeId: null, ranking: null },
        { topThreeId: null, ranking: null }
    ])

    useEffect(async()=> {
        try {
            const topThree = await AxiosWithAuth().get("/ranking/topthree")
            setWinners(topThree)
        } catch(err){
            console.log(err)
        }
    }, [])
    
    return (
        <div>
            {!winners && <></>}
            { winners && winners.map((el, index) => <TopThree username={ el.username } index={ index }/>)}
        </div>
    )
}
