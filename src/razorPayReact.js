import React from 'react'
import {Firebase} from './firebase/config'

const loadScript=(src)=>{

  return new Promise(resolve=>{
  
  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
  script.onload = ()=>{
    resolve(true)
  }
  script.onerror=()=>{
    resolve(false)
  }
})
}


function App() {


  async function displayRazorpay() {

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if(!res){
      alert("Razorpay failed to load. Are you online?")
      return
    }

    var options = {
      "key": "rzp_test_W5OYzI2xpVJSu2", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Donation",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      
  };
  
  const paymentObject = new window.Razorpay(options);
  paymentObject.open()  
}



  return (
    <div className="parentDiv">
      <button onClick={displayRazorpay}>Donate 5</button>     
    </div>
  )
}

export default App

