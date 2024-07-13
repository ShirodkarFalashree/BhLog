import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import AuthService from './appwrite/auth';
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import PostCard from './components/PostCard';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    AuthService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
<div className='min-h-screen flex flex-wrap content-between justify-center items-center bg-gray-400'>
<div className='w-1/2 block text-center'>
        <Header />
        <main>
          TODO:   <Outlet />
        </main>
        <Footer />
        
      </div>
    </div>
  ) : null
}

export default App;
