import { useState } from 'react'
import React from 'react'
export const Signin = () => {
    const [credentials, setcredentials] = useState({name:'',email:'',password:''})
    const changeHandler=(e)=>{
setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    const submitHandler=async(e)=>{
e.preventDefault();
const response =await fetch("http://localhost:5000/")
const json =await response.json();
console.log(json)

    }

  return (
    <div>
        <form className=' container'>
  <div class="mb-3">
    <label for="name" class="form-label">Email address</label>
    <input onChange={changeHandler} type="text" class="form-control"name='name' id="name" aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={changeHandler} type="email" class="form-control"name='email' id="email" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input onChange={changeHandler} type="password" class="form-control" id="password" name='password'/>
  </div>
 
  <button onClick={submitHandler} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}