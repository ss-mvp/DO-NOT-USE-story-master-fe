import React from 'react'

export default function DeletePrompt() {
    return (
        <>
            <div className="modal" id="deleteModal" tabindex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Prompt</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>You are about to delete this prompt. Are you sure you want to delete this prompt?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary">Yes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
