import React, {useEffect, useState} from 'react'
import axios from 'axios'

export function Announcement() {

    const [link, setLink] = useState("")

    const url = process.env.REACT_APP_FE_ENV === "development" ? 'http://localhost:5000/email/video' : `${process.env.REACT_APP_BE}/video`

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                if(res.data){
                    console.log('res', res.data[res.data.length-1].video_link)
                    setLink(res.data[res.data.length-1].video_link)
                }
            })
            .catch(err=>console.log(err))
    },[link])

    console.log('link', link)
    return (
        <>
            <div className="custom-bg d-flex align-items-center">
            <div className="container-sm d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center p-5">Winner announcement</h2>
                <div className="announcementMain bg-white custom-border rounded-lg border-lg p-5 d-flex flex-column">
                    <h3 className="text-center m-5">Join us for our live stream winner announcement!</h3>
                    <a className="btn btn-warning btn-lg mx-auto px-5 mt-5 " style={{textDeocration: 'none', color: 'black'}} href={link} target="_blank" rel="noopener noreferrer">Join Us!</a>
                </div>
            </div>
        </div>       
        </>
    )
}

