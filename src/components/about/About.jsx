import './about.scss';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 12 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        delay: 0.2 
      }
    }
  };

  return (
    <div className="about-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="about-title"
      >
        Here's a Quick Introduction About Me and What I Love to Do
      </motion.h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-items">
          {/* Section 1 */}
          <motion.div 
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="content"
              variants={contentVariants}
              whileHover={{ fontWeight: 700 }}
              transition={{ duration: 0.2 }}
            >
              <h3>How I Found My Way to the Web</h3>
              <p>It all started when my older brother showed me the magic behind web pages. I remember watching him inspect elements on a site and tweak the colors live in the browser,that moment felt like discovering a secret superpower. From then on, I was hooked. I spent evenings teaching myself HTML and CSS, marveling at how a few lines of code could transform into interactive pages that anyone, anywhere, could see.</p>
            </motion.div>
            
            <div className="timeline-dot"></div>
            
            <motion.div 
              className="image-container"
              variants={imageVariants}
            >
              <div className="image-placeholder">
                <img src="/tech_meet2.jpg" alt="profile"/>
                <img src="/tech_meet1.jpg" alt="profile"/>
              </div>
            </motion.div>
          </motion.div>

          {/* Section 2 - Reversed */}
          <motion.div 
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="image-container"
              variants={imageVariants}
            >
              <div className="image-placeholder">
                <img src="/tech_dinmah.jpg" alt="profile"/>
                <img src="/tech_rich.jpg" alt="profile"/>
              </div>
            </motion.div>
            
            <div className="timeline-dot"></div>
            
            <motion.div 
              className="content"
              variants={contentVariants}
              whileHover={{ fontWeight: 700 }}
              transition={{ duration: 0.2 }}
            >
              <h3>The Beginning of My Developer Journey</h3>
              <p>Like many developers, I started with HTML and CSS, building static pages and experimenting with basic layouts. But everything changed when I discovered the C language. The precision of pointers, the logic behind control structures, and the thrill of watching a console program run brought a whole new depth to coding for me. That foundation became a springboard into full-stack development, where I now blend low-level systems thinking with modern web technologies to build more efficient and thoughtful applications.</p>
            </motion.div>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="content"
              variants={contentVariants}
              whileHover={{ fontWeight: 700 }}
              transition={{ duration: 0.2 }}
            >
              <h3>How It’s Going</h3>
              <p>Today, my days are filled with contributing to open-source projects, attending hackathons, and learning new frameworks. You’ll often find me submitting pull requests on GitHub, swapping stories at tech meet-ups, or experimenting with a fresh API. Every commit is a chance to grow, and every collaboration expands my toolkit—so I never stop exploring.</p>
            </motion.div>
            
            <div className="timeline-dot"></div>
            
            <motion.div 
              className="image-container"
              variants={imageVariants}
            >
              <div className="image-placeholder">
                <img src="/tech_open.jpg" alt="profile"/>
                <img src="/open_source.jpg" alt="profile"/>
              </div>
            </motion.div>
          </motion.div>

          {/* Section 4 - Reversed */}
          <motion.div 
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
          >
            {/*<motion.div 
              className="image-container"
              variants={imageVariants}
            >
              <div className="image-placeholder">
                <span>Hobbies</span>
              </div>
            </motion.div>*/}
            
            <div className="timeline-dot"></div>
            
            <motion.div 
              className="content"
              variants={contentVariants}
              whileHover={{ fontWeight: 700 }}
              transition={{ duration: 0.2 }}
            >
              <h3>What I Do in My Free Time</h3>
              <p>Outside of code, I wear many hats: agriculturalist, shoemaker, and perpetual hobbyist. I love getting my hands dirty, whether that’s tending a garden, crafting a custom pair of shoes, or diving into a completely new field. All these adventures feed my creativity in software engineering, reminding me that inspiration can come from the most unexpected places.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
