import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <main className='login'>
        <span className='loginTitle'>Register</span>
      <form className='loginForm'>
        <label htmlFor=''>Email:</label>
        <input type='text' placeholder='Email' />

        <label htmlFor=''>Password:</label>
        <input type='text' placeholder='Enter your password...' />

        <label htmlFor=''>Confirm Password:</label>
        <input type='text' placeholder='Confirm your password...' />

        <button className='loginButton'>Register</button>
      </form>

      <button className='loginRegisterButton'>
      <Link to='/login' className='link' style={{color:'white'}}>Login</Link>
      </button>
    </main>
  )
}

export default Register
