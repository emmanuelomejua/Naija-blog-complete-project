import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import { context } from '../../context/Context'
import axios from 'axios'


const Login = () => {

  const url = 'http://localhost:4003/blog/login'
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, loading, error } = useContext(context)

  const handleeSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'})
    try {
      const res = await axios.post(url, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
    } catch (error) {
      dispatch({type: 'LOGIN_FAIL'})
    }
  }


  return (
    <main className='login'>
        <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleeSubmit}>
        <label htmlFor=''>Email:</label>
        <input type='email' placeholder='Email' ref={userRef}/>

        <label htmlFor=''>Password:</label>
        <input type='password' placeholder='Enter password...' ref={passwordRef}/>

        <button type='submit' className='loginButton' disabled={loading}>Login</button>
        {error && <span className='input-error'>Please enter a valid email and password</span>}
      </form>

      <button className='loginRegisterButton'>
        <Link to='/register' className='link' style={{color:'white'}}>Register</Link>
       </button>
    </main>
  )
}

export default Login
