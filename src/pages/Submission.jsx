import React, { useState, useEffect } from 'react'
import { AxiosWithAuth } from '../utils'
import { PromptComponent, SubmissionForm } from '../components'
import { CountDownClock } from '../components/clock/CountDownClock';

export function Submission() {

    const [prompt, setPrompt] = useState();

    useEffect(() => {
        AxiosWithAuth()
        // .get("https://ss-mvp.herokuapp.com/upload/prompt")
        .get("upload/prompt")
        .then((response) => {
            console.log(response.data.prompt.prompt)
            setPrompt(response.data.prompt.prompt);
        })
        .catch((err) => console.log(err));
    }, []);


    return (
        <>
            <div className="custom-bg d-flex justify-content-center align-items-center">
                <div className="container-sm">
                    <h2 className="text-center">Daily Writing Contest</h2>
                <PromptComponent prompt={prompt} />
                <SubmissionForm />
                
                <CountDownClock />
                </div>
            </div>
            
        </>
    )
}
