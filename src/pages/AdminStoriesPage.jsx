import React from 'react'
import { AdminNav, AdminStories } from "../components"
import { useState } from 'react'
import { useEffect } from 'react';
import { AxiosWithAuth } from '../utils';

export function AdminStoriesPage() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
        .get('admin/')
        .then(response => {
            setStories(response.data.submissions);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <>
            <AdminNav>
                <header className="d-flex align-items-center justify-content-around">
                    <h1 className="ss-title m-3">Story Squad</h1>
                    <h2 className="m-3">Top 10 Stories</h2>
                </header>
            </AdminNav>
            <AdminStories stories={stories} />  
        </>
    )
}
