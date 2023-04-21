import { Add } from '@mui/icons-material'
import './write.css'
import img from '../../assets/1676915893233.jpg'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from '../../context/Context'
import axios from 'axios'

const Write = () => {

  const url1 = 'http://localhost:4003/blog/upload'
  const url = 'http://localhost:4003/blog/post/'

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
      const data = new FormData()
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post(url1, data)
      } catch (error) {
        throw error
      }
    }
      try {
        const res = await axios.post(url, newPost)
        window.location.replace(url + res.data._id)

      } catch (error) {
        throw error
      }
  }


  return (
    <div className='write'onSubmit={handleSubmit}>
      {
        file &&  <img src={URL.createObjectURL(file)} alt='' className='writeImg'/>
      }
       
      <form className='writeForm'>

        <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
                <Add className='writeIcon'/>
            </label>
            <input type='file' name='fileInput' id='fileInput' onChange={(e) => setFile(e.target.files[0])} style={{display: 'none'}}/>

            <input 
              type='text' 
              placeholder='Title' 
              className='writeInput' 
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className='writeFormGroup'>
            <textarea 
              placeholder='Write post...' 
              type='text' 
              className='writeInput writeText'
              onChange={(e) => setDesc(e.target.value)}
            />
        </div>

        <button type='submit' className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
