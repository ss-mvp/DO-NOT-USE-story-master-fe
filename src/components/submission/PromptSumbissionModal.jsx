import React from "react";

// Modal 

export default function PromptSumbissionModal() {

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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Submission Instructions</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body modal-font">
            "Write a single page handwritten story that has a beginning, middle and ending. Make sure to increase the tension as the story proceeds and include dialogue in quotation marks to bring the characters to life. Good luck!"
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}
