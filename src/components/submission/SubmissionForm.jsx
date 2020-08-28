import React, { useState } from 'react';
import { AxiosWithAuth } from '../../utils';

export function SubmissionForm(props) {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState('');

  const uploadUrl =
    process.env.REACT_APP_FE_ENV === 'development'
      ? 'http://localhost:5000/upload'
      : 'https://ss-mvp.herokuapp.com/upload';

    const handleSubmit = async (e) => {
        e.preventDefault();
    
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
        formData.append("image", image.image[0]);
        formData.append("promptId", props.promptId);
        formData.append("base64Image", base64Image);
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        AxiosWithAuth()
          // .post("https://ss-mvp.herokuapp.com", formData, config)
          .post("http://localhost:5000/upload", formData, config)
    
          .then((url) => {
            setImageURL(url.data.imageUrl);
            console.log("success!");
          })
          .catch((err) => console.log(err));
      };
    
      // const handleUpload = (e) => {
      //   setImage({ image: e.target.files });
      // };
    

    const toBase64 = async (file) => {
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
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    AxiosWithAuth()
      .post(uploadUrl, formData, config)
      // .post("http://localhost:5000/upload", formData, config)

      .then((url) => {
        setImageURL(url.data.imageUrl);
        console.log('success!');
      })
      .catch((err) => console.log(err));
  };

  const handleUpload = (e) => {
    setImage({ image: e.target.files });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="upload-button d-flex justify-content-center">
          <label className="m-3 btn btn-outline-primary pr-5 pl-5">
            Choose a file
            <input onChange={handleUpload} type="file" id="storyImage" hidden />
          </label>
        </div>
        <div className="submit-button d-flex justify-content-center">
          <button className="m-3 btn btn-warning btn-lg pr-5 pl-5" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
