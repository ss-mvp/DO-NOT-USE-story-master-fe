import React from 'react'

export default function StoryModal({ username, image }) {
    return (
        <>
        <button className="btn btn-outline-primary m-2 px-4" data-toggle="modal" data-target="#storyModal">{`${username}'s Story`}</button>
        <div className="modal fade" id="storyModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="title bg-primary text-white">
                        <h4 className="p-3">Story</h4>
                    </div>
                    <div className="modal-body">
                        <img src={image} alt='submission' />
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}
