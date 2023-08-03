import './topbar.css'
import {Facebook, Instagram, Search, Twitter} from '@mui/icons-material';
import { noprofile } from '../../contants/images';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../context/Context';


const Topbar = () => {

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
            <Link to='/settings' className='link'>Setting</Link>
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
                <img src={user.profilePic ? user.profilePic : noprofile} alt='' className='topImg'/> 
                <span className='topbar__username'> {user.username}</span>

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
        {/* <Search className='topSearchIcon'/> */}
      </div>
    </div>
  )
}

export default Topbar
