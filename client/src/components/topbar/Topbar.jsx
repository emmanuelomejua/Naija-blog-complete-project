import './topbar.css'
import {Facebook, Instagram, Search, Twitter} from '@mui/icons-material';
import avater from '../../assets/avater.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../context/Context';


const Topbar = () => {

  const PF = 'http://localhost:4003/images/'
  const { dispatch, user } = useContext(context)

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
  }


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
          <li className='topListItem link' onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <>
            {
              user.profilePic ? 
              <img src={PF + user.profilePic} alt='' className='topImg'/> : 
              <img src={avater} alt='' className='topImg'/>
            }
            
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
