import React from 'react'

export const PromptComponent = (props) => {
    return (
        <>
            <div className="p-5 m-5 prompt-border bg-white">
                <h3 className="text-primary">
                {props.prompt && props.prompt.prompts ? props.prompt.prompts : null}
                </h3>
            </div>
        </>
    )
}