import React, { useState, useEffect } from "react";
import { TopThree } from "../components";
import { AxiosWithAuth } from "../utils";

export function Leaderboard() {

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
        <div className="custom-bg d-flex justify-content-center align-items-center">
            <div className="container-sm d-flex flex-column justify-content-center align-items-centerัถ">
                <h2 className="text-center p-5">Top 3 Winners</h2>
                <div>
                {
                    winners.map(el => <TopThree />)
                }
                </div>
                <button className="btn btn-outline-primary m-5 px-5">Come check out Story Squad!</button>
            </div>
            
        </div>
    )
}
