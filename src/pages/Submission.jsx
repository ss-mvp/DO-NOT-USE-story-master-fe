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
            console.log(response.data);
        })
        .catch((err) => console.log(err));
    }, []);


    return (
        <>
            <div>
                <PromptComponent prompt={prompt} />
                <SubmissionForm />
            </div>
            
        </>
    )
}
