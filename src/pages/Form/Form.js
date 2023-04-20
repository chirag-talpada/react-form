import React from 'react'
import './Form.css'

const Form = () => {

  const postUserData=(e)=>{
    e.preventDefault();
  }


  return (
    <div className='formFieldsWrapper'>
      <form onSubmit={postUserData}>
        <div className='col'>
          <input type='text' className='txt' name='fname' placeholder='First name' />
          <span className='err'>first name is required</span>
        </div>
        <div className='col'>
          <input type='text' className='txt' name='lname' placeholder='Last name' />
        </div>
        <div className='col'>
          <input type='text' className='txt' name='lname' placeholder='Contact number' />
        </div>
        <div className='col'>
          <input type='text' className='txt' name='lname' placeholder='Email' />
        </div>
        <div className='col'>
          <fieldset>
            <legend>Date of Birth</legend>
            <input type='date' className='txt' name='date' />
          </fieldset>
        </div>
        <div className='col'>
          <fieldset>
            <legend>Gender</legend>
            <input type='radio' className='rbtn' style={{ paddingLeft: "20px" }} id='male' name='gender' value='male' checked="true" /><label for='male'>male</label>
            <input type='radio' className='rbtn' id='female' name='gender' value='female' /><label for='female'>female</label>
          </fieldset>
        </div>
        <div className='col'>
          <textarea className='address-txt' placeholder='type your address here...'></textarea>
        </div>
        <div className='col'>
          <input type='text' className='txt txt-2' name='interest' placeholder='Add your interest' />
          <button className='add-btn'>+</button>
        </div>
        <div className='col'>
          <div className='intrest-container'>
            <div className='intrest'>
              <div className='intrest-content'>
                writing
              </div>
              <div className='intrest-cancel'>
                &#x2716;
              </div>
            </div>
          </div>
        </div>

        <div className='col'>
          <fieldset>
            <legend>Achivements</legend>
            <div className='achivement-input-wrapper'>
              <input type='text' className='txt' name='title' placeholder='title' />
              <input type='date' className='txt' name='date' />
            </div>
            <button className='add-btn full-w'>Add</button>
          </fieldset>
        </div>

        <div className='col'>
          <input type='submit' className='sbtn' name='submit'/>
        </div>
      </form>
    </div>
  )
}

export default Form