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

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'Username must contain a minimum of 4 characters',
      label: 'Username',
      pattern: '[A-Za-z0-9]{4,20}$',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Please enter a valid email address',
      label: 'Email',
      required: true
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password must be a minimum of 4 characters',
      pattern: '/{4,25}$/',
      label: 'Password',
     
      required: true
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Password and Confirm Password must match',
      label: 'Confirm Password',
      pattern: values.password,
      required: true
    },
  ]

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }


  const url = 'http://localhost:4003/blog/register';

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [blured, setBlured] = useState(false)

  const handleBlur = (e) => {
    setBlured(true)
  }

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
          onBlur={handleBlur}
          focused={blured.toString()}
          className='input1'
        />
        <span className='input-error'>Email must be at least 4 characters</span>

        <label htmlFor='username'>Username:</label>
        <input 
          type='text' 
          name='username' 
          placeholder='Username' 
          value={values.username} 
          onChange={handleChange} 
          required 
          minLength={4}
          onFocus={handleBlur}
          focused={blured.toString()}
          className='input2'
        />
         <span className='input-error'>Username must be a minimum of 4 characters</span>

        <label htmlFor='password'>Password:</label>
        <input type='password' 
          name='password' 
          value={values.password} 
          placeholder='Enter your password...' 
          onChange={handleChange} 
          required 
          minLength={4}
          onFocus={handleBlur}
          focused={blured.toString()}
          className='input3'
        /> 
          <span className='input-error'>Password must be a minimum of 4 characters</span>

        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input 
          type='password' 
          name='confirmPassword' 
          value={values.confirmPassword} 
          placeholder='Confirm your password...' 
          onChange={handleChange}  
          pattern={values.password} 
          required
          onFocus={handleBlur}
          focused={blured.toString()}
          className='input4'
        />
           <span className='input-error'>Password and confirm password must match</span>

        <button className='loginButton' disabled={loading}>Register</button>
       
      </form>

      <button type='submit' className='loginRegisterButton'>
          <Link to='/login' className='link' style={{color:'white'}}>Login</Link>
      </button>
    </main>
  )
}

export default Register
