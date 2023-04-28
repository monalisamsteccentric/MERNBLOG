import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './pages/CreatePost'
import IndexPage from './pages/IndexPage'
import { UserContextProvider } from './UserContext'
import PostPage from './pages/PostPage'
import EditPost from './pages/EditPost'

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path="/edit/:id" element={<EditPost/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
    
  )
}

export default App