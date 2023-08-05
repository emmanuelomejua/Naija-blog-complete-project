import './singlepost.css'
import { breaking } from '../../contants/images'
import { Delete, Edit } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { context } from '../../context/Context'


const SinglePost = () => {

  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const url = `http://localhost:4003/blog/post/${path}`

  const [post, setPost] = useState({})
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(()=> {
    const getPost = async () => {
      try {
         const res = await axios.get(url)
         setPost(res.data)
      } catch (error) {
        alert('An error occured')
      }
     
    }
    getPost()
  },[url])

  const { user } = useContext(context)

  const handleDelete = async (e) => {
    try {
      const res = await axios.delete(url, {data: { email: user.email }})
      if(!res){
        return 'Unable to delete, something went wrong'
      } else {
        window.location.replace('/')
      }
    } catch (error) {
      throw Error
    }
  }

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>

         <img src={post.photo ? post.photo: breaking} alt='post' className='singlePostImg'/> 
        
        {
          updateMode ? 
          <>
          (
            <input type='text' value={post.title} className='singlePostTitleInput'/>
          )
          </>:        
           <h1 className='singlePostTitle'>
            {post.title}
            {
              post.email === user?.email && (
                <div className='singlePostEdit'>
                <Edit className='singlePostIcon' onClick={(e) => setUpdateMode(true)}/>
                <Delete className='singlePostIcon' onClick={handleDelete}/>
            </div>
              )
            }
           </h1>
        }

      </div>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor'>
          Author: <b><Link to={`/?user=${post.email}`} className='link'>{post.username}</Link></b>
        </span>
        <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
      </div>
      {
        updateMode ? <textarea  className='singlePostDescInput'/> : <p  className='singlePostDesc'> {post.desc}</p>
      }
      
    </div>
  )
}

export default SinglePost
