import React from 'react';
import { motion } from 'framer-motion';
import './about.scss';
import SkillsSphere from './SkillsSphere';
import { useState, useEffect } from "react";


const personalEvents = [
  {
    title: "How I Found My Way to the Web",
    description:
      "It all started when my older brother showed me the magic behind web pages. I remember watching him inspect elements on a site and tweak the colors live in the browser, that moment felt like discovering a secret superpower. From then on, I was hooked. I spent evenings teaching myself HTML and CSS, marveling at how a few lines of code could transform into interactive pages that anyone, anywhere, could see.",
  },
  {
    title: "The Beginning of My Developer Journey",
    description:
      "Like many developers, I started with HTML and CSS, building static pages and experimenting with basic layouts. But everything changed when I discovered the C language. The precision of pointers, the logic behind control structures, and the thrill of watching a console program run brought a whole new depth to coding for me. That foundation became a springboard into full-stack development, where I now blend low-level systems thinking with modern web technologies to build more efficient and thoughtful applications.",
  },
  {
    title: "How It's Going",
    description:
      "Today, my days are filled with contributing to open-source projects, attending hackathons, and learning new frameworks. You'll often find me submitting pull requests on GitHub, swapping stories at tech meet-ups, or experimenting with a fresh API. Every commit is a chance to grow, and every collaboration expands my toolkit—so I never stop exploring.",
  },
  {
    title: "What I Do in My Free Time",
    description:
      "Outside of code, I wear many hats: agriculturalist, shoemaker, and perpetual hobbyist. I love getting my hands dirty, whether that's tending a garden, crafting a custom pair of shoes, or diving into a completely new field. All these adventures feed my creativity in software engineering, reminding me that inspiration can come from the most unexpected places.",
  },
];



const AboutMeTimeline = () => { 
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect hook for automatic timeline progression
  // It sets up an interval to change the active event every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through the events: increment activeIndex, reset to 0 if it exceeds length
      setActiveIndex((prev) => (prev + 1) % personalEvents.length);
    }, 6000); 

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-main-content">
          {/* Header Section */}
          <motion.div 
            className="timeline-header"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="timeline-title">
              My Journey Into{" "}
              <span className="timeline-title-gradient">
                Web Development
              </span>
            </h1>
            <p className="timeline-subtitle">
              From discovering the magic of inspect element to building full-stack applications, here's how I found my
              passion for creating digital experiences.
            </p>
          </motion.div>

          {/* Timeline Section */}
          <div className="timeline-section">
            {/* Static Timeline Line: a faint vertical line representing the full timeline path */}
            <div className="timeline-line" />

            {/* Active Progress Line: a dynamic line that fills up as the timeline progresses */}
            <div
              className="timeline-progress-line"
              // Dynamically set height based on activeIndex to show progress
              style={{ height: `${((activeIndex + 1) / personalEvents.length) * 100}%` }}
            />

            {/* Timeline Events Container */}
            <div className="timeline-events-container">
              {personalEvents.map((event, index) => (
                <motion.div
                  key={index} 
                  className={`timeline-event ${
                    index <= activeIndex ? "active" : "inactive"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot for each event */}
                  <div
                    className={`timeline-dot ${
                      index === activeIndex
                        ? "dot-active"
                        : index < activeIndex
                        ? "dot-past"
                        : "dot-future"
                    }`}
                  >
                    {/* Ping animation for the active dot to draw attention */}
                    {index === activeIndex && (
                      <div className="dot-ping-animation" />
                    )}
                  </div>

                  {/* Event Content (Title and Description) */}
                  {/* Conditionally apply the animated card styles to this div */}
                  <div className={`timeline-event-content ${index === activeIndex ? 'timeline-event-card' : ''}`}>
                    <div className="timeline-event-content-wrapper">
                      <h3
                        className={`timeline-event-title ${
                          index === activeIndex ? "text-white" : "text-gray"
                        }`}
                      >
                        {event.title}
                      </h3>

                      <p
                        className={`timeline-event-description ${
                          index === activeIndex ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="timeline-nav-dots">
              {personalEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`nav-dot ${
                    index === activeIndex
                      ? "nav-dot-active"
                      : index < activeIndex
                      ? "nav-dot-past"
                      : "nav-dot-future"
                  }`}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <SkillsSphere />
        </div>
      </div>
    </div>
  );
};

export default AboutMeTimeline;
