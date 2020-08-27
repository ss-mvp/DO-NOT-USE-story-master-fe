import React from 'react'

export default function TopThreeWinnerBar({ username, index }) {

    return (
        <>
            <div className={`d-flex justify-content-between ${(index%2 === 0)? "bg-light" : "bg-white"}`}>
                <span className="m-2"><h2 className="ss-title m-2">{ username }</h2></span>
                <span className="m-2 text-primary">
                    {
                        index === 0? <h3> Winner!</h3> : index === 1 ? <h3>2nd Place</h3> : <h3>3rd Place</h3>
                    }
                </span>
            </div>
        </>
    )
}