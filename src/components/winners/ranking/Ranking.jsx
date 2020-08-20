import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TopThree from './TopThreeRanking'
import { AxiosWithAuth } from '../../../utils'
import StoryModal from '../modals/StoryModals'

export function Ranking(props) {

    const [winners, setWinners] = useState([])
    const [error, setError] = useState()
    const [selection, setSelection] = useState()

    const history = useHistory()

    useEffect(()=> {
        AxiosWithAuth().get("/ranking")
            .then(res => { 
                let response = res.data
                setWinners(response)
                setSelection({
                     rank1: response[0].id,
                     rank2: response[1].id,
                     rank3: response[2].id
                })
            })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let isDup = [...new Set([parseInt(selection.rank1), parseInt(selection.rank2), parseInt(selection.rank3)])]
        console.log(isDup)
        if (isDup.length === 3){
            let requestBody = [
                { "rank": 1, "topthree_id": parseInt(selection.rank1) },
                { "rank": 2, "topthree_id": parseInt(selection.rank2) },
                { "rank": 3, "topthree_id": parseInt(selection.rank3) },
            ]
            AxiosWithAuth().post("ranking", requestBody)
                .then(res => {
                    history.push("/dashboard")
                })
                .catch(err => {
                    console.log(err)
                    setError(err)
                })
        } else {
            setError({ message: "DUPLICATE VALUE DETECTED, please select your favorite 1, 2, 3" })
        }
    }

    return (
        <div className="bg-light custom-border p-5 rounded-lg">
            { winners && winners.map(el => <StoryModal username={el.username} image={el.image } />)}
            <form onSubmit={ handleSubmit }>
                {console.log(winners)}
                {!winners && <></>}
                { winners && winners.map((el, index) => <TopThree index={index} winners={winners} winner={el} selection={ selection } setSelection={ setSelection }/>)}
                <button type="submit" className="btn btn-warning btn-lg m-3 p-2 px-5">Rank my winners!</button>
                { error && <div className="alert alert-danger" role="alert"> { error.message } </div> }
            </form>
        </div>
    )
}
