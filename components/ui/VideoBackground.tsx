import React, { useEffect, useRef } from 'react';

const VideoBackground = ({ video, content }: { video: string; content: React.ReactNode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handlePlay = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch((error) => {
          console.error('Error attempting to play the video:', error);
        });
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', handlePlay);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handlePlay);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-10"
      >
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className={`absolute inset-0 bg-black ${video === 'fast-video.mov' ? 'opacity-60' : 'opacity-20'} z-20`}></div>
      <div className="relative z-30">{content}</div>
    </div>
  );
};

export default VideoBackground;
