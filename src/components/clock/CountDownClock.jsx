import React, { useState, useEffect } from 'react'
import moment from 'moment'

const schedule = {
    submissionDeadline: moment().hour(15),
    rankingStart: moment().hour(15).minute(30),
    rankingDeadline: moment().hour(18),
    winnerAnnouncement: moment().hour(18).minute(30),
    newPrompt: moment().hour(22).minute(30)
}

export function CountDownClock() {
    
    return (
        <>
            {schedule.submissionDeadline}
        </>
    )
}
