import Links from './components/links/Links';
import Togglebutton from './components/togglebutton/Togglebutton';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='bg'>
      <Links/>
    </div>
    <Togglebutton/>
    </div>
  )
}

export default Sidebar
