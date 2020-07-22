import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AxiosWithAuth } from '../utils';
import YouTube from 'react-youtube';

export const VideoPage = () => {

    const [video_id, setVideoId] = useState('');

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
    }

    useEffect(() => {
        AxiosWithAuth().get('admin/video')
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err))
    })

    return (
        <section style={{ width: '100%' }}>
            <div className="card" style={{ margin: '0 25%', width: "opts.width", maxWidth: '40%' }}>
                <div className="card-body">
                    <h5 className="card-title">Daily Winner Stream!</h5>
                    <h6 className="card-subtitle mb-2"><YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} /></h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </section>
    )
}