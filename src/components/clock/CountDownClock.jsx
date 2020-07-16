import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Countdown from "react-countdown";
import { AxiosWithAuth } from '../../utils/AxiosWithAuth.js';

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
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <span>
                Game is over in {hours} hours, {minutes} minutes and {seconds} seconds.
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
                New game starts in {hours} hours, {minutes} minutes and {seconds} seconds.
            </span>
        )
    }
}

export function CountDownClock() {

    const [time, setTime] = useState();
    const [end, setEnd] = useState();
    const [newGame, setNewGame] = useState();

    useEffect(() => {
        AxiosWithAuth().get('upload/time')
        .then(response => {
            setTime(response.data.time.time);
            setEnd(response.data.time.end);
            setNewGame(response.data.time.newGame);
        })
        .catch(err => console.log(err))
    })
    
    return (
        <>
            {/* {schedule.submissionDeadline} */}
            {moment().format().isAfter(time) && moment().format().isBefore(end)
            ? <Countdown date={end - moment().format()} renderer={renderer} />
            : <Countdown date={newGame - moment().format()} renderer={newRenderer} />}
        </>
    )
}
