import React, { useState } from 'react'
import { AxiosWithAuth } from '../../../utils'

export function AddPrompt(props) {

    const [newPrompt, setNewPrompt] = useState({ prompt: "" })

    const handleChange = e => {
        setNewPrompt({...newPrompt, prompt: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await AxiosWithAuth().post('/prompts', newPrompt)
    }

    return (
        <>
            <div className="modal" id="addModal" data-toggle="modal" data-target="#exampleModalCenter">
                <form onSubmit={ handleSubmit }>
                    <div className="addprompt form-group">
                        <textarea className="form-control" name="prompt" id="addPrompt" row="5" onChange={ handleChange }/>
                        <button type="submit" className="btn btn-primary" py-5>Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}
