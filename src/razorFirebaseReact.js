import axios from 'axios'
import React from 'react'

function App() {

  const loadScript=(src)=>{
    return new Promise(resolve=>{
      const script = document.createElement('script')
      script.src=src
      document.body.appendChild(script)
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
    })
  }

  async function displayRazor(){
    
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if(!res){
      alert("Razorpay failed to load")
    }

    var options = {
      "key": "rzp_test_W5OYzI2xpVJSu2", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Donation",
      "description": "1234",
      "image": "https://example.com/your_logo",
      "handler": function (response){
          alert(response.razorpay_payment_id);
          axios.post("https://firestore.googleapis.com/v1/projects/fir-b79e0/databases/(default)/documents/products/",{
            "fields": {
              "type": {
                "stringValue": response.razorpay_payment_id
              },
              "price": {
                "stringValue": "name"
              },
              "name": {
                "stringValue": "name"
              }
            }
          })
          console.log("success")
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      
  }
    const paymentObject = new window.Razorpay(options);
    paymentObject.open()  
  

  }

  return (
    <div>
      <button onClick={displayRazor}>Pay</button>
    </div>
  )
}

export default App
