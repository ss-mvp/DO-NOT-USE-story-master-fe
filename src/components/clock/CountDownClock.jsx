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
    // console.log(completed)
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
    const [now, setNow] = useState(moment());

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
        {/* end - moment().format() */}
            {/* {schedule.submissionDeadline} */}
            {/* {moment().format().isAfter(time) && moment().format().isBefore(end) */}
            {/* {console.log(moment(now).isAfter(time))} */}
            {/* {time
            ? console.log('math',Number(new Date().getTime() - time))
            : <>This is not here</>} */}
            {/* Next line is the test line */}
            {time
            ? <Countdown date={Number(new Date().getTime() + time)} renderer={renderer} />
            : null}
            {/* {moment(now).isAfter(time) && moment(now).isBefore(end)
            ? <Countdown date={Date.now() + 5000} renderer={renderer} />
            : <Countdown date={newGame - moment().format()} renderer={newRenderer} />} */}
        </>
    )
}
