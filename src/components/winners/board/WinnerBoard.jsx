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
        <div className="winnerboard m-5 bg-white p-5 custom-border rounded-lg">
            { finalWinners ? 
                finalWinners.map((el, index) => 
                    <TopThreeWinnerBar key={el.id} username={el.username} index={index}/>)
                    :
                    <h3>Please check back later</h3>}
        </div>
    )
}
