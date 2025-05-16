import './navbar.scss'
import Sidebar from '../sidebar/Sidebar';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          SJ.
        </motion.span>
      </div>
    </div>
  );
}

export default Navbar;

