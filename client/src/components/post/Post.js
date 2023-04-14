import './post.css'
import img from '../../assets/FB_IMG_1671999614097.jpg'
import { Link } from 'react-router-dom'
import Single from '../../pages/single/Single'


const Post = ({post}) => {

    return(
    <div className='post'>
        <img src={img} alt='post' className='postImg'/>
        <div className='postInfo'>
            <div className='postCats'>
                {post.categories?.map((c)=> (
                     <span className='postCat' key={c}>{c}</span>
                ))}
            </div>
            <Link to={`/post/${post._id}`} className='link' element={<Single/>}>
               <span className='postTitle'>{post.title}</span>
            </Link>
           
           <hr/>
           <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>
        {post.desc}
        </p>
    </div>
    )
}

export default Post
