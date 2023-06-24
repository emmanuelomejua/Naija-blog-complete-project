import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'

const Register = () => {

  const [values, setValues ] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }


  const url = 'http://localhost:4003/blog/register';

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {email, username, password} = values
      setLoading(true)
      const res = await axios.post(url, {
        email,
        username,
        password,
       })
       
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

        <label htmlFor='email'>Email:</label>
        <input 
          type='email' 
          name='email' 
          placeholder='Email' 
          value={values.email} 
          onChange={handleChange} 
          required 
          minLength={4} 
          maxLength={20}
        />
        {error.email && <span>Email must be at least 4 characters</span>}

        <label htmlFor='username'>Username:</label>
        <input 
          type='text' 
          name='username' 
          placeholder='Username' 
          value={values.username} 
          onChange={handleChange} 
          required 
          minLength={4}
        />
         {error.username && <span>Username must be a minimum of 4 characters</span>}

        <label htmlFor='password'>Password:</label>
        <input type='password' 
          name='password' 
          value={values.password} 
          placeholder='Enter your password...' 
          onChange={handleChange} 
          required 
          minLength={4}
        />
         {error.password && <span>Password must be a minimum of 4 characters</span>}

        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input 
          type='password' 
          name='confirmPassword' 
          value={values.confirmPassword} 
          placeholder='Confirm your password...' 
          onChange={handleChange}  
          pattern={values.password} 
          required
        />
           {error.confirmPassword && <span className='input-error'>Password and confirm password must match</span>}

        <button className='loginButton' disabled={loading}>Register</button>
       
      </form>

      <button type='submit' className='loginRegisterButton'>
          <Link to='/login' className='link' style={{color:'white'}}>Login</Link>
      </button>
    </main>
  )
}

export default Register
