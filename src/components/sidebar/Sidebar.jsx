import { useState } from 'react'
import { motion, transform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import Links from './components/links/Links';
import Togglebutton from './components/togglebutton/Togglebutton';
import './sidebar.scss'

const variants = {
    open: {
      //clipPath: "circle(1200px at 50px 50px)",
      clipPath: "circle(1200px at calc(100% - 25px) 40px)",
      transition: {
        type: 'spring',
        stiffness: 50,
      }
    },
    closed: {
      //clipPath: "circle(20px at 50px 50px)",
      clipPath: "circle(30px at 310px 45px)", 
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,

      }

    }
  }


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? (
        // Mobile Sidebar
        <> 
          <motion.div className='sidebar' animate={open ? 'open' : 'closed'} variants={variants}>
            <div className='logowrapper'>
              <div className='logo'>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  SJ.
                </motion.span>
              </div>
            </div>
            <Links />
            <Togglebutton setOpen={setOpen} />
          </motion.div>
          
        </>
      ) : (
        // Desktop Sidebar
        <div className='sidebar'>
          <div className='logowrapper'>
            <div className='logo'>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                SJ.
              </motion.span>
            </div>
          </div>
          <Links />
        </div>
      )}
    </>
  );
};

export default Sidebar
