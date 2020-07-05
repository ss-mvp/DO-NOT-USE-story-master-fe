import React from 'react'
import PromptBar from "./PromptBar"

export function AdminPrompt() {
    return (
        <>
            <section className="prompts table-container mx-auto my-5 text-center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Prompt</th>
                            <th scope="col">Prompts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [0,1,2,3,4,5,6,7,8,9,10].map(el => <PromptBar />)
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
