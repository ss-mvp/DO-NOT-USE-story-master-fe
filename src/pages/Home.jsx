import React from 'react'
import { Route } from 'react-router-dom'
import { StoryMasterContent, SignIn, SignUp } from '../components'

export function Home() {
    return (
        <>
            <div className="row align-items-center mx-auto">
                <div className="col-sm-12 col-md-8 home-bg d-flex align-items-center">
                    <StoryMasterContent />
                </div>
                <div className="col-sm-12 col-md-3 mx-auto">
                    <Route path={`/signin`} component={ SignIn } />
                    <Route exact path={`/`} component={ SignUp } />
                </div>
            </div>
        </>
    )
}
