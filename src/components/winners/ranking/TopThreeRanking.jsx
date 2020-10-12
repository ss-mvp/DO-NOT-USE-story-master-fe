import React from 'react'

export default function TopThreeRanking({ setSelection, selection, winners, winner, index }) {

    const handleChange = (e) => {
        setSelection({...selection, [e.target.name]: e.target.value })
    }

    return (
        <>

            <div className={`m-3 d-flex align-items-center justify-content-around rounded bg-primary text-white mx-auto`} style={{maxWidth: '600px'}}>
                <span className="ml-5 m-2"><h2 className="ss-title">{ index === 0 ? `1st` : index === 1 ? `2nd` : `3rd` }</h2></span>
                <span className="mr-5 m-2">
                    {/* if winners length == 3 , render this */}
                    <select name={`rank${index+1}`} className="form-control form-control-lg" style={{width:'200px'}} onChange={(e) => handleChange(e)}>
                        <option value={ index===0? winners[0].id : index === 1 ? winners[1].id: winners[2].id }>{ index === 0 ? winners[0].username : index === 1 ? winners[1].username: winners[2].username }</option>
                        <option value={ index===0? winners[1].id : index === 1 ? winners[2].id: winners[0].id }>{ index === 0 ? winners[1].username : index === 1 ? winners[2].username: winners[0].username }</option>
                        <option value={ index===0? winners[2].id : index === 1 ? winners[0].id: winners[1].id }>{ index === 0 ? winners[2].username : index === 1 ? winners[0].username: winners[1].username }</option>
                    </select>
                    
                    {winners.length === 3 ? "" : (<select name={`rank${index+1}`} className="form-control form-control-lg" style={{width:'200px'}} onChange={(e) => handleChange(e)}>
                        <option value={ index===0? winners[0].id : index === 1 ? winners[1].id: winners[2].id }>{ index === 0 ? winners[0].username : index === 1 ? winners[1].username: winners[2].username }</option>
                        <option value={ index===0? winners[1].id : index === 1 ? winners[2].id: winners[0].id }>{ index === 0 ? winners[1].username : index === 1 ? winners[2].username: winners[0].username }</option>
                    </select>)}
                </span>
            </div>
        </>
    )
}