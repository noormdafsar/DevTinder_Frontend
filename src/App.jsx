import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  // taking state variable for form validation
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const emailHandler = (e) => {
    let email = e.target.value;
    setEmail(email);
    if(!email.includes('@') || !email.includes('.')){
      setEmailError(true);
    }
    else{
      setEmailError(false);
    }
  }
  
  const passwordHandler = (e) => {
    let password = e.target.value;
    setPassword(password);
    const specialChars = /[@#$%^&*]/;
    
    if(password.length < 8 || !specialChars.test(password)){
      setPasswordError('Password must be at least 8 characters long and contain special characters');
    }
    else{
      setPasswordError('');
    }
  }
  

  return (
    <>
      <div className='flex flex-col gap-2'>
        <h1>Learning Form Handle Submission...!!!</h1>
        <h1>Login form Validation...!!!</h1>
        <form onSubmit={(e)=> {
          e.preventDefault();
          if( !emailError && !passwordError && checked){
            alert('Form submitted successfully...!!!  ' + email + ' ' + password + ' ' + ' ' + checked);
          }
          else{
            alert('Form not submitted...!!!  ' + emailError + passwordError);
          }
          }} className='flex flex-col gap-2 '>
        
          <input type="email" placeholder='Enter your email' onChange={emailHandler} />
          {emailError?<span>email not valid</span>:" "}
           <br />
          <input type='password' placeholder='password' onChange={passwordHandler}/>
          {passwordError?<span>{passwordError}</span>:" "}
          <br />
          <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
           <span>I agree to the terms and conditions</span><br />
          <button type='submit'>Submit</button>

        </form>
      </div>
    </>
  )
}

export default App
