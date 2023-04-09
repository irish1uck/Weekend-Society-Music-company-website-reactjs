import React from "react";
import { c_0030, c_0032 } from "../../resources/ClassNames";
import "../../styling/components/videos/Video.css";

function Video({ title, url }) {
  return (
    <div className={c_0030}>
      <iframe
        className={c_0032}
        src={url}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title={!!title && title}
      />
    </div>
  );
}

export default Video;
