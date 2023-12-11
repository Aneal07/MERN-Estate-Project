import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure  } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const Signin = () => {
  const [formData, setFormData ] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
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
      dispatch(signInStart())
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
       dispatch(signInFailure(data.message))  
      return
    }
    dispatch(signInSuccess(data))
    navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
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
        <OAuth/>
     </form>
     <div className='flex gap-2 mt-5'>
      <p>Dont Have an account?</p>
      <Link to={"/sign-up"}>
        <span className='text-blue-600 hover:underline'>Sign up</span>
      </Link>
     </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default Signin

