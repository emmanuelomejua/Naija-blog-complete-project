import './sidebar.css'
import img from '../../assets/avater.jpg'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src={img} alt=''/>

        <p>There is no hard rule that would define which components need props and which don't. It comes with experience and simply depends on the role of a component. 
        </p>
      </div>

      <div className='sidebarItem'>
         <span className='sidebarTitle'>Categories</span>
         <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>fashion</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Culture</li>
         </ul>
      </div>

      <div className='sidebarItem'>
         <span className='sidebarTitle'>Follow us</span>
          <div className='sidebarSocial'>
            <Twitter className='sidebarIcon'/>
            <Facebook className='sidebarIcon'/>
            <Instagram className='sidebarIcon'/>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
