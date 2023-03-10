import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { PersonRounded } from '@mui/icons-material'
import img from '../../assets/1676721627373.jpg'

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
             <span className='settingsUpdateTitle'>Update account</span>
             <span className='settingsDeleteTitle'>Delete account</span>
            </div>

            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img src={img} alt='' />
                    <label htmlFor='fileInput'>
                        <PersonRounded className='settingsPPIcon'/>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}}/>
                </div>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' placeholder='email@email.com'/>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='email@email.com'/>

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />

                <button className='settingSubmit'>Update</button>
            </form>
        </div>
      <Sidebar/>
    </div>
  )
}

export default Settings
