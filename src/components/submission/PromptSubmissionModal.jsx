import React from "react";

// Modal 

export default function PromptSubmissionModal() {

    return (
        <>
        {/* MODAL TRIGGER */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Writing Contest Instructions
        </button>

        {/* MODAL */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Submission Instructions</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body modal-font">
            "Write a single page handwritten story that has a beginning, middle and ending. Make sure to increase the tension as the story proceeds and include dialogue in quotation marks to bring the characters to life. Good luck!"
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
            </div>
        </div>
        </div>
        </>
    );
}