import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Template = (props) => {
    const title = props.title;
    const desc1 = props.desc1;
    const desc2 = props.desc2;
    const image = props.image
    const formType = props.formType;
    const setisloggedIn = props.setisloggedIn;

    console.log(" Dkh lo ji Form");
    console.log(props.FormData);

    console.log("ye hai form type");
    console.log(formType);
  return (
    <div>
        <div>
            <h1> {title} </h1>
            <p>
                <span> {desc1} </span>
                <span> {desc2} </span>
            </p>
            {
                formType === "signup" ? (<SignUpForm setisloggedIn={setisloggedIn} />) : (<LoginForm setisloggedIn={setisloggedIn}/>)
            }
            <div>
                <div> </div>
                <p> OR </p>
                <div> </div>
            </div>
            <button> 
                <p> Sign up with Google </p>
            </button>

            <div>
                <img  
                src={frameImage} 
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
                />

                <img 
                    src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                />
            </div>
        </div>
    </div>
  )
}

export default Template
     