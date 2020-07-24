import React from 'react'
import TopThreeWinner from './TopThreeWinnerBar'
import dummywinner from '../dummywinner.json'
import { useState } from 'react'
import { useEffect } from 'react';
import { AxiosWithAuth } from '../../../utils';

export function WinnerBoard() {

    const [topThree, setTopThree] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
        .get('ranking/topthree')
        .then(response => {
            setTopThree(response.data)
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="winnerboard m-5">
            
            { topThree.length > 0
              ?  topThree.map( (el, index) => <TopThreeWinner key={index} username={el.username} index={index} />)
              : null
            }

        </div>
    )
}
