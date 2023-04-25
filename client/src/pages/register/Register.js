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
      label: 'Email:',
      type: 'email',
      placeholder: 'Email',
      name: 'email',
      minLength: 4,
      required: true,
      maxLength: 20,
      errMsg: ''
    },
    {
      id: 2,
      label: 'Username:',
      type: 'text',
      placeholder: 'Username',
      name: 'username',
      minLength: 4,
      required: true,
      maxLength: 20,
      errMsg: ''
    },
    {
      id: 3,
      label: 'Password:',
      type: 'password:',
      placeholder: 'Password',
      name: 'password',
      minLength: 4,
      required: true,
      maxLength: 20,
      errMsg: ''
    },
    {
      id: 4,
      label: 'Confirm Password:',
      type: 'password',
      placeholder: 'Confirm Password',
      name: 'confirmPassword',
      minLength: 4,
      required: true,
      errMsg: '',
      maxLength: 20,
      pattern: values.password,
    },
  ]


  const url = 'http://localhost:4003/blog/register';

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const res = await axios.post(url, {
        email,
        username,
        password,
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
        {/* {
          inputs.map(input => (
            <>
            <label htmlFor={input.name}>{input.label}</label>
            <input {...input} value={values[input.name]} key={input.id}/>
            </>
          ))
        } */}
        <label htmlFor=''>Email:</label>
        <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required minLength={4} maxLength={20}/>

        <label htmlFor=''>Username:</label>
        <input type='text' placeholder='Email' onChange={(e)=>setUsername(e.target.value)} required minLength={4}/>

        <label htmlFor=''>Password:</label>
        <input type='password' placeholder='Enter your password...' onChange={(e)=>setPassword(e.target.value)} required minLength={4}/>

        <label htmlFor=''>Confirm Password:</label>
        <input type='password' placeholder='Confirm your password...'/>

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
