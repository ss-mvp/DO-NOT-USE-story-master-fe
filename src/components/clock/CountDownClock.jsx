import React, { useState, useEffect } from 'react'
import Countdown from "react-countdown";
import { AxiosWithAuth } from '../../utils'

// const schedule = {
//     submissionDeadline: moment().hour(15),
//     rankingStart: moment().hour(15).minute(30),
//     rankingDeadline: moment().hour(18),
//     winnerAnnouncement: moment().hour(18).minute(30),
//     newPrompt: moment().hour(22).minute(30)
// }

const Completionist = () => <span>Game is over until 10:30PM.</span>
const NewCompletionist = () => <span>Game running until 3:00PM</span>

const renderer = ({ hours, minutes, seconds, completed }) => {
    // console.log(completed)
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <span>
                <h2>Game is over in {hours} hours, {minutes} minutes and {seconds} seconds.</h2>
            </span>
        )
    }
}

const newRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        return <NewCompletionist />;
    } else {
        return (
            <span>
                <h2>New game starts in {hours} hours, {minutes} minutes and {seconds} seconds.</h2>
            </span>
        )
    }
}

export function CountDownClock() {

    const [time, setTime] = useState();
    const [end, setEnd] = useState();
    const [newGame, setNewGame] = useState();
    const [now, setNow] = useState(Date.parse(new Date()));
    const newTime = Date.parse(new Date())
    
    useEffect(() => {
        AxiosWithAuth().get('upload/time')
        .then(response => {
            setTime(Date.parse(response.data.time.start.time));
            setEnd(Date.parse(response.data.time.end.end));
            setNewGame(Date.parse(response.data.time.newGame.newGame));
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            { !time && <></>}
            { time && (now > time) && (now < end) && <Countdown date={end} renderer={renderer} /> }
            {/* <Countdown date={newGame} renderer={newRenderer} /> */}
        </>
    )
}
