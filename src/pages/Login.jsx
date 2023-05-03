import React, { useState } from 'react'
import { LoginUser } from '../api/auth'

const Login = () => {
  const [info,setInfo]=useState({email:'',password:''})
  const [loading,setLoading]=useState(false)
  const Change = e=>{
    setInfo({...info,[e.target.name]:e.target.value})
  }
  const {username,email,password}=info
const LoginHandler  = e=>{
  e.preventDefault()
  setLoading(true)
 setTimeout(()=>{
  if(!email || !password){
    alert("all fields are required")
  }

 LoginUser(info)
 setLoading(false)
 },2000)

}
  return (
    <div className='auth-container'>
        <div className='container auth-card'>
          <div className='heading'>
             <h2>LOGIN</h2>
          </div>
            <form action=""onSubmit={LoginHandler}>
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
                   
                   <input type='submit' value={loading ?'loading ...':'SIGNIN'} disabled={loading ? true :false}/>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login