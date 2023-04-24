import React, { useState, useEffect } from 'react'
import './Form.css'

const Form = () => {

  const names = { fname: 'First Name', lname: 'Last Name', contact: 'Contact Number', email: 'Email Address', dob: 'Date of Birth', gender: 'Gender', address: 'Address Field' };
  const [interest, setInterest] = useState([]);
  const [achivement, setAchivement] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  const intialFormValues = { fname: '', lname: '', contact: '', email: '', dob: '', gender: 'male', address: '' };

  const [formValues, setFormValues] = useState(intialFormValues);
  const [formError, setFormError] = useState({});

  useEffect(() => {
    if(Object.keys(formError).length){
      if (isValidateSuccess(formError)) {
        alert('Form Submitted Successfully!');
      }  
    }
    

  }, [formError])

  const isValidateSuccess = (err) => {

    for (const key of Object.keys(err)) {
      console.log(err[key] === "");

      if (err[key] !== "") {
        return false
      }
    }
    return true
  }

  const validate = (values) => {
    const errors = {};

    for (const key of Object.keys(values)) {
      if (values[key].trim() === "") {
        errors[key] = `${names[key]} is required`;
      } else {
        errors[key] = ``;
      }
    }

    if (!(isFinite(values.contact) && values.contact.length === 10) && values.contact !== '') {
      errors['contact'] = 'contact is invalid';
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email) && values.email !== '') {
      errors['email'] = "email is not a valid email"
    }

    const d1 = new Date('Thu Jan 01 1980 05:30:00');
    const d2 = new Date(values.dob);

    if (d2.getTime() < d1.getTime()) {
      errors['dob'] = "Date of Birth must be greater than 1980";
    }

    if (interest.length <= 0) {
      errors['interest'] = "must be at least one interest";
    }

    return errors
        
  }

  const postUserData = (e) => {
    e.preventDefault();
  }

  const submitForm = () => {
    setFormError(validate(formValues));
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
    
  }

  const handleChange = (e) => {

    setInterestInput(e.target.value)
  }

  const addInterest = () => {

    if (interestInput.trim() === "") {
      return
    }

    setInterest((prev) => {
      return [...prev, interestInput]
    })
    setInterestInput('')
  }

  const removeInterst = (i) => {

    setInterest((prev) => {
      return prev.filter((_, index) => index !== i)
    })
  }

  const addAchivement = () => {

   

    if (titleInput.trim() === "") {
      return
    }
    
    if (dateInput.trim() === "") {
      return
    }

    setAchivement((prev) => {
      return [...prev, { 'title': titleInput, 'date': dateInput }]
    })

    setTitleInput('');
    setDateInput('');
    

  }

  const deleteAchivement = (i) => {
    setAchivement((prev) => {
      return prev.filter((_, index) => index !== i);
    })
  }



  return (
    <div className='formFieldsWrapper'>
      <form onSubmit={postUserData}>
        <div className='col'>
          <input type='text' className='txt' onChange={handleFormChange} name='fname' placeholder='First name' />
          {formError.fname && <span className='err'>{formError.fname}</span>}
        </div>
        <div className='col'>
          <input type='text' className='txt' onChange={handleFormChange} name='lname' placeholder='Last name' />
          {formError.lname && <span className='err'>{formError.lname}</span>}
        </div>
        <div className='col'>
          <input type='text' className='txt' onChange={handleFormChange} name='contact' placeholder='Contact number' />
          {formError.contact && <span className='err'>{formError.contact}</span>}
        </div>
        <div className='col'>
          <input type='text' className='txt' onChange={handleFormChange} name='email' placeholder='Email' />
          {formError.email && <span className='err'>{formError.email}</span>}
        </div>
        <div className='col'>
          <fieldset>
            <legend>Date of Birth</legend>
            <input type='date' className='txt' onChange={handleFormChange} name='dob' />
            {formError.dob && <span className='err'>{formError.dob}</span>}
          </fieldset>
        </div>
        <div className='col'>
          <fieldset>
            <legend>Gender</legend>
            <input type='radio' onChange={handleFormChange} className='rbtn' style={{ paddingLeft: "20px" }} id='male' name='gender' value='male' defaultChecked /><label htmlFor='male'>male</label>
            <input type='radio' onChange={handleFormChange} className='rbtn' id='female' name='gender' value='female' /><label htmlFor='female'>female</label>
          </fieldset>
        </div>
        <div className='col'>
          <textarea className='address-txt' onChange={handleFormChange} name='address' placeholder='type your address here...'></textarea>
          {formError.address && <span className='err'>{formError.address}</span>}
        </div>
        <div className='col'>
          <input type='text' className='txt txt-2' value={interestInput} onChange={handleChange} name='interest' placeholder='Add your interest' />
          <button onClick={addInterest} className='add-btn'>+</button>
          {formError.interest && <div className='err'>{formError.interest}</div>}
        </div>

        {interest.length === 0 ? '' :
          <div className='col'>
            <div className='intrest-container'>
              {interest.map((item, i) => {
                return (<div key={i} className={['intrest', 'int' + i].join(' ')}>
                  <div className='intrest-content'>
                    {item}
                  </div>
                  <div className='intrest-cancel' onClick={() => removeInterst(i)} >
                    &#x2716;
                  </div>
                </div>)
              })}
            </div>
          </div>
        }


        <div className='col'>
          <fieldset>
            <legend>Achivements</legend>
            <div className='achivement-input-wrapper'>
              <input type='text' className='txt' value={titleInput} onChange={(e) => setTitleInput(e.target.value)} name='title' placeholder='title' />
              {formError.title && <span className='err'>{formError.title}</span>}
              <input type='date' className='txt' value={dateInput} onChange={(e) => setDateInput(e.target.value)} name='date' />
              {formError.acheivement_date && <span className='err'>{formError.acheivement_date}</span>}
            </div>
            <button className='add-btn full-w' onClick={addAchivement}>Add</button>
          </fieldset>
        </div>

        <div className={('col ') + (achivement.length !== 0 ? '' : 'hidden')}>
          <table className='tab-achive'>
            <thead>
              <tr>
                <td>No.</td>
                <td>Title</td>
                <td>Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>

              {achivement.map((achive, i) => {
                return (<tr key={i}>
                  <td>{i + 1}</td>
                  <td>{achive.title}</td>
                  <td>{achive.date}</td>
                  <td>
                    <div className='deleteBtn' onClick={() => deleteAchivement(i)}>&#x2716;</div>
                  </td>
                </tr>)
              })}



            </tbody>
          </table>
        </div>

        <div className='col'>
          <input type='submit' onClick={submitForm} className='sbtn' name='submit' />
        </div>
      </form>
    </div>
  )
}

export default Form