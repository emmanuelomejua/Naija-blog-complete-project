import './topbar.css'
import {Facebook, Instagram, Search, Twitter} from '@mui/icons-material';
import avater from '../../assets/avater.jpg'
import { Link } from 'react-router-dom';


const Topbar = () => {
  const user = true

  return (
    <div className='top'>
      <div className='topLeft'>
        <Twitter  className='topIcon'/>
        <Facebook className='topIcon'/>
        <Instagram  className='topIcon'/>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>Home</Link>
          </li>
          <li className='topListItem'>
            <Link to='/about' className='link'> About</Link>
          </li>
          <li className='topListItem'>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
          <li className='topListItem'>
          <Link to='/write' className='link'>Write</Link>
          </li>
          <li className='topListItem link'>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <>
             <img src={avater} alt='profile' className='topImg'/>
            </>
          ) : (
            <>
            <ul className='topList'>
              <li className='topListItem'>
              <Link  className='link' to='/login'>Login</Link>
              </li>
              <li className='topListItem'>
              <Link  className='link' to='/register'>Register</Link>
              </li>
            </ul>
         
          </>
          )
        }
        <Search className='topSearchIcon'/>
      </div>
    </div>
  )
}

export default Topbar
