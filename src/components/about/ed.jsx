import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // default styles
import './about.scss'; // your custom overrides (optional)
import { motion } from 'framer-motion';
import SkillsSphere from './SkillsSphere';


const personalEvents = [
  {
    title: 'How I Found My Way to the Web',
    description:
      'It all started when my older brother showed me the magic behind web pages. I remember watching him inspect elements on a site and tweak the colors live in the browser, that moment felt like discovering a secret superpower. From then on, I was hooked. I spent evenings teaching myself HTML and CSS, marveling at how a few lines of code could transform into interactive pages that anyone, anywhere, could see.',
    images: ['/tech_meet2.jpg', '/tech_meet1.jpg'],
  },
  {
    title: 'The Beginning of My Developer Journey',
    description:
      'Like many developers, I started with HTML and CSS, building static pages and experimenting with basic layouts. But everything changed when I discovered the C language. The precision of pointers, the logic behind control structures, and the thrill of watching a console program run brought a whole new depth to coding for me. That foundation became a springboard into full-stack development, where I now blend low-level systems thinking with modern web technologies to build more efficient and thoughtful applications.',
    images: ['/tech_dinmah.jpg', '/tech_rich.jpg'],
  },
  {
    title: 'How It’s Going',
    description:
      'Today, my days are filled with contributing to open-source projects, attending hackathons, and learning new frameworks. You’ll often find me submitting pull requests on GitHub, swapping stories at tech meet-ups, or experimenting with a fresh API. Every commit is a chance to grow, and every collaboration expands my toolkit—so I never stop exploring.',
    images: ['/tech_open.jpg', '/open_source.jpg'],
  },
  {
    title: 'What I Do in My Free Time',
    description:
      'Outside of code, I wear many hats: agriculturalist, shoemaker, and perpetual hobbyist. I love getting my hands dirty, whether that’s tending a garden, crafting a custom pair of shoes, or diving into a completely new field. All these adventures feed my creativity in software engineering, reminding me that inspiration can come from the most unexpected places.',
    images: [],
  },
];

const About = () => {
  return (
    <section className="about-timeline">
      <h2 className="timeline-title">My Journey</h2>
      <VerticalTimeline lineColor="#fff">
        {personalEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
            iconStyle={{ background: '#915EFF', color: '#fff' }}
            icon={<span style={{ fontSize: '1.5rem' }}>🚀</span>}
          >
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <p>{event.description}</p>
              {event.images.length > 0 && (
                <div className="timeline-images">
                  {event.images.map((img, i) => (
                    <img key={i} src={img} alt={`event-${i}`} />
                  ))}
                </div>
              )}
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

     <SkillsSphere />
    </section>
  );
};

export default About;

