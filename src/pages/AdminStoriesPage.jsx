import React from 'react'
import { AdminNav, AdminStories } from "../components"

export function AdminStoriesPage() {
    return (
        <>
            <AdminNav>
                <div className="d-flex align-items-center justify-content-around">
                    <h1 className="ss-title m-3">Story Squad</h1>
                    <h2 className="m-3">Top 10 Stories</h2>
                </div>
            </AdminNav>
            <AdminStories/>  
        </>
    )
}
