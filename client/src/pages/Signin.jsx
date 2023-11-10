import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signin = () => {
  const [formData, setFormData ] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
    const res = await fetch('/api/auth/signin', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if(data.success === false) {
       setLoading(false)
      setError(data.message)    
      return
    }
    setLoading(false)
    setError(null)
    navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
    
  }
 
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='font-semibold text-3xl text-center my-7'>Sign in</h1>
     <form onSubmit={ handleSubmit } className='flex flex-col gap-4 '>
      <input type="text" placeholder='email'
       className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
      <input type="text" placeholder='password'
       className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
       <button disabled={loading}
       className='bg-slate-700 text-white p-3 rounded-lg uppercase
        hover:opacity-90 disabled:opacity-95'>
        {loading ? 'Loading...' : 'Sign In'}
        </button>
     </form>
     <div className='flex gap-2 mt-5'>
      <p>Dont Have an account?</p>
      <Link to={"/sign-in"}>
        <span className='text-blue-600'>Sign up</span>
      </Link>
     </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default Signin

