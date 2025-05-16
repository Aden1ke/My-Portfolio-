import { useEffect, useRef, useState } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: "1",
    title: "React Comarace",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
  {
    id: "2",
    title: "Shell Project",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
  {
    id: "3",
    title: "Flask Comarace",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
  {
    id: "4",
    title: "Bank plugin",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
  {
    id: "5",
    title: "Next js Comarce",
    img: "https://images.pexels.com/photos/1142986/pexels-photo-1142986.jpeg",
    descp:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
];

const Single = ({ item, containerRef }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
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

const Projects = () => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>
      {mounted &&
        items.map((item) => (
          <Single item={item} key={item.id} containerRef={ref} />
        ))}
    </div>
  );
};

export default Projects;

