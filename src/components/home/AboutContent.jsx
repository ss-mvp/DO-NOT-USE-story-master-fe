import React from 'react'

export default function AboutContent({ subtitle, paragraph }) {
    return (
        <>
            <div>
                {/* <h2>{subtitle}</h2> */}
                <p style={{textAlign:'center'}}>{paragraph}</p>
            </div>       
        </>
    )
}
