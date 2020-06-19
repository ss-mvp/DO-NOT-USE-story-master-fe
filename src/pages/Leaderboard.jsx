import React, { useState, useEffect } from "react";
import { TopThree } from "../components";
import { AxiosWithAuth } from "../utils";

export default function Leaderboard() {

    const [winners, setWinners] = useState([]);

    // useEffect(() => {
    //     axiosWithAuth()
    //       .get("https://ss-mvp.herokuapp.com/upload/story")
    //       .then((response) => {
    //         setSubmission(response.data);
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);

    return (
        <div>
            {
                winners.map(el => <TopThree />)
            }
        </div>
    )
}
