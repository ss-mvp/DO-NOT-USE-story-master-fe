import React from 'react'

export const PromptComponent = (props) => {
    return (
        <>
            <section className="prompt p-5 m-5 mx-auto custom-border rounded-lg bg-primary" id="promptDisplay">
                <h3 className="text-white text-center">
                {/* {props.prompt && props.prompt.prompts ? props.prompt.prompts : null} */}
                {props.prompt ? props.prompt : `There's no new prompt to display at this time`}
                </h3>
            </section>
        </>
    )
}