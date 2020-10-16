import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../../utils';

export function SubmissionForm(props) {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [btnText, setBtnText] = useState('Submit')
  // track if the user chose a file in order to activate the submit button
  const [hasChosenFile, setHasChosenFile] = useState(false)

  // Prompt ID incoming from our submission page
  const prompt_id = props.promptId;

  const baseUrl =
    process.env.REACT_APP_FE_ENV === 'development'
      ? 'http://localhost:5000'
      : process.env.REACT_APP_BE;

  useEffect(()=>{
    setSubmitButton()
  },[isLoading, hasSubmitted]) 
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("image.image[0].type", image.image[0].type)
        checkImageType(image.image[0].type)
        setIsLoading(true)
        // console.log("IMAGE", typeof(image.image[0].type))


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
            setImageURL(url.data.imageUrl);
            console.log('success!');
            setIsLoading(false)
            setHasSubmitted(true)
            let date = new Date()
            localStorage.setItem('submit', date.getDate())
          })
          .catch((err) => {
            console.log('upload error', err)
            setIsLoading(false)
            setHasSubmitted(false)
            setBtnText('Try again')
          });
      };
      const handleUpload = (e) => {
        setImage({ image: e.target.files });
        // prevents the user from clicking submit until a file is added \\
        setHasChosenFile(true)
      };

  const setSubmitButton = () => {
    if(isLoading){
      setBtnText('Loading...')
    }
    if(hasSubmitted){
      setBtnText('Submitted')
    }
    if(localStorage.getItem('submit')){
      let today = new Date()
      let day = today.getDate();
      if(localStorage.getItem('submit') === day){
        setBtnText('Submitted')
        setHasSubmitted(true)
      }
    }
  }

  // CHECK IMAGE TYPE \\
  // ONLY ALLOW JPEG OR PNG \\
  const checkImageType = (imgType) => {
    if ( imgType === "image/jpeg" || imgType === "image/png" || imgType === "image/jpg" || imgType === "application/octet-stream" )  {
      console.log(`Image type is OK. type: ${imgType}`)
    } else {
      console.log("Else statement in check Image Type")
    }
  } 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="upload-button d-flex justify-content-center">

          {prompt_id === undefined ? "" : (
                      
          <label className="m-3 btn btn-outline-primary pr-5 pl-5">
          Choose a file
          <input onChange={handleUpload} type="file" id="storyImage" hidden/>
        </label>
          )}



        </div>

        {hasChosenFile === false ? "" : <div className="submit-button d-flex justify-content-center">
          <button className="m-3 btn btn-warning btn-lg pr-5 pl-5" type="submit">
              {btnText}
          </button>
        </div>}

      </form>
    </>
  );
}
