import React from 'react';
import './Histogram.css';

import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(window.Plotly);

const Histogram = (props) => {
  return (
    <div className="histogram">
      {props.data && props.layout ? (
        <>
          <Plot
            {...props}
            style={{ width: '100%' }}
            config={{ staticPlot: true, responsive: true }}
          />
          <p>
            Above you will see a graph representing what we at Story Squad call
            our “Squad Score”. What exactly is a Squad Score? We’re glad you
            asked!
          </p>
          <p>What Squad Score is:</p>
          <ul>
            <li>Built just for use in the context of Story Squad</li>
            <li>
              Represents our best attempt to quantify creative story-writing
              features by combining other validated language arts metrics
            </li>
            <li>
              Based on text analysis utilizing Natural Language Processing
              techniques that we conduct on every submitted story
            </li>
            <li>Used to help determine the top submissions each week</li>
          </ul>
          <p>What Squad Score is not:</p>
          <ul>
            <li>
              Intended to be an indicator of your writing ability or a replacement
              for a formal assessment
            </li>
            <li>
              Free from error -- while messy handwriting or spelling mistakes are
              not penalized, they can impact transcription accuracy, which in turn
              can cause variability in your Squad Score
            </li>
          </ul>
          <p>
            The histogram above shows a distribution of the scores for this
            day’s stories, so you can see how you stacked up. Be sure to come
            back tomorrow to see if you can move up!
          </p>
        </>
      ) : (
        'Unable to load plot.'
      )}
    </div>
  );
};

export default Histogram;
