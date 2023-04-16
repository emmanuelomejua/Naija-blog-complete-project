import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'

const Register = () => {

  const url = 'http://localhost:4003/blog/register';

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const res = await axios.post(url, {
        email,
        password
       })
       console.log(res)
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <main className='login' onSubmit={handleSubmit}>
        <span className='loginTitle'>Register</span>
      <form className='loginForm'>
        <label htmlFor=''>Email:</label>
        <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor=''>Password:</label>
        <input type='password' placeholder='Enter your password...' onChange={(e)=>setPassword(e.target.value)}/>

        <label htmlFor=''>Confirm Password:</label>
        <input type='password' placeholder='Confirm your password...' />

        <button className='loginButton' disabled={loading}>Register</button>
        {error && <span className='err'>{error}</span>}
      </form>

      <button type='submit' className='loginRegisterButton'>
          <Link to='/login' className='link' style={{color:'white'}}>Login</Link>
      </button>
    </main>
  )
}

export default Register
