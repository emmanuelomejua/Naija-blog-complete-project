import { Add } from '@mui/icons-material'
import './write.css'
import { useState, useContext } from 'react'
import { context } from '../../context/Context'
import axios from 'axios'

const Write = () => {

  const url = 'http://localhost:4003/blog/post'

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const [file, setFile] = useState('')
  const [previewSource, setPreviewSource] = useState('')


  const { user } = useContext(context)

  const handleFileChange = (e) => {
    setFile(e.target.file)
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')


    if(previewSource){
      uploadImage(previewSource)
    }

    try{
      const res = await axios.post(url, {
        username: user.username,
        title,
        desc,
      })
      console.log(res.data)
    }catch (err){
      console.log(err)
    }

  }

  const uploadImage = async (base64EncodedImage) => {
    try {
      await axios.post(url,{
        photo: file
      })
      console.log(base64EncodedImage)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='write' onSubmit={handleSubmit}>

      {
        previewSource &&
      <img src={previewSource} alt='' className='writeImg'/>
      }
      
       
      <form className='writeForm'>

        <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
                <Add className='writeIcon'/>
            </label>
            <input 
            type='file' 
            name='fileInput' 
            id='fileInput'
            value={file} 
            onChange={handleFileChange} 
            style={{display: 'none'}}
            />

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
