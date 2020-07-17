import React from 'react'

export const PromptComponent = (props) => {
    return (
        <>
            <section className="p-5 m-5 prompt custom-border rounded-lg bg-white">
                <h3 className="text-primary">
                {/* {props.prompt && props.prompt.prompts ? props.prompt.prompts : null} */}
                {props.prompt ? props.prompt : null}
                </h3>
            </section>
        </>
    )
}