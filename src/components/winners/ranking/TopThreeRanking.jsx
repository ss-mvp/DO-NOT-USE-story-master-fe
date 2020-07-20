import React from 'react'


export default function TopThreeRanking({ username, index }) {

    return (
        <>
            <div className={`d-flex justify-content-between ${(index%2 === 0)? "bg-light" : "bg-white"}`}>
                <span className="ml-5 m-2"><h2>{ username }</h2></span>
                <span className="mr-5 m-2">
                    <select className="custom-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </span>
            </div>
        </>
    )
}