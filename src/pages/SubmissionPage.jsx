import React, { useState, useEffect } from 'react';
// import moment from 'moment'
import { AxiosWithAuth, SEO } from '../utils';
import { PromptComponent, SubmissionForm, Navbar } from '../components';
import PromptSubmissionModal from '../components/submission/PromptSubmissionModal';
import { useHistory } from 'react-router-dom';
// import {subCountStart, subCountEnd, now} from '../utils/schedule'

export function Submission(props) {
  const [prompt, setPrompt] = useState();
  const [id, setId] = useState();
  const history = useHistory();

  useEffect(() => {
    AxiosWithAuth()
      .get('/upload/prompt')
      .then((response) => {
        // console.log(response.data);
        setPrompt(response.data.prompt.prompt);
        setId(response.data.prompt.id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SEO title="Submission" path={props.match.path} />
      <div className="custom-bg d-flex justify-content-center align-items-center">
        <div className="container-sm">
          <Navbar />
          <h2 className="text-center m-5 mobile-padding">
            Daily Writing Contest
          </h2>
          <div
            className="submissionMain bg-white custom-border rounded-lg p-5"
            id="submissionMain"
          >
            <PromptSubmissionModal />
            <PromptComponent prompt={prompt} />
            {/* {now >= subCountStart && now < subCountEnd && <SubmissionForm promptId={id} />} */}
            <SubmissionForm promptId={id} />
          </div>
        </div>
      </div>
    </>
  );
}
