import React, {useState} from 'react';
import './index.css';
import white from './whiteChevron.png'
import teal from './tealChevron.png'
import dark from './darkChevron.png'



export const ProgressBar = () => {

    const colors = [
        {
            chevron: dark,
            text: 'white'
        },
        {
            chevron: teal,
            text: 'white'
        },
        {
            chevron: white,
            text: 'black'
        },
        {
            chevron: white,
            text: 'black'
        },
        {
            chevron: white,
            text: 'black'
        }
    ]


    return (<div className="progress-container">
        <div className="chevronDiv" style={{backgroundImage: `url('${colors[0].chevron}')`}}>
            <p style={{color: colors[0].text}}>Submit<br/>your<br/>story</p>
        </div>
        <div className="chevronDiv" style={{backgroundImage: `url('${colors[1].chevron}')`}}>
            <p style={{color: colors[1].text}}>Await<br/>top 3<br/>selection</p>
        </div>
        <div className="chevronDiv" style={{backgroundImage: `url('${colors[2].chevron}')`}}>
            <p style={{color: colors[2].text}}>Rank<br/>your<br/>favorites</p>
        </div>
        <div className="chevronDiv" style={{backgroundImage: `url('${colors[3].chevron}')`}}>
            <p style={{color: colors[3].text}}>Watch<br/>winners'<br/>livestream</p>
        </div>
        <div className="chevronDiv" style={{backgroundImage: `url('${colors[4].chevron}')`}}>
            <p style={{color: colors[4].text}}>See<br/>today's<br/>top 3</p>
        </div>
    </div>)
}
