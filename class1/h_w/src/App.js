import { useState } from 'react';
import './App.css';

function App() {

  const[formData,setFormData] = useState(
      {
        fname : "",
        lname : "",
        email:"",
        streetAddress:"",
        city:"",
        state:"",
        countries:"",
        zip:"",
        candidates:false,
        comments:false,
        offers:false,
        notification:"", 
      }
    );

  function ChangeHandler(event){
    const {name,value,checked,type} = event.target
      setFormData(data => {
        return {
          ...data,
          // [event.target.name]:event.target.value
          [name]:type === "checkbox"?checked:value
        }
      });
  }

  function SubmitHandler(event){
    event.preventDefault();
    console.log(" Data Submitted successfully ");
    console.log(formData);
  }



  return (
    <div className="">
        <br />
      <div className='d-flex justify-content-center text-start'>
        <form onSubmit={SubmitHandler}>
          <div className="form-group col-sm">
              <label htmlFor='firstName' className='text-sm-left'> First Name </label>
              <input 
              type='text' 
              id='firstName' 
              name='fname' 
              className='form-control'
              onChange={ChangeHandler}
              /> 
          </div>
          <div className="form-group col-sm-">
              <label htmlFor='lastName'> Last Name </label>
              <input 
              type='text' 
              id='lastName' 
              name='lname' 
              className='form-control'
              onChange={ChangeHandler}
              /> 
          </div>
          <div className="form-group col-sm">
              <label htmlFor='email'> Email  Address</label>
              <input 
              type='email' 
              id='email' 
              name='email' 
              className='form-control' 
              placeholder='Enter email'
              onChange={ChangeHandler}
              /> 
          </div>

          {/* <div className="form-group col-sm">
          <label htmlFor='country'> Country </label>
            <input type='button' id='country' name='country' className='form-control'/> 
          </div> */}
          <div className='form-group col-sm'>
                <label for="ExampleformControl">  Country  </label>
                  <select
                   name='countries' 
                   className="form-control" 
                   id="exampleFormControlSelect1"
                   onChange={ChangeHandler}
                   >
                    <option value="select"  > Select   </option>
                    <option value="india"> India    </option>
                    <option value="china"> China    </option>
                    <option value="brazil"> Brazil   </option>
                    <option value="turkey"> Turkey   </option>
                    <option value="germany"> Germany  </option>
                  </select>
          </div>
          

          <div className="form-group col-md">
              <label for="inputAddress2">Street Address</label>
              <input 
              type="text" 
              className="form-control" 
              name='streetAddress'
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              onChange={ChangeHandler}
              / >
          </div>
          <div className="form-group col-md">
              <label for="inputCity">City</label>
              <input 
              type="text" 
              className="form-control" 
              name='city'
              id="inputCity"
              onChange={ChangeHandler}
              />
          </div>
          <div className="form-group col-md">
              <label for="inputCity">State / Province </label>
              <input 
              type="text" 
              className="form-control" 
              name='state'
              id="inputCity"
              onChange={ChangeHandler}
              />
          </div>
          <div className="form-group col-md">
              <label for="inputCity">Zip / Postal </label>
              <input 
              type="text" 
              className="form-control" 
              id="inputCity"
              name='zip'
              onChange={ChangeHandler}
              />
          </div>
          <div>
            <br />
            <h6>By Email </h6>
              <div className="form-group col-sm">
              <input 
                type="checkbox" 
                className="form-check-input"
                name='comments'
                id='comments' 
                checked={formData.comments}
                onChange={ChangeHandler}
              />&nbsp;
              <label className="form-check-label" htmlFor="comments"> Comments </label>
              <p> Get notified when a candidate posts a comment on a posting   </p>
            </div>
            <div className="form-group col-sm">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  name='candidates'
                  id="candidates" 
                  checked={formData.candidates}
                  onChange={ChangeHandler}
                  />&nbsp;
                <label className="form-check-label" htmlFor="candidates"> Candidates </label>
              <p> Get notified when a candidate applies for a job  </p>
            </div>
          </div>
         
          <div className="form-group col-sm">
              <input 
              type="checkbox" 
              className="form-check-input" 
              id="offers"
              name='offers' 
              checked={formData.offers}
              onChange={ChangeHandler}
              />&nbsp;
              <label className="form-check-label" htmlFor="offers"> Offers </label>
            <p> Get notified when a candidate accepts or rejects an offer. </p>
          </div>

          <br/>
          <div>
              <h6> Push Notifications </h6>
                <p> These are delivered via SMS to your mobile phone  </p>

                  <input type='radio'
                  onChange={ChangeHandler} 
                  name='notification'
                  value='everything'
                  id='everything'
                  checked={formData.notification === "everything"}
                  />  &nbsp;
                     <label className="form-check-label" htmlFor="everything"> Everything </label>
                    <br />
                     <input type='radio'
                     onChange={ChangeHandler} 
                     name='notification'
                     value='same'
                     id='same'
                     checked={formData.notification === "same"}
                     />  &nbsp;
                     <label className="form-check-label" htmlFor="same"> Same as Email </label>
                     <br / >

                     <input type='radio' 
                     onChange={ChangeHandler}
                     name='notification'
                     value='no_push'
                     id='no_push'
                     checked={formData.notification === "no_push"}
                     />  &nbsp;
                     <label className="form-check-label" for="no_push"> No Push Notifications </label>
          </div> 
                     <br /> 
          <button type="submit" className="btn btn-primary"> &nbsp; Save &nbsp;</button>
          
        </form>
      </div>
</div>
  );
}

export default App;
