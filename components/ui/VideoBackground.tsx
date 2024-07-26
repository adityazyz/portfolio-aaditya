'use client'
import React, { useState } from 'react';

const VideoBackground = ({ video, content, backupImage }: {
  video: string,
  content: React.ReactNode,
  backupImage?: string,
}) => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="relative h-full w-full">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          className="absolute inset-0 h-full w-full object-cover z-10"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : backupImage && (
        <div
          className="absolute inset-0 h-full w-full object-cover z-10"
          style={{ backgroundImage: `url(${backupImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      )}
      <div className={`absolute inset-0 bg-black ${video === "/FastVideo.mov" ? "opacity-60" : "opacity-20"} z-20`} ></div>
      <div className="relative z-30">{content}</div>
    </div>
  );
};

export default VideoBackground;
