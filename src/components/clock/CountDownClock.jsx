import React, { useState, useEffect } from 'react'
import moment from 'moment'
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
    const [now, setNow] = useState(moment().format())

    useEffect(() => {
        AxiosWithAuth().get('upload/time')
        .then(response => {
            console.log(response)
            setTime(response.data.time.start.time);
            setEnd(response.data.time.end.end);
            setNewGame(response.data.time.newGame.newGame);
        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <>
            {/* {schedule.submissionDeadline} */}
            {/* {moment().format().isAfter(time) && moment().format().isBefore(end) */}
            {/* {console.log(moment(now).isBefore(end))} */}
            {/* {moment(now).isAfter(time) && moment(now).isBefore(end) */}
            <Countdown date={Date.now() + 5000} renderer={renderer} />
            <Countdown date={Date.now() + 5000} renderer={newRenderer} />
        </>
    )
}
