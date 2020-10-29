import React from "react";
import { Route } from "react-router-dom";
import {
  StoryMasterContent,
  StoryMasterSignIn,
  SignIn,
  SignUp,
} from "../components";
// import ToS from "../components/terms_and_privacy/ToS";

export function Home({setUsername}) {
  return (
    <>
      <div className="row align-items-center mx-auto homeDiv">
        <section className="col-sm-12 col-md-8 custom-bg d-flex align-items-center">
          <Route path={`/signin`} component={StoryMasterSignIn} />
          <Route exact path={`/`} component={StoryMasterContent} />
        </section>
        <section className="col-sm-12 col-md-3 mx-auto bg-white">
          <Route path={`/signin`} component={(props)=><SignIn {...props} setUsername={setUsername}/>} />
          <Route exact path={`/`} component={SignUp} />
        </section>
      </div>
    </>
  );
}
