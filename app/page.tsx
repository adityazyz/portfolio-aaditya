"use client";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import WhyWebsite from "@/components/WhyWebsite"; 
import React, { useRef, LegacyRef } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  // for smooth scroll to Aboutme Section fand contact section
  const homeRef = useRef<HTMLElement>();
  const aboutRef = useRef<HTMLElement>();
  const experienceRef = useRef<HTMLElement>();
  const skillsRef = useRef<HTMLElement>();
  const contactRef = useRef<HTMLElement>();

  const handleHomeScroll = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    experienceRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    skillsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // nav items
  const navItems = [
    {
      name: "Home",
      func: handleHomeScroll,
    },
    {
      name: "About",
      func: handleAboutScroll,
    },
    { name: "Experience", func: handleExperienceScroll },
    { name: "Skills", func: handleSkillsScroll },
    {
      name: "Contact",
      func: handleContactScroll,
    },
  ];

  return (
    <main >
      <FloatingNav navItems={navItems} />
      <section ref={homeRef as LegacyRef<HTMLElement> | undefined}>
        <Hero
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
      </section>
      <section ref={aboutRef as LegacyRef<HTMLElement> | undefined}>
        <AboutMe />
      </section>
      <section ref={experienceRef as LegacyRef<HTMLElement> | undefined}>
        <Experience />
      </section>
      <section ref={skillsRef as LegacyRef<HTMLElement> | undefined}>
        <Skill />
      </section>
      <section>
        <WhyWebsite />
      </section>
      <section className="bg-black" ref={contactRef as LegacyRef<HTMLElement> | undefined}>
        <ContactMe />
      </section>
      <div>
        <Footer NavItems={navItems} />
      </div>
    </main>
  );
}
