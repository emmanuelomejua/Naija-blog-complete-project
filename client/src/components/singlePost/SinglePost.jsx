import './singlepost.css'
import img from '../../assets/FB_IMG_1671999614097.jpg'
import { Delete, Edit } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { context } from '../../context/Context'


const SinglePost = () => {

  const PF = 'http://localhost:4003/images/'
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
      const res = await axios.delete(url, {data: { username: user.username }})
      if(!res){
        return 'Unable to delete, something went wrong'
      } else {
        window.location.replace('/')
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {
          post.photo ?  <img src={PF+post.photo} alt='post' className='singlePostImg'/> :  <img src={img} alt='post' className='singlePostImg'/>
        }

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
              post.username === user?.username && (
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
          Author: <b><Link to={`/?user=${post.username}`} className='link'>{post.username}</Link></b>
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
