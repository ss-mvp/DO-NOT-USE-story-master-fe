import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import axios from 'axios'

export function Activated() {
    const history = useHistory()
    const token = useLocation().pathname.split('/activated/')[1]

    

    useEffect(()=>{

        const baseUrl = process.env.REACT_APP_FE_ENV === 'development' ? 'http://localhost:5000': process.env.REACT_APP_BE;

        if(token){
            // console.log('in the if')
            axios.post(`${baseUrl}/email/activatedLogin`, {token: token})
                .then(res=>{
                    // console.log('res', res)
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('username', res.data.username)
                    setTimeout(()=>{
                        history.push('/submission')
                    }, 2000)
                })
                .catch(err=>console.log(err))
            
        }
    },[history,token])

    return(
    <div className="custom-bg"> 
        <h2 className="text-center ss-title text-primary display-2">Your account has been activated</h2>
        <div className="form-group text-center d-flex flex-column">
        <p style={{fontSize: '24px'}}>Logging you in...</p>
        </div>
    </div>
    )
}