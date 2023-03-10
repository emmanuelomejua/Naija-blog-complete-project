import './singlepost.css'
import img from '../../assets/FB_IMG_1671999614097.jpg'
import { Delete, Edit } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


const SinglePost = ({post}) => {

  const url = 'http://localhost:4003/blog/post'

  const location = useLocation()
  const path = location.pathname.split('/')[2]

  useEffect(()=> {
    const getPost = async () => {
      const res = await axios.get(`${url}/${path}`)
      console.log(res)
    }
    getPost()
  }, [path])

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src={img} alt='post' className='singlePostImg'/>

        <h1 className='singlePostTitle'>
            This is a post title
            <div className='singlePostEdit'>
                <Edit className='singlePostIcon'/>
                <Delete className='singlePostIcon'/>
            </div>
        </h1>
      </div>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor'>Author: <b>Tompolo</b></span>
        <span className='singlePostDate'>1 hour ago</span>
      </div>
      <p  className='singlePostDesc'>
      it was mentioned before already, but it is extremely important: Props are optional!React will always pass prop data into your components, but you don't have to work with that prop parameter. You don't even have to define it in your component function if you don't plan on working with it.There is no hard rule that would define which components need props and which don't. It comes with experience and simply depends on the role of a component. 
      You might have a general Header component that displays a static header (with a logo, title, and so on), and such a component probably needs no external configuration (in other words, no "attributes" or other kinds of data passed into it). It could be self-contained, with all the required values hardcoded into the component.
        It was mentioned before already, but it is extremely important: Props are optional!React will always pass prop data into your components, but you don't have to work with that prop parameter. You don't even have to define it in your component function if you don't plan on working with it.There is no hard rule that would define which components need props and which don't. It comes with experience and simply depends on the role of a component. You might have a general Header component that displays a static header (with a logo, title, and so on), and such a component probably needs no external configuration (in other words, no "attributes" or other kinds of data passed into it). It could be self-contained, with all the required values hardcoded into the component
      </p>
    </div>
  )
}

export default SinglePost
