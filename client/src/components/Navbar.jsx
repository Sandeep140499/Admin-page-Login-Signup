// import React from 'react'

import { Link } from "react-router-dom"


function Navbar() {
  return (
    // Link
    <>
    <head>
    <script src="http://localhost:3000"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
    </head>

    <div className="bg-dark text-end p-lg-3">
    <Link className="Activelinks border" to="/">Home</Link>
    <Link className="Activelinks border" to="login">Login</Link>
    <Link className="Activelinks border" to="register">Register</Link> 
    {/* <Link className="Activelinks border" to="DashBoard">DashBoard</Link>  */}
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </>
  )
}

export default Navbar;

