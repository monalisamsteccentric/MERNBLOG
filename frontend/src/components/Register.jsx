import React, { useState } from 'react'

const Register = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    async function register(e){
       e.preventDefault()
       const response = await fetch('https://mern-blog-40dw.onrender.com/register',{
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'content-type': 'application/json'}
        
       })
       if(response.status === 200){
        alert('registration succesful')
       }else{
        alert('registrationn failed')
       }
    }
  return (
    <form className='register'>
    <h1>Register</h1>
    <input type="text" placeholder='username' 
    value={username}
    onChange={(e)=>setusername(e.target.value)}/>
    <input type="password" placeholder='password' 
    value={password}
    onChange={(e)=>setpassword(e.target.value)}/>
    <button onClick={register}>Register</button>
   </form>
  )
}

export default Register