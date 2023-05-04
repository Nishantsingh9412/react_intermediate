import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
const Login = (props) => {
    const setisloggedIn = props.setisloggedIn 
  return (
   <Template 
    title = "Welcome Back"
    desc1 = "Build your skills for today"
    desc2 = " Education to furture-proof your career "
    image = {loginImg} 
    formType = "login"
    setisloggedIn = {setisloggedIn}
   />
  )
}

export default Login
