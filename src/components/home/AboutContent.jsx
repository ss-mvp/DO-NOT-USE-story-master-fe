import React from 'react'

export default function AboutContent({ subtitle, paragraph, time }) {

    return (
        <>
            <div
                 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                 }}
                className='about-content-container'
            >

                <ul
                    style={{
                    listStyleType: 'circle',
                    width: '80%',
                    fontSize: '1.1rem',
                }}
                    className='about-content-ul'
                >
                    <li
                        className='about-content-li'
                    >
                        <span
                            style={{
                                fontWeight: 'bold'
                            }}
                        >
                            {time}
                        </span>
                        {paragraph}
                    </li>
                </ul>        

                {/* <p style={{textAlign:'center'}}>{paragraph}</p> */}
            </div>      
        </>
    )
}
