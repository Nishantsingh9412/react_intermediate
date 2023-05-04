import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEyeSlash , FaEye } from 'react-icons/fa';  
import { toast } from 'react-hot-toast';

const LoginForm = (props) => {
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:"",password:""

  })

  const[ShowPassword,setShowPassword] = useState(false)

  function ChangeHandler(event){
      setFormData( (prevData) => (
        {
         ...prevData,
          [event.target.name] : event.target.value,
        }
      ))

    }

    function submitHandler(event){
      event.preventDefault();
      props.setisloggedIn(true);
      toast.success("Logged In");
      toast.error("shi hai login kr rhe ho")
      navigate("/dashboard");
    }


  return (
    <div> 
      <form onSubmit={submitHandler} >
        <label>
          
           <p>  Email Address  <sup> * </sup>  </p>
            <input
              required
              type="email"
              value={formData.email}
              onChange = {ChangeHandler}
              placeholder = "Enter Email Add"
              name="email"
            >
            </input>
        </label>

        <label>
            <p>   Password  <sup> * </sup>  </p>
           <input
             required
             type={ShowPassword?("text"):("password")}  
             value={formData.password}
             onChange = {ChangeHandler}
             placeholder = "Enter Pasword"
             name="password"
            />


           <span onClick={() => setShowPassword((prev) => !prev) }>
              {ShowPassword ? (<FaEye />) : (<FaEyeSlash />) } 
           </span>

        <Link to="#">
            <p> Forgot Password </p>
        </Link>

       </label>

        <button >
            Sign In    
        </button>
      </form>
    </div>
  )
}

export default LoginForm
