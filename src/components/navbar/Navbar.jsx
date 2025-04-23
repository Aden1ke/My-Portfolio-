import './navbar.scss'
import Sidebar from '../sidebar/Sidebar';
import Links from '../sidebar/components/links/Links';
import {motion} from "framer-motion";


const Navbar = () => {
  return (
    <div className='navbar'>
    {/*sidebar**
    <Sidebar/>*/}
    <div className='wrapper'>
    <motion.span
      initial={{opacity:0, scale:0.5}} 
      animate={{opacity:1, scale:1}} 
      transition={{duration:1}}
    >SJ.</motion.span>

    {/* Navigation Links */}
    <Links />

      
    <div className='socials'>
    <a href='#'><img src='/linkedin.png' alt=''/></a>
    <a href='#'><img src='/x.png' alt=''/></a>
    <a href='#'><img src='/instagram.png' alt=''/></a>
    </div>
    <Sidebar /> {/* ← Moved inside */}
    </div>
    </div>
  )
}

export default Navbar
