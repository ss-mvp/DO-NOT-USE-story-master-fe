import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './index.css';
import white from './whiteChevron.png'
import teal from './tealChevron.png'
import dark from './darkChevron.png'
import { AxiosWithAuth } from '../../utils';
import ThreeWinnersNeededModal from "./ThreeWinnersNeededModal";



export const ProgressBar = ({current}) => {
    const history = useHistory();
    const [winners, setWinners] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true)
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
    
        AxiosWithAuth()
          .get('/ranking')
          .then((res) => {
            let response = res.data;
            // console.log("RESPONSE", response)
            if(response.length > 0){
              setIsDisabled(false)
              setWinners(response);
            }
          }).catch(console.error);
      }, []);


    // Allow access to Rank Your Favorites only when winners === 3
    const handleAllowAccess = () => {
        // winners.length = 3
        // IF winners.length < 3 => history.push("/dashboard")
        // keep users from going to ranking page
        // present user with MODAL telling them that we are still waiting on 3 top submissions
        if (winners.length < 3 && showModal === false) {
            // console.log("WINNERS is < 3!", winners)
            setShowModal(true)
            // history.push("/dashboard")
        }
        // IF winners.length is 3 
        // send users to the ranking page
        if (winners.length === 3) {
            history.push("/ranking")
            // console.log("Winners is === 3", winners)
        }

    }

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

    const closeModal = (e) => {
        e.preventDefault()
        setShowModal(false)
        // console.log("showModal", showModal)
    }

    return (
        <div className="progress-container">
        <div onClick={()=>history.push('/submission')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[0].chevron}')`}}>
            <p style={{color: chevColors[0].text}}>Submit<br/>your<br/>story</p>
        </div>
        <div onClick={()=>history.push('/submission')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[1].chevron}')`}}>
            <p style={{color: chevColors[1].text}}>Await<br/>top 3<br/>selection</p>
        </div>

        <div  onClick={handleAllowAccess} className="chevronDiv" style={{backgroundImage: `url('${chevColors[2].chevron}')`}}>
            {showModal ? (
                <>
                <ThreeWinnersNeededModal closeModal={closeModal} />
                </>
            ) : (
            <p style={{color: chevColors[2].text}}>Rank<br/>your<br/>favorites</p>
            )}

        </div>

        <div onClick={()=>history.push('/announcement')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[3].chevron}')`}}>
            <p style={{color: chevColors[3].text}}>Watch<br/>winners'<br/>livestream</p>
        </div>
        <div onClick={()=>history.push('/winners')} className="chevronDiv" style={{backgroundImage: `url('${chevColors[4].chevron}')`}}>
            <p style={{color: chevColors[4].text}}>See<br/>the<br/>top 3</p>
        </div>
    </div>
    )
}
