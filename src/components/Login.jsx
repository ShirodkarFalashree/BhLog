import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Buttom,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const {register , handleSubmit }= useForm()
    const [error,setError]=useState("")

    const login = async 

  return (
    <div>Login</div>
  )
}

export default Login