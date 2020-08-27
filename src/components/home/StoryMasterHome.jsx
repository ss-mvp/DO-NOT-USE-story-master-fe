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
        Sign Up for
        <span className="font-weight-bold"> Free Daily Story Contest</span>
      </h2>
      <p></p>
      {about.map((each) => (
        <AboutContent
          subtitle={each.section.subtitle}
          paragraph={each.section.description}
        />
      ))}
    </div>
  );
}
