import React from 'react'
import { Announcement, Navbar } from '../components'
import { SEO } from '../utils'

export function WinnerAnnouncementPage(props) {
    return (
    <>
        <div>
            <SEO title="Announcement" path={props.match.path} />
            <Navbar />
            <Announcement />
        </div>
    </>
    )
}
