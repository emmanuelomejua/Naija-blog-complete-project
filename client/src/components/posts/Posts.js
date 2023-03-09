import './posts.css'
import Post from '../post/Post'

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {
        posts.map((p, i)=>(
          <Post posts={p} key={i}/>
        ))
      }
    </div>
  )
}

export default Posts
