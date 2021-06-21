import React, { useState } from 'react';
// import { flushSync } from 'react-dom';
import './App.css'
import {Firebase} from './firebase/config'
// import './Login.css';



function Login() {

  const [price, setPrice] = useState()
  const [name, setName] = useState()
  const [type, setType] = useState()
  // const [error,seterror] = useState(false)
  const [message,setMessage] = useState()
  const [message1,setMessage1] = useState()
  const [message2,setMessage2] = useState()
  const [valid, setValid] = useState()
  const [valid1, setValid1] = useState()
  

  const priceChange=(e)=>{
    setPrice(e.target.value);
    console.log(price);
  }
  const nameChange=(e)=>{
    setName(e.target.value);
  }
  const typeChange=(e)=>{
    setType(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    var priceRegex = /^[0-9]*$/
    var nameRegex = /[a-zA-Z]/
    var typeRegex = /[a-zA-Z]/

    if((price=="")||(priceRegex.test(price)===false)){
        setMessage("price Error");
        var error = true;
        // console.log(error)
    }
    if((name=="")||(nameRegex.test(name)===false)){
        setMessage1("name Error");
        var error = true;
        // console.log(error)
    }
    if((type=="")||(typeRegex.test(type)===false)){
      setMessage2("type Error");
      var error = true;
      // console.log(error)
    }
    if(error==true){
      setValid("Invalid form!")
      setInterval(function(){ window.location.reload() }, 2000);
    }else{
      Firebase.firestore().collection('products').add({
            price:price,
            name:name,
            type:type
          })
          window.location.reload()
          setValid1("Form submited!")
          console.log("Done")
    }

  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="" alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="text"
            value={price}
            onChange={priceChange}
            id="fname"
            name="email"
            placeholder="Numbers 0-9"
            required
          />
          <br />
          <span style={{color:'red'}}>{message}</span> <br/>
          <label htmlFor="lname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={nameChange}
            id="lname"
            name="password"
            required
          />
          <br />
          <span style={{color:'red'}}>{message1}</span> <br/>
          <label htmlFor="lname">Type</label>
          <br />
          <input
            className="input"
            type="text"
            value={type}
            onChange={typeChange}
            id="lname"
            name="password"
            required
          />
          <br />
          <span style={{color:'red'}}>{message2}</span> <br/>
          <span style={{color:'red'}}>{valid}</span>
          
          <button>Login</button>
          <span style={{color:'green'}}>{valid1}</span>
        </form>
        <a href>Signup</a>
      </div>
    </div>
  );
}

export default Login;