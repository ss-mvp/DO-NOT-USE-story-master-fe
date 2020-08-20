import React from 'react';
import './index.css';
import chevron from './roundedchevron.svg';
import chevronActive from './roundedchevronActive.svg';
import chevronComplete from './roundedchevronCompleted.svg';

export const ProgressBar = () => {
    return (<div className="progress-container">
        <div className="chevron"><p>Submit your story</p><img src={chevronComplete}></img></div>
        <div className="chevron"><p>Rank your favorites</p><img src={chevronActive}></img></div>
        <div className="chevron"><p>Watch winners livestream</p><img src={chevron}></img></div>
        <div className="chevron"><p>See today's top 3</p><img src={chevron}></img></div>
    </div>)
}
