import './contact.css'

const inputs = [
  {
    id: 0,
    name: 'text',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
  },

]

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='contact'>
      <h2>Contact Us</h2>
      
        <form className='cForm' onSubmit={handleSubmit}>
          {
            inputs.map(input => (
              <input {...input} key={input.id} className='cInput' minLength={4}/>
           ))
          }
          <textarea rows={7} placeholder='Message...' className='cInput'/>
          <button type='submit' className='cBtn'>Submit</button>
        </form>

      
    </div>
  )
}

export default Contact
