import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <main className='login'>
        <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label htmlFor=''>Email:</label>
        <input type='text' placeholder='Email' />

        <label htmlFor=''>Password:</label>
        <input type='text' placeholder='Enter password...' />

        <button className='loginButton'>Login</button>
      </form>

      <button className='loginRegisterButton'>
        <Link to='/register' className='link' style={{color:'white'}}>Register</Link>
       </button>
    </main>
  )
}

export default Login
