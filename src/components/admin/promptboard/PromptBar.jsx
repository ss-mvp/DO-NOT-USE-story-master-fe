import React from 'react'
import DeletePrompt from './DeletePrompt'

export default function PromptBar() {
    return (
        <>
            <tr>
                <td>This is a Prompt</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4">Edit</button>
                    <button className="btn btn-primary m-2 px-4" data-toggle="modal" data-target="#deleteModal">Delete</button>
                </td>
            </tr>
        </>
    )
}
