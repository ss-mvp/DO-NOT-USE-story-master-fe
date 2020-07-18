import React from 'react'
import EditPrompt from './EditPrompt'

export default function EditPrompt() {

    const [updatedPrompt, setUpdatedPrompt] = useState({ uPrompt: "" })

    const handleChange = e => {
        setUpdatedPrompt({...updatedPrompt, uPrompt: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await AxiosWithAuth().post('/prompts', updatedPrompt)
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="editprompt form-group">
                    <textarea
                        className="form-control" 
                        name="uPrompt"
                        id="editPrompt"
                        row="5"
                        onChange={ handleChange }
                    />
                    <button type="submit" className="btn btn-primary py-5">Edit</button>
                </div>
            </form>
        </>
    )
}
