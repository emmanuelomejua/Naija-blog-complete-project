import './sidebar.css'
import img from '../../assets/avater.jpg'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [cat, setCat] = useState([])
  const url = 'http://localhost:4003/blog/category'

  useEffect(()=>{
    const getCats = async () => {
      try {
        const res = await axios.get(url)
        setCat(res.data)
      } catch (error) {
        throw error
      }
    }
    getCats()
  },[url])


  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT US</span>
        <img src={img} alt='' className='img'/>

        <p>There is no hard rule that would define which components need props and which don't. It comes with experience and simply depends on the role of a component. 
        </p>
      </div>

      <div className='sidebarItem'>
         <span className='sidebarTitle'>Categories</span>
         <ul className='sidebarList'>
          {
            cat?.map((c)=> (
              <Link to = {`/?cat=${c?.name}`} className='link'>
                 <li className='sidebarListItem' key={c._id}>{c?.name}</li>
              </Link>
             
            ))
          }
            
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
