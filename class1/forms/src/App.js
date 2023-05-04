import { useState } from 'react';
import './App.css';

function App() {


  // const [firstName,setFirstName] = useState("");
  // const [lastName,setlastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function ChangeHandler(ev    ent){
  //   // console.log("First Name Value");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }
  // function LastChangeHandler(event){
  //   // console.log("Last Name Value");
  //   // console.log(event.target.value);
  //   setlastName(event.target.value)

  // }



    const [formData,setformData] = useState(
      {
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isVisible:false,
        mode:"",
        favCar:"",
      }
    );  

   

    function ChangeHandler(event){
      const {name,value,checked,type} =  event.target
      setformData(data =>{
        return {
          ...data,       //---  prev state copy krenge using spread operator 
          // [event.target.name]:event.target.value     // ---  event.target.firstName = 'hello'
          [name]:type === "checkbox" ? checked:value 
        }
      });
    }
    // console.log(formData);

    function SubmitHandler(event){
      event.preventDefault()
      console.log("submission Done ");
      console.log(formData);
    }

  return (
    <div className="App">
      <form onSubmit={SubmitHandler}>
        
        <input 
        type='text'
        placeholder='First name'
        name='firstName'
        onChange={ChangeHandler}
        // value={formData.firstName}
        >
      </input>    
      <br />
      <br />

      &nbsp;
      &nbsp;
      <input 
        type='text'
        placeholder='Last name'
        name='lastName'
        onChange={ChangeHandler}
        value={formData.lastName}
        >
        </input>
          <br />
          <br />

        <input 
        type='email'
        placeholder='Enter Mail'
        onChange={ChangeHandler}
        name='email'
        value={formData.email}
         >
        </input>
        <textarea 
          placeholder='enter your comments here'
          onChange={ChangeHandler}
          name='comments'
          value={formData.comments}
        />
        <br />
        <br />
        <fieldset >
          <legend> checkboxes </legend>
          <input 
          type='checkbox'
          onChange={ChangeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
          />
          <label htmlFor='isVisible'> Bhaiya kya aap mujhe dekh paa rhe ho  </label>

          <input 
          type='radio'
          onChange={ChangeHandler}
          name='mode'
          value="Online-Mode"
          id='Online-Mode'
          checked={formData.mode === "Online-Mode"}
           />
           <label htmlFor='Online-Mode'> Online Mode</label>

           <input 
          type='radio'
          onChange={ChangeHandler}
          name='mode'
          value="Offline-Mode"
          id='Offline-Mode'
          checked={formData.mode === "Offline-Mode"}
           />
           <label htmlFor='Offline-Mode'> Offline Mode </label>
        </fieldset>


    <label htmlFor='favCar'> Tell me you favCar</label>
    <br></br>
      <select
          onChange={ChangeHandler}
          id='favCar'
          name='favCar'
          value={formData.favCar}
        > 
        <option value="scorpio"> Scorpio </option>
        <option value="fortuner"> Fortuner </option>
        <option value="thar"> Thar </option>
        <option value="legender"> Legender </option>
        <option value="defender"> Defender </option>

      </select>

            <input type='submit'  value='submit' />

      </form>
    </div>
  );
}

export default App;
