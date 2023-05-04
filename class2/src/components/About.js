import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  
  const navigate = useNavigate()
  function clickHandler(){
    // move to labs page 
      navigate("/labs")
  }


  function backHandler(){
    // Go back
      navigate(-1);
  }

  return (
    <div>
        <div>
          About Page
        </div>
      <button onClick={clickHandler}> Move to LAbs Page </button>
      <button onClick={backHandler}> Peeche to dekho  </button>
    </div>
      
  )
}

export default About
