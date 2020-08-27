import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {winnerStreamStartHr, winnerStreamStartMin, currentHr, currentMin } from '../../../utils/schedule'

export function Announcement() {

    const [link, setLink] = useState("")

    const url = process.env.REACT_APP_FE_ENV === "development" ? 'http://localhost:5000/email/video' : 'https://ss-mvp.herokuapp.com/email/video'

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                if(res.data){
                    setLink(res.data[res.data.length-1].video_link)
                }
            })
            .catch(err=>console.log(err))
    },[link, url])

    const isTodayWinner = () => {
        if(currentHr === winnerStreamStartHr && currentMin >= winnerStreamStartMin){
            return true
        }
        else if(currentHr > winnerStreamStartHr && currentHr <= 23){
            return true
        } else{
            return false
        }
    }


    return (
        <>
            <div className="custom-bg d-flex align-items-center">
            <div className="container-sm d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center p-5">Winner announcement</h2>
                <div className="announcementMain bg-white custom-border rounded-lg border-lg p-5 d-flex flex-column">
                    {isTodayWinner() && <>
                        <h3 className="text-center m-5">Join us for our live stream winner announcement!</h3>
                        <button id="youtubeLinkButton" className="btn btn-warning btn-lg mx-auto px-5 mt-5" href={link} target="_blank" rel="noopener noreferrer">Join Us!</button>
                    </>}
                    {!isTodayWinner() && <>
                        <h3 className="text-center m-5">Check out the stream for the most recent winners!</h3>
                        <button id="youtubeLinkButton" className="btn btn-warning btn-lg mx-auto px-5 mt-5" href={link} target="_blank" rel="noopener noreferrer">Watch Now</button>
                    </>}
                </div>
            </div>
        </div>       
        </>
    )
}

