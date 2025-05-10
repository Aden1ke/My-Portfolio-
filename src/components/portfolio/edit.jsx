import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items =[
  {
    id:"1",
    title:"React Comarace",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  {
    id:"2",
    title:"Shell Project",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  {
    id:"3",
    title:"Flask Comarace",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  {
    id:"4",
    title:"Bank plugin",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  {
    id:"5",
    title:"Next js Comarce",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

];


  const Single = ({ item, containerRef }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: ref,
    //offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [ -300, 300]);

  return (
    <section>
    <div className="container" >
    <div className="wrapper" >
    <div className="imageContainer" ref={ref}>
      <img src={item.img}  alt=""/>
    </div>

      <motion.div className="textContainer" style={{ y }}> 
        <h2>{item.title}</h2>
        <p>{item.descp}</p>
        <button>See Demo</button>
      </motion.div>
    </div>
    </div>
    </section>
  );
};

// Portfolio.jsx
const Portfolio = () => {
  const ref = useRef();

  // ✅ Track scroll of the specific container
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });


  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div> 
      {items.map((item) => (
        <Single item={item} key={item.id} containerRef={ref} />
      ))}

    </div>
  );
};


export default Portfolio
