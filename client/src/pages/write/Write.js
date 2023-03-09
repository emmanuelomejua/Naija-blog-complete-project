import { Add } from '@mui/icons-material'
import './write.css'
import img from '../../assets/1676915893233.jpg'

const Write = () => {
  return (
    <div className='write'>
        <img src={img} alt='' className='writeImg'/>
      <form className='writeForm'>

        <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
                <Add className='writeIcon'/>
            </label>
            <input type='file' name='fileInput' id='fileInput' style={{display: 'none'}}/>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>

        <div className='writeFormGroup'>
            <textarea placeholder='Write post...' type='text' className='writeInput writeText'></textarea>
        </div>

        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
