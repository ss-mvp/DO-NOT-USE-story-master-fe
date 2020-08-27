import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './index.css';
import white from './whiteChevron.png'
import teal from './tealChevron.png'
import dark from './darkChevron.png'



export const ProgressBar = ({current}) => {
    const history = useHistory();


    const colors = [
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

    const [chevColors, setChevColors] = useState(colors)

    useEffect(()=>{
        changeColors()
    },[current])

    const changeColors = ()=>{
        let newChevColors = colors.map((color, i)=>{
            if(i < current){
                color.chevron = dark;
                color.text = "white";
            } else if (i === current){
                color.chevron = teal;
                color.text = "white";
            } else if (i > current){
                color.chevron = white;
                color.text = "black";
            }
            return color;
        })
        setChevColors(newChevColors)

    }


    return (<div className="progress-container">
        <div onClick={()=>history.push('/submission')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[0].chevron}')`}}>
            <p style={{color: chevColors[0].text}}>Submit<br/>your<br/>story</p>
        </div>
        <div onClick={()=>history.push('/submission')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[1].chevron}')`}}>
            <p style={{color: chevColors[1].text}}>Await<br/>top 3<br/>selection</p>
        </div>
        <div onClick={()=>history.push('/ranking')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[2].chevron}')`}}>
            <p style={{color: chevColors[2].text}}>Rank<br/>your<br/>favorites</p>
        </div>
        <div onClick={()=>history.push('/announcement')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[3].chevron}')`}}>
            <p style={{color: chevColors[3].text}}>Watch<br/>winners'<br/>livestream</p>
        </div>
        <div onClick={()=>history.push('/winners')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[4].chevron}')`}}>
            <p style={{color: chevColors[4].text}}>See<br/>the<br/>top 3</p>
        </div>
    </div>)
}
