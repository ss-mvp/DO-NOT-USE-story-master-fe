import React from 'react'

export function EditPrompt() {
    return (
        <div>
            <form>
                <div className="editprompt form-group">
                    <textarea className="form-control" id="editPrompt" row="5" />
                    <button type="submit" className="btn btn-primary py-5">Edit</button>
                </div>
            </form>
        </div>
    )
}
