import React from 'react';

const VideoBackground = ({video,content} : {
  video : string
  content : React.ReactNode
}) => {
  return (
    <div className="relative h-full w-full">
      <video
        autoPlay
        loop
        muted
        playsInline  // Add playsInline attribute
        className="absolute inset-0 h-full w-full object-cover z-10" 
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`absolute inset-0 bg-black ${video === "fast-video.mov" ? "opacity-60" : "opacity-20"} z-20`} ></div>
      <div className="relative z-30">{content}</div> {/* Ensure the content is on top */}
    </div>
  );
};

export default VideoBackground;
