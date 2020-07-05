import React from 'react'
import { Route } from 'react-router-dom'
import { StoryMasterContent, SignIn, SignUp } from '../components'

export function Home() {
    return (
        <>
            <div className="row align-items-center mx-auto">
                <section className="col-sm-12 col-md-8 custom-bg d-flex align-items-center">
                    <StoryMasterContent />
                </section>
                <section className="col-sm-12 col-md-3 mx-auto bg-white">
                    <Route path={`/signin`} component={ SignIn } />
                    <Route exact path={`/`} component={ SignUp } />
                </section>
            </div>
        </>
    )
}
