import React from 'react'
import SignUpImg from '../assets/signup.png'
import Template from '../components/Template'
const SignUp = (props) => {
    const setisloggedIn  = props.setisloggedIn
  return (
    <div>
        <Template 
            
            title = "Welcome Back"
            desc1 = "Build your skills for today"
            desc2 = " Education to furture-proof your career "
            image = {SignUpImg} 
            formType = "signup"
            setisloggedIn = {setisloggedIn}
        />
    </div>
  )
}

export default SignUp
