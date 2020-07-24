import React, { useState, useEffect } from 'react'
import TopThreeWinnerBar from './TopThreeWinnerBar'
import { AxiosWithAuth } from '../../../utils'

export function WinnerBoard() {

    const [ finalWinners, setFinalWinners ] = useState()
    
    useEffect(()=> {
        AxiosWithAuth().get("/ranking/winner")
            .then(res => {
                setFinalWinners(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="winnerboard m-5">
            { finalWinners && finalWinners.map((el, index) => <TopThreeWinnerBar key={el.id} username={el.username} index={index}/>)}
        </div>
    )
}
