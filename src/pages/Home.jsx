import React from 'react'
import { Route } from 'react-router-dom'
import { StoryMasterContent, SignIn, SignUp } from '../components'

export function Home() {
    return (
        <>
            <div className="row align-items-center rounded-lg custom-border mt-3">
                <div className="col-sm-12 col-md-7 custom-bg d-flex align-items-center">
                    <StoryMasterContent />
                </div>
                <div className="col-sm-12 col-md-4 m-3">
                    <Route path={`/signin`} component={ SignIn } />
                    <Route exact path={`/`} component={ SignUp } />
                </div>
            </div>
        </>
    )
}
