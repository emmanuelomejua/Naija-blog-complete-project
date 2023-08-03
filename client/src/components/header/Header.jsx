import './header.css'
import { cover } from '../../contants/images'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>New & popular</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img src={cover} alt='' className='headerImg'/>
    </div>
  )
}

export default Header
