import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "../utils";
import { PromptComponent, SubmissionForm, Navbar, ProgressBar } from "../components";
import { CountDownClock } from "../components/clock/CountDownClock";

export function Submission() {
  const [prompt, setPrompt] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    AxiosWithAuth()
      // .get("https://ss-mvp.herokuapp.com/upload/prompt")
      .get("upload/prompt")
      .then((response) => {
        console.log(response.data);
        setPrompt(response.data.prompt.prompt);
        setId(response.data.prompt.id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="custom-bg d-flex justify-content-center align-items-center">
        <div className="container-sm">
          <Navbar />
          <ProgressBar />
          <h2 className="text-center m-5">Daily Writing Contest</h2>
          <PromptComponent prompt={prompt} />
          <SubmissionForm promptId={id} />

          <CountDownClock />
        </div>
      </div>
    </>
  );
}
