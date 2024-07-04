import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import AuthService from './appwrite/auth';
import {login,logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally()
  },[])

  return (
    <>
      <h1>BHLOG</h1>
    </>
  )
}

export default App
