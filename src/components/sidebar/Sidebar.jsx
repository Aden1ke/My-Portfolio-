import { useState } from 'react'
import { motion, transform } from 'framer-motion'
import Links from './components/links/Links';
import Togglebutton from './components/togglebutton/Togglebutton';
import './sidebar.scss'

const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: 'spring',
        stiffness: 50,
      }
    },
    closed: {

      clipPath: "circle(30px at 50px 50px)",
      transitions: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,

      }

    }
  }
const Sidebar = () => {

  const[open,setOpen] = useState(false)

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
