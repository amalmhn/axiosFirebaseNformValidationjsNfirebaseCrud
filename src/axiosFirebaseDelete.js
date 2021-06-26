import axios from 'axios'
import React, { useState } from 'react'
// import App1 from './axiosFirebaseGet'
// import axiosGet from './axiosFirebaseGet'

function App() {
    const [name, setName] = useState('')
    
    const cname=(e)=>{
      // console.log(e.target.value)
      setName(e.target.value)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.delete("https://firestore.googleapis.com/v1/projects/fir-b79e0/databases/(default)/documents/products/06WvcCJx5gUc00XHlkwB")
      .then((res)=>{
        console.log(res);
      })
    }

    // axios.get("https://firestore.googleapis.com/v1/projects/fir-b79e0/databases/(default)/documents/products/").then((res)=>{
    //   console.log(res);
    // })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name" >Name</label>
        <input type="text"
        value={name}
        onChange={cname}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
