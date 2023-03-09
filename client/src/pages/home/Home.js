import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
  const url = 'http://localhost:4003/blog/post'

  const [posts, setPosts] = useState([])

  useEffect(()=> {
    const fetchposts = async () => {
      const res = await axios.get(url)
      setPosts(res.data)
      console.log(res)
    }
    fetchposts()
  }, [])
  return (
    <>
       <Header/>
      <div className='home'>
      <Posts posts={posts}/>
      <Sidebar/>
      </div>
    </>

  )
}

export default Home
