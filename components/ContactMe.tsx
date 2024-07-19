import React from "react";
import VideoBackground from "./ui/VideoBackground";
import ContactForm from "./ui/ContactForm";

function ContactMe() {
  const content = <ContactForm />;
  return (
    <div className="py-[5vh] bg-black">
      <VideoBackground content={content} video={"new-normal-video.mp4"} backupImage="/new-normal-photo.png"/>
    </div>
  );
}

export default ContactMe;
