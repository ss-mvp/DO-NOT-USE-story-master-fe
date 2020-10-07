import { Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import { AxiosWithAuth } from "../../utils"
import ThreeWinnersNeededModal from "../progressBar/ThreeWinnersNeededModal";

export default function Menu({loc}) {

  const history = useHistory();
  const [winners, setWinners] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    
    AxiosWithAuth()
      .get('/ranking')
      .then((res) => {
        let response = res.data;
        console.log("RESPONSE", response)
        if(response.length > 0){
          setIsDisabled(false)
          setWinners(response);
        }
      });
  }, []);


      // Allow access to Rank Your Favorites only when winners === 3
      const handleAllowAccess = () => {
        // winners.length = 3;
        // IF winners.length < 3 => history.push("/dashboard")
        // keep users from going to ranking page
        // present user with MODAL telling them that we are still waiting on 3 top submissions
        if (winners.length < 3) {
            console.log("WINNERS is < 3!", winners)
            // history.push("/dashboard")
        }
        // IF winners.length is 3 
        // send users to the ranking page
        if (winners.length === 3) {
            history.push("/ranking")
            console.log("Winners is === 3", winners)
        }
    }

  if(!loc){
    return (
      <>
        <Link to="/dashboard" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">My Dashboard</h4>
        </Link>
        <Link to="/submission" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Submit your story</h4>
        </Link>
        <Link to="/winners" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Top 3 Stories</h4>
        </Link>

        {/* if winners === 3 allow access else Modal */}
          <Link onClick={handleAllowAccess}
          to="/ranking" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Rank your favorites</h4>
       </Link>

        <Link to="/announcement" className="nav-item nav-link">
          <h4 className="ss-title h4-nav">Winner Announcement</h4>
        </Link>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem('username');
            window.localStorage.removeItem('token');
            // setUsername('');
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
    </>
    )
  } else {
    return (
      <>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem('username');
            window.localStorage.removeItem('token')
            // setUsername('');
          }}
          className="nav-link"
        >
          <h4 className="ss-title text-secondary">Logout</h4>
        </Link>
    </>
    )
  }
}
