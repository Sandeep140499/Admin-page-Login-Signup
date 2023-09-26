import React from 'react';
import data from "./TemplateData.json";
import { BsSearch } from 'react-icons/bs';
import {useState} from "react";
// import { useContext } from 'react';
// import { UserContext } from '../context/userContext';

function DashBoard () {
  // const {user} = useContext(UserContext)
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
          <head>
    <script src="http://localhost:3000"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
    </head>
    <h1 className='text-center p-lg-5'><b>Welcome to <span className='website'>Dashboard</span></b></h1>
    {/* {!!user && (<h4><span>Name:</span>{user.name}!</h4>)} */}
    {/* {!!user && (<h4><span>Email:</span>{user.email}!</h4>)} */}
      <div className="templateContainer ">
      <div className="searchInput_Container">
          <input id="searchInput" placeholder="Search here" onChange={(event) => {
            setSearchTerm(event.currentTarget.value);
          }} />
          &nbsp;
          <label ><b><BsSearch/></b></label> 
        </div>
      </div>
      {/* items display */} 
        <div className='row'>
          {data.filter((value)=>{
                if(searchTerm === "")
                {
                  return value;
                }else if(value.title.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                  return value;
                }else
                {
                  return false;
                }
              })
              .map((value) => {
                return(
                  <div>
                 <div class="row">
    <div class="row">
    <div class="col-3 p-2">
      <div class="border" key={value.id}>
      <img src={value.image} alt="" width={240}/>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{value.title}</li>
    <li class="list-group-item">${value.price}</li>
    <li class="list-group-item">{value.Discription}</li>
  </ul>
      </div>
    </div>
  </div>
</div>
                  </div>
                )
              })
          }
        
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </>
    );
}

export default DashBoard;
