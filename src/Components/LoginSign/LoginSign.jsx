import React from 'react'
import "./LoginSign.css"
import image_1 from "../../assets/image1.png"
import { useState } from 'react'

const LoginSign = () => {
  const [first, setfirst] = useState("Register")
  const toggle = ()=>{
    if(first === "Register"){
      setfirst("Login")
    }
    else{
      setfirst("Register")
    }
  }
  return (
    <div className='login-sign'>
      <div className="login-sign-left">
        <img src={image_1} alt="hero-img" height={"400px"} />
      </div>
      <div className="login-sign-right">
        <div className="login-sign-right-container">
          <div className="login-sign-right-container-heading">
            <div>
              <h3 onClick={toggle}>Login</h3>
              <hr className={first === "Login"?"Show":"Hide"} />
            </div>
            <h3 onClick={toggle}>Register
              <hr className={first === "Register"?"Show":"Hide"}/>
            </h3>
          </div>
          <div className="login-sign-right-container-inputs">
            {first === "Register" ? <input type="text" placeholder='username' /> : <></>}
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>{first}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSign
