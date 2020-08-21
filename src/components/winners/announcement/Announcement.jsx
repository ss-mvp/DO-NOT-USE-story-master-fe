import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
    },[link])


    return (
        <>
            <div className="custom-bg d-flex align-items-center">
            <div className="container-sm d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center p-5">Winner announcement</h2>
                <p className="text-center">Join us for our live stream winner announcement!</p>
                <button className="btn btn-outline-primary m-5 px-5"><a href={link} target="_blank" rel="noopener noreferrer">Join Us!</a></button>
            </div>
        </div>       
        </>
    )
}

