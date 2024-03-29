import React,{useContext, useState} from 'react'
import {Navigate} from 'react-router-dom'
import { UserContext } from '../UserContext'

const Login = () => {
  const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUserInfo } = useContext(UserContext)

    async function login(e){
      e.preventDefault()
      const response = await fetch('https://mern-blog-40dw.onrender.com/login',{
       method: 'POST',
       body: JSON.stringify({username, password}),
       headers: {'content-type': 'application/json'},
       credentials: 'include',
       
      })
      if(response.ok){
        response.json().then(userInfo=>{
          setUserInfo(userInfo)
          setRedirect(true)
        })
        
      }else{
        alert('wrong credentails')
      }
    
   }
   if(redirect){
    return <Navigate to={'/'}/>
   }
  return (
   <form className='login' onSubmit={login}>
    <h1>Login</h1>
    <input type="text" placeholder='username' 
    value={username}
    onChange={e=> setusername(e.target.value)}/>
    <input type="password" placeholder='password' 
    value={password}
    onChange={e=>setpassword(e.target.value)}/>
    <button>Login</button>
   </form>
  )
}

export default Login