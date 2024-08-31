import React from 'react'
import "./Logo.css"
import godrej from "../../assets/logo-godrej.png"
import oppo from "../../assets/logo-oppo.png"
import coca_cola from "../../assets/logo-coca-cola.png"
import paypal from "../../assets/logo-paypal.png"
import philips from "../../assets/logo-philips.png"

const Logo = () => {
  return (
    <div className='logo-1'>
      <img src={godrej} alt="" />
      <img src={oppo} alt="" />
      <img src={coca_cola} alt="" />
      <img src={paypal} alt="" />
      <img src={philips} alt="" />
    </div>
  )
}

export default Logo
