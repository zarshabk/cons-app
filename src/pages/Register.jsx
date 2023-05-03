import React, { useState } from 'react'
import { RegsiterUser } from '../api/auth'

const Register = () => {

  const [info,setInfo]=useState({username:'',email:'',password:''})

  const Change = e=>{
    setInfo({...info,[e.target.name]:e.target.value})
  }
  const {username,email,password}=info
const RegisterHandler  = e=>{
  e.preventDefault()
  if(!username || !email || !password){
    alert("all fields are required")
  }

  RegsiterUser(info).then(()=>{
    setInfo({username:'',email:'',password:''})
  })

}
  return (
    <div className='auth-container'>
    <div className='container auth-card'>
      <div className='heading'>
         <h2>Register</h2>
      </div>
        <form action=""onSubmit={RegisterHandler}>
        <div className='form-group'>
               <label htmlFor="">Username</label>
               <input type="text"placeholder='Enter Your Name'name='username'value={username} onChange={Change} />
           </div>
           <br/>
           <div className='form-group'>
               <label htmlFor="">Email</label>
               <input type="email"placeholder='Enter Your Email'name='email'value={email} onChange={Change}  />
           </div>
           <br />
           <div className='form-group'>
               <label htmlFor="">Password</label>
               <input type="password"placeholder='Enter Your Password'name='password'value={password} onChange={Change}  />
           </div>
           <br/>
           <div className='form-group'>
               
               <input type='submit' value={'REGISTER'}/>
           </div>
        </form>
    </div>
</div>
  )
}

export default Register