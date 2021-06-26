import React, { useState } from 'react'

function App() {

  const [name, setName] = useState("")

  const handleChange=(e)=>{
    setName(e.target.value)
  }

  const demo = name.toUpperCase();

  console.log(demo)

  return (
    <div>
      <form>
      <label htmlFor="name">Name</label>
      <input type="text"
      value={name}
      onChange={handleChange}
      required
      />  
      <button>Submit</button>    
      </form>
    </div>
  )
}

export default App
