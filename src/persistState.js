import React, { useEffect, useState } from 'react'

function App() {

  const [datas, setDatas] = useState("")

 useEffect(()=>{
  const form = JSON.parse(localStorage.getItem("user"));
  if(datas===""){
  setDatas(form)
}
 },[])


  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(datas))
  }, [datas])

  return (
    <div>
      <table>
        <tr>
        <td>State</td>
        <td>{datas}</td>
        <input type="text" onChange={(e)=>{
          setDatas(e.target.value)
        }}/>
        <td><button onClick={()=>{
          setDatas("")
        }}>Click</button></td>
        </tr>
      </table>
    </div>
  )
}

export default App
