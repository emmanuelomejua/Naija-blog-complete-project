import './header.css'
import img from '../../assets/avater1.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>New & popular</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img src={img} alt='' className='headerImg'/>
    </div>
  )
}

export default Header
