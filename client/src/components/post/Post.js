import './post.css'
import img from '../../assets/FB_IMG_1671999614097.jpg'

const Post = () => {
    return(
    <div className='post'>
        <img src={img} alt='post' className='postImg'/>
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>

            <span className='postTitle'>This is a post title</span>
           <hr/>
           <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
        it was mentioned before already, but it is extremely important: Props are optional!React will always pass prop data into your components, but you don't have to work with that prop parameter. You don't even have to define it in your component function if you don't plan on working with it.There is no hard rule that would define which components need props and which don't. It comes with experience and simply depends on the role of a component. 
   
        You might have a general Header component that displays a static header (with a logo, title, and so on), and such a component probably needs no external configuration (in other words, no "attributes" or other kinds of data passed into it). It could be self-contained, with all the required values hardcoded into the component.
        It was mentioned before already, but it is extremely important: Props are optional!React will always pass prop data into your components, but you don't have to work with that prop parameter. You don't even have to define it in your component function if you don't plan on working with it.There is no hard rule that would define which components need props and which don't. It comes with experience and simply depends on the role of a component. You might have a general Header component that displays a static header (with a logo, title, and so on), and such a component probably needs no external configuration (in other words, no "attributes" or other kinds of data passed into it). It could be self-contained, with all the required values hardcoded into the component
        </p>
    </div>
    )
}

export default Post
