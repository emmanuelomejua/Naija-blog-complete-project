import './post.css'
import { breaking } from '../../contants/images'
import { Link } from 'react-router-dom'
import Single from '../../pages/single/Single'


const Post = ({post}) => {


    return(
    <div className='post'>
        
         <img src={post.photo ? post.photo: breaking} alt='post' className='postImg'/> 
        
       
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
