import React, { useCallback } from "react";
import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: "290",
    width: "540",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubeVideo;
