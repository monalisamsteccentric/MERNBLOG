import React from 'react'
import {format} from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({_id,title, summary, cover, content, createdAt, author}) => {
  return (
    <div className='post'>
        <div className='image'>
          <Link to={`/post/${_id}`}>
          <img src={'https://mern-blog-40dw.onrender.com/'+cover} alt="cover_image"/>
          </Link>
          
        </div>
        <div className='texts'>
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
          </Link>
          
          <div className='info'>
            <span className='author'>{author.username}</span>
            <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
          </div>
          <p className='summary'>{summary}</p>
        </div>
      </div>
  )
}

export default Post