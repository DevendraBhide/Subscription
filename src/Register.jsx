import React, { useState } from 'react'


const Register = ({registration}) => {
  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  const[startDate,setStartDate]=useState('')
  const[duration,setDuration]=useState('monthly')


  const handleData=(e)=>{
    e.preventDefault();
    const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(Email)){
      alert(`Please enter Valid Email (example@gmail.com)`)
      return;
    }
    if(Password.length<6){
      alert("Password must be at least 6 character")
      return;
    }
    const start = startDate ? new Date(startDate) : null;
    const endDate=new Date(start);
    if(duration =='monthly'){
      endDate.setMonth(start.getMonth()+1);
    }else{
      endDate.setFullYear(start.getFullYear()+1);
    }
    const present=new Date();
    const status =( present<= endDate && present >= start)? "Active":"Expired";
    registration({Email,Password,start,duration,endDate,status})
  }

  return (
    <>
    <h3 className='text-center'>Register Form</h3>
 <div className="container border rounded p-3 bg-dark text-light">
 <form action="" onSubmit={handleData}>
      <label htmlFor="">Enter Your Email</label>
      <input type="email" placeholder='Enter Your Name' className='form-control mb-3' required onChange={(e)=>setEmail(e.target.value)} />

      <label htmlFor="">Enter Your Password</label>
      <input type="password" placeholder='Enter Your password (must be atleast 6 character)' className='form-control mb-3'required onChange={(e)=>setPassword(e.target.value)}/>

      <label htmlFor="">Enter Start Date</label>
      <input type="date" placeholder='Enter start date' className='form-control mb-3' required onChange={(e)=>setStartDate(e.target.value)} />

      <label htmlFor="">Enter Subscription Duration</label>
      <select name="duration" id="duration" className='form-control mb-4' required onChange={(e)=>setDuration(e.target.value)}>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <div className="text-center"> <button className='btn btn-outline-light'>Register</button></div>
    </form>
 </div>
    </>
  )
}

export default Register
