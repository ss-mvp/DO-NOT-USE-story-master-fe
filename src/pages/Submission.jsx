import React, { useState, useEffect } from 'react'
import { AxiosWithAuth } from '../utils'
import { PromptComponent, SubmissionForm } from '../components'

export function Submission() {

    const [prompt, setPrompt] = useState();

    useEffect(() => {
        AxiosWithAuth()
        .get("https://ss-mvp.herokuapp.com/upload/prompt")
        .then((response) => {
            setPrompt(response.data);
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
                </div>
            </div>
            
        </>
    )
}
