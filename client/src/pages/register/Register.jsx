import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'
import { useFormik } from 'formik'
import { validationSchema } from '../../utils/loginValidation'
 
const Register = () => {

  const url = 'http://localhost:4003/blog/register';

  
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleFormSubmit = async (e) => {
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


  const { handleChange, handleBlur,   errors, touched, isSubmitting, values, handleSubmit } = useFormik({
    initialValues: {
        email: '',
        password: '',
        username: '',
        confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
})


  return (
    <main className='login' onSubmit={handleSubmit}>
        <h2 className='loginTitle'>Register</h2>
      <form className='loginForm' onSubmit={handleFormSubmit} autoComplete='off'>

        <label htmlFor='email'>Email:</label>
        <input 
          type='email' 
          name='email' 
          placeholder='Email' 
          value={values.email} 
          onChange={handleChange} 
          required 
          onBlur={handleBlur}
          className={errors.email && touched.email ? 'input-error1' : ''}
        />
         {errors.email && touched.email && <span className='input-error'>{errors.email}</span>}

        <label htmlFor='username'>Username:</label>
        <input 
          type='text' 
          name='username' 
          placeholder='Username' 
          value={values.username} 
          onChange={handleChange} 
          required 
          minLength={4}
          onBlur={handleBlur}
          className={errors.username && touched.username ? 'input-error1' : ''}
        />
        {errors.username && touched.username && <span className='input-error'>{errors.username}</span>}

        <label htmlFor='password'>Password:</label>
        <input type='password' 
          name='password' 
          value={values.password} 
          placeholder='Enter your password...' 
          onChange={handleChange} 
          required 
          minLength={4}
          onBlur={handleBlur}
          className={errors.password && touched.password ? 'input-error1' : ''}
        /> 
         {errors.password && touched.password && <span className='input-error'>{errors.password}</span>}

        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input 
          type='password' 
          name='confirmPassword' 
          value={values.confirmPassword} 
          placeholder='Confirm your password...' 
          onChange={handleChange}  
          pattern={values.password} 
          required
          onBlur={handleBlur}
          className={errors.confirmPassword && touched.confirmPassword ? 'input-error1' : ''}
        />
         {errors.confirmPassword && touched.confirmPassword && <span className='input-error'>{errors.confirmPassword}</span>}

        <button type='submit' className='loginButton' disabled={isSubmitting}>Register</button>
       
      </form>

      <button className='loginRegisterButton'>
          <Link to='/login' className='link' style={{color:'white'}}>Login</Link>
      </button>
    </main>
  )
}

export default Register
