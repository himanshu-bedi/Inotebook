import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const host="http://localhost:8000"

const Login=()=> {

  const navigate=useNavigate();
  const [user,setUser]=useState({
    email:"",password:""
  })

  const doit=(e)=>{
   const name=e.target.name;
   const value=e.target.value;

   console.log(name+" : "+value);
   setUser({...user,[name]:value});
  }

  const logitin=async(e)=>{
    e.preventDefault();
    console.log("btn clicked");
    
    const {email,password}=user;
    console.log(password+" "+email)
      const res=await fetch(`${host}/login`,{
         method:"POST",
         headers:{
          "Content-Type":"application/json"
         },
         body:JSON.stringify({email,password})
         
      });

      const data=await res.json();

      console.log("helloo");
    console.log(data.message);

    if(data.message==="Login Successfull")
    {
      window.alert("Login Successfull");
      console.log("Login Successfull");
      navigate('/');
      
    }
    else
    {
      window.alert("Login not Successfull");
      console.log("Login not Successfull");
    }

      
  }

  return (
   <>
     <h1>login</h1>

<div className='container d-flex justify-content-center w-88'>
     <form>
 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control w-80" onChange={doit} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

 
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control w-76" onChange={doit} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

 
  

  
  <button type="button" class="btn btn-primary btn-block mb-4" onClick={logitin}>Sign in</button>

 
  <div class="text-center">
    <p>Not a member? <a href="/Register">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</div>
   </>
  );
}

export default Login;