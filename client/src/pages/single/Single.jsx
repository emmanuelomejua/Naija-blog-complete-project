import './single.css'
// import Topbar from '../../components/topbar/Topbar'
import { Sidebar, SinglePost} from '../../components'

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single
