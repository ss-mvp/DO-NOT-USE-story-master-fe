import React from "react";
import AboutContent from "./AboutContent";
import about from "./about.json";

export function StoryMasterContent() {
  return (
    <div className="story-master-home mx-auto">
      <h1 className="m-4 text-center ss-title text-primary display-2 mb-5">
        Story Squad
      </h1>

      <h2 className="m-4 text-left text-center">
        Sign Up for our
        <span className="font-weight-bold"> Free Daily Story Contest</span>
      </h2>
      <h3
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          color: '#429cb5',
          fontFamily: 'Bangers, cursive',
        }}
      >
        HOW IT WORKS
      </h3>

      <div
      >
        {about.map((each) => (
          <AboutContent
          key={each.id}
            time={each.section.time}
            subtitle={each.section.subtitle}
            paragraph={each.section.description}
          />
        ))}
        <p
          style={{
              fontStyle: 'italic',
              marginTop: '5px'
          }}
        >
          Unleash your creativity and sign up today!
      </p>
    </div>

    </div>
  );
}
