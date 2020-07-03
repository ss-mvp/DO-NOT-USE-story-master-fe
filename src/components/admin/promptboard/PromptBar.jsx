import React from 'react'

export default function PromptBar() {
    return (
        <>
            <tr>
                <td>This is a Prompt</td>
                <td>
                    <button className="btn btn-outline-primary m-2 px-4">Edit</button>
                    <button className="btn btn-primary m-2 px-4">Delete</button>
                </td>
            </tr>
        </>
    )
}
