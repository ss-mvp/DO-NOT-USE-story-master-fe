import React from 'react'

export function AddPrompt() {
    return (
        <>
            <form>
                <div className="addprompt form-group">
                    <textarea className="form-control" id="addPrompt" row="5" />
                    <button type="submit" className="btn btn-primary" py-5>Add</button>
                </div>
            </form>
        </>
    )
}
