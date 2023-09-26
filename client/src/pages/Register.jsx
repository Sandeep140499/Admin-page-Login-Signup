import axios from 'axios'
import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {
const navigate = useNavigate()
  const[data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })
  
 const registrationForm = async (e) => {
  e.preventDefault()
  const {name , email, password} = data
  try {
    const {data} = await axios.post('/Register',{
      name ,email, password
    })
    if(data.error){
      toast.error(data.error)
    }
    else{
      setData({})
      toast.success('SignUp Sucessful. Welcome To Login Page!')
      navigate('/Login')
    }
  } catch (error) {
    console.log(error);
  }

 }
  
  return (
    <>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
    </head>
    <h1 className='text-center'><b>Register Page</b></h1>

 <div>
  {/* <div className='col-4 col-6'></div> */}
  <div >
  <form onSubmit= {registrationForm} className='p-lg-5 marginlogin'>

<div className="col-lg-6 col-12">
  <label htmlFor="exampleInputName" className="form-label">
    Full Name
  </label>
  <input
    value={data.name} onChange={(e)=>setData({...data, name: e.target.value})}
    type="text"
    className="form-control"
    id="exampleInputName"
    required
  />
  <div id="emailHelp" className="form-text">
   Enter Your Full Name
  </div>
</div>
<br/>
<div className="col-lg-6 col-12">
  <label htmlFor="exampleInputEmail1" className="form-label">
    Email address
  </label>
  <input
    value={data.email} onChange={(e)=>setData({...data, email: e.target.value})}
    type="email"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    required
  />
  <div id="emailHelp" className="form-text">
    We'll never share your email with anyone else.
  </div>
</div>
<br/>
<div className="col-lg-6 col-12">
  <label htmlFor="exampleInputPassword1" className="form-label">
    Password
  </label>
  <input
    value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}
    type="password"
    className="form-control"
    id="exampleInputPassword1"
    required
  />
</div>
<br/>
{/*   */}
<br/>
<button type="submit" className="btn btn-primary">
  Submit
</button>
</form>
  </div>
  {/* <div></div> */}
 </div>

    {/* <Link to="/">Register</Link> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </>
  )
}

export default Register