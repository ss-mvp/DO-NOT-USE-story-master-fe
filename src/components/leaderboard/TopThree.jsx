import React from 'react'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'

export function TopThree({ winner, index }) {

    return (
        <>
            <div className={`d-flex justify-content-between ${(index%2 === 0)? "bg-light" : "bg-white"}`}>
                <span className="ml-5 m-2"><h2>{winner.name}</h2></span>
                <span className="mr-5 m-2">
                    { 
                        index === 0 ? <img src={first} alt={`1st place`}/> : 
                        index === 1 ? <img src={second} alt={`2nd place`}/> :
                        index === 2 ? <img src={third} alt={`3rd place`} /> : null
                        
                    }
                </span>
        </div>
        </>
    )
}