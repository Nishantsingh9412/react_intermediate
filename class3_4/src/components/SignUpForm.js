import {React,useState} from 'react'
import { toast } from 'react-hot-toast';
import { FaEyeSlash , FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUpForm = (props) => {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  const [ShowPassword,setShowPassword] = useState(false);

  function changeHandler(event){
    
    setFormData((prevData) =>(
        {
          ...prevData,
          [event.target.name]:event.target.value
        }
    ))
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("password doesn't match");
    }
    props.setisloggedIn(true);
    toast.success(" Logged In successfully ")

    const AccountData  = {
      ...formData
    };
    console.log("Printing account Data");
    console.log(AccountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div> 
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
      </div>


    <form onSubmit={submitHandler}>
      {/* fname and lname and mail address */}
      <div>
        <label>
          <p> First Name  <sup> * </sup>  </p>
          <input 
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter First name"
            value={formData.firstName}
          />
        </label>

        <label>
          <p> Last Name  <sup> * </sup> </p>
          <input 
            required
            type="text"
            name="lastName"
            onChange={changeHandler}
            placeholder="Enter Last Name"
            value={formData.lastName}
          />
        </label>


        <label>
          <p> Email  Address <sup> * </sup> </p>
          <input 
            required
            type="email"
            name="email"
            typeof='email'
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>
      </div>

      {/* Create Password and confirmPassword */}

      <div>
        <label>
            <p> Create Password <sup> * </sup> </p>
            <input 
              required
              type={ShowPassword ? ("text") : ("password") }
              name="password" 
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password  }
            />
              <span onClick={() => setShowPassword((prev) => !prev) }>
                    {ShowPassword ? (<FaEye />) : (<FaEyeSlash />) } 
              </span>
          </label>

      <label>
            <p> Confirm Password <sup> * </sup> </p>
            <input 
              required
              type={ShowPassword ? ("text") : ("password") }
              name="confirmPassword" 
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
              <span onClick={() => setShowPassword((prev) => !prev) }>
              {ShowPassword ? (<FaEye />) : (<FaEyeSlash />) } 
                </span>
          </label>
      </div>

        <button>
                Create Account
        </button>

    </form>

    </div>

  )
}

export default SignUpForm
