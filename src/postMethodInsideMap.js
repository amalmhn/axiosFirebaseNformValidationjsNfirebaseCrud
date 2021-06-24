import React from 'react'
import {Firebase} from './firebase/config'

function App() {

  const a = [1,2,3]
      // Firebase.firestore().collection('products').add({
      //   name:'MI',
      //   price:1200,

  const clicked=()=>{
    a.map((i)=>{
      Firebase.firestore().collection('products').add({
        name:"Vijay",
        id:i
      }).then((res)=>{
        console.log(res)
      })
    })
  }
      
  return (
    <div>
      <button onClick={clicked}>Click</button>
    </div>
  )
}

export default App
