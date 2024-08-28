import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div>
            <img className='absolute' 
             src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg" 
            alt="body" 
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>
                 {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {
                !isSignInForm && (
                    <input 
                    type="text" 
                    placeholder='Full Name' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-sm' />
                )
            }
            <input 
                    type="text" 
                    placeholder='Email Address' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-sm' />
            <input 
            type="password" 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700 rounded-sm' />
            

            <button 
            className='p-4 my-4 bg-red-700 w-full rounded-md'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                
                </p>
        </form>
    </div>
  )
}

export default Login