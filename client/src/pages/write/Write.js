import { Add } from '@mui/icons-material'
import './write.css'
import img from '../../assets/1676915893233.jpg'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from '../../context/Context'
import axios from 'axios'

const Write = () => {

  const url = 'http://localhost:4003/blog/post'

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState('')
  const { user } = useContext(context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.email,
      title,
      desc,
    }
    if(file){
      const data = FormData()
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post(url, data)
      } catch (error) {
        throw error
      }
    }
  }


  return (
    <div className='write'onSubmit={handleSubmit}>
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
            <textarea placeholder='Write post...' type='text' className='writeInput writeText'/>
        </div>

        <button type='submit' className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
