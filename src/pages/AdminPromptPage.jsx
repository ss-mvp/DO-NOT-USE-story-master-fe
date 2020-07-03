import React from 'react'
import plus from '../assets/plus.svg'
import { AdminNav, AdminPrompt } from "../components"

export function AdminPromptPage() {
    return (
        <div>
            <AdminNav><h2 className="m-3">Prompt</h2></AdminNav>
            <div className="float-right m-3">
                <img src={plus} alt="add circle" />
            </div>
            <AdminPrompt />
        </div>
    )
}
