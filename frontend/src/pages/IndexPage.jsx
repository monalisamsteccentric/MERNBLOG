import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
  const [myposts, setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response=>{
      response.json().then(posts=>{
        setPosts(posts)
      })
    })
  },[])
  return (
   <>
     {
      myposts.length > 0 && myposts.map(post=>{
        return (<Post {...post}/>)
      })
     }
   </>
  )
}

export default IndexPage