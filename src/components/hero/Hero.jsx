import { animate, motion, optimizedAppearDataAttribute } from "framer-motion";
import "./hero.scss";
import { initCompiler } from "sass";


const textVariants={
  initial: {
    x: -500,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition: {
      duration:2,
      repeat: Infinity
    }
  },
}


const sliderVariants={
  initial: {
    x: 0,
  },
  animate:{
    x: "-220%",
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,

    },
  },
}

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.4,
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial='initial'
          animate='animate'
          >
          <motion.h2 variants={textVariants}>Hi,I'm Sarah Ogunlalu</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the latest work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png"/>
        </motion.div>

         <div
            className="imageContainer"
            initial="hidden"
          animate="visible"
          variants={imageVariants}
          >
          {/* Rotating circle element **/}
    <svg className="circleSvg" viewBox="0 0 506 506">
    <motion.circle
      cx="253"
      cy="253"
      r="245"
      fill="none"
      stroke="rebeccapurple"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{
        strokeDasharray: "24 10 0 0",
        rotate: 0
      }}
      animate={{
        strokeDasharray: [
          "15 120 25 25",
          "16 25 92 72", 
          "4 290 22 22"
        ],
        rotate: [120, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse",
      }}
    />
  </svg>
    {/*<img src="/hero.png" alt="profile"/>*/}
    <motion.div
            className="imageWrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <img
              src="/hero.png"
              alt="Profile"
              className="profileImage"
            />
          </motion.div>
          
    </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influhencer
      </motion.div>
    </div>
  )
}

export default Hero;
