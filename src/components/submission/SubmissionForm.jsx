import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosWithAuth } from '../../utils';

export function SubmissionForm(props) {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [btnText, setBtnText] = useState('Submit');
  const history = useHistory();
  const date = new Date();
  const today = date.getDate();

  // track if the user chose a file in order to activate the submit button
  const [hasChosenFile, setHasChosenFile] = useState(false);

  // Prompt ID incoming from our submission page
  const prompt_id = props.promptId;
  
  useEffect(() => {
    setSubmitButton();
  }, [isLoading, hasSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('submit') == today) {
      history.push('/dashboard');
    } else {
      checkImageType(image.image[0].type);
      setIsLoading(true);

      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      const base64Image = await toBase64(image.image[0]);
      // Changes to formData upload
      const formData = new FormData();
      formData.append('image', image.image[0]);
      formData.append('promptId', props.promptId);
      formData.append('base64Image', base64Image);
      // const config = { headers: { 'Content-Type': 'multipart/form-data'} };
      AxiosWithAuth()
        .post(`/upload`, formData)
        .then((url) => {
          setIsLoading(false);
          setHasSubmitted(true);
          localStorage.setItem('submit', today);
        })
        .catch((err) => {
          // console.log('upload error', err)
          setIsLoading(false);
          setHasSubmitted(false);
          setBtnText('Try again');
        });
    }
  };

  const handleUpload = (e) => {
    setImage({ image: e.target.files });
    // prevents the user from clicking submit until a file is added \\
    setHasChosenFile(true);
  };

  const setSubmitToLocalStorage = () => {
    localStorage.setItem('Submitted Boolean', 'True');
  };

  const setSubmitButton = () => {
    if (isLoading) {
      setBtnText('Loading...');
    }
    if (hasSubmitted) {
      setBtnText('Dashboard');
    }
    if (localStorage.getItem('submit') == today) {
      setBtnText('Dashboard');
      setHasSubmitted(true);
      setSubmitToLocalStorage();
    }
  };

  // CHECK IMAGE TYPE \\
  // ONLY ALLOW JPEG OR PNG \\
  const checkImageType = (imgType) => {
    if (
      imgType === 'image/jpeg' ||
      imgType === 'image/png' ||
      imgType === 'image/jpg' ||
      imgType === 'application/octet-stream'
    ) {
      console.log(`Image type is OK. type: ${imgType}`);
    } else {
      console.log('Else statement in check Image Type');
    }
  };

  return (
    <div>
      {localStorage.getItem('submit') == today ? (
        <p style={{ margin: '0 0 1% 0' }}>Your submission was received!</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="upload-button d-flex justify-content-center">
          {prompt_id === undefined ||
          localStorage.getItem('submit') == today ? null : (
            <label className="m-3 btn btn-outline-primary pr-5 pl-5">
              {hasChosenFile ? image && image.image[0].name : 'Choose a file'}
              <input
                onChange={handleUpload}
                type="file"
                id="storyImage"
                hidden
              />
            </label>
          )}
        </div>

        {hasChosenFile === false &&
        localStorage.getItem('submit') != today ? null : (
          <div className="submit-button d-flex justify-content-center">
            <button
              className="m-3 btn btn-warning btn-lg pr-5 pl-5"
              type="submit"
            >
              {btnText}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

// upon submit take the state of submitted === true and set it to local storage
// push the user to their dashboard
// deny access to submission
