import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AxiosWithAuth, SEO } from '../utils';
import YouTube from 'react-youtube';

export const VideoPage = (props) => {

    const [video, setVideo] = useState({
        video_id: '',
        video_link: ''
    });

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
        AxiosWithAuth().get('upload/video')
        .then(response => {
            console.log('response', response.data.returnPackage)
            setVideo(response.data.returnPackage)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="custom-bg" style={{paddingTop: '7%', width: '100%' }}>
            <SEO title="Daily Winner Stream" path={props.match.path} />
            <div className="card" style={{ margin: '0 25%', width: "opts.width", maxWidth: '40%' }}>
                <div className="card-body">
                    <h5 className="card-title">Daily Winner Stream!</h5>
                    <h6 className="card-subtitle mb-2"><YouTube videoId={video.video_id} opts={opts} onReady={_onReady} /></h6>
                    <p className="card-text">Top Three stories picked daily!</p>
                    <a href={video.video_link} className="card-link">Open on YouTube.com</a>
                </div>
            </div>
        </section>
    )
}