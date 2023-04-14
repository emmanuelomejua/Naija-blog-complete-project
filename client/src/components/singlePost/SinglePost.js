import './singlepost.css'
import img from '../../assets/FB_IMG_1671999614097.jpg'
import { Delete, Edit } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const SinglePost = () => {

  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const url = `http://localhost:4003/blog/post/${path}`



  const [post, setPost] = useState({})

  useEffect(()=> {
    const getPost = async () => {
      const res = await axios.get(url)
      console.log(res)
     setPost(res.data)
    }
    getPost()
  },[url])

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src={img} alt='post' className='singlePostImg'/>

        <h1 className='singlePostTitle'>
            {post.title}
            <div className='singlePostEdit'>
                <Edit className='singlePostIcon'/>
                <Delete className='singlePostIcon'/>
            </div>
        </h1>
      </div>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor'>
          Author: <b><Link to={`/?user=${post.username}`} className='link'>{post.username}</Link></b>
        </span>
        <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p  className='singlePostDesc'>
        {post.desc}
      </p>
    </div>
  )
}

export default SinglePost
