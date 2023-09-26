import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Login() {
  const navigate= useNavigate()
  const[data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) =>{
    e.preventDefault()
    // axios.get('/')
    const {email, password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
    
  }

  return (
    <>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
    </head>
    
    <h1 className='text-center'>Login page</h1>

    <form onClick={loginUser} className='p-lg-5 marginlogin'>
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
    />
    <div id="emailHelp" className="form-text">
      {/* We'll never share your email with anyone else. */}
    </div>
  </div>
  <div className="col-lg-6 col-12 ">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
 <br/>
  <button type="submit" className="btn btn-primary">
    Login 
    {/* navigateHome('/Home') */}
  </button>

</form>
 
    {/* // <Link to="login"> Login </Link> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </>
  )
}

export default Login