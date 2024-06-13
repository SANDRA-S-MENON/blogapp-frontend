import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SignUp = () => {
    const [data,changeData]=useState(
        {
            "name":"",
            "emailid":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value} )
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }

            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <h1><center>SignUp</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="email"  id="" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readvalue}>submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp