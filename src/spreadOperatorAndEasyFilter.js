import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App1() {

  const [datas, setDatas] = useState([])

  // const demo = datas.map((i)=>{
  //   return(
  //     i
  //   )
  // })
  // ********************************************
  // console.log(datas[0].name.substr(62,64)) this is to get the product Id from axios
  // index range printing of a string
  // ********************************************
  console.log(datas)
  // const demo2 = datas.filter(j=> j.fields.userId.stringValue=="zzfiNUKsSIasbLLDTgBaoMJw1H52")
  // console.log(demo2)
  useEffect(() => {
    axios.get("https://firestore.googleapis.com/v1/projects/olxdemo-8abed/databases/(default)/documents/products/")
    .then((res)=>{
      console.log(res.data.documents);
      const all = res.data.documents;
      const all3 = all[0].name.substr(62) 
      console.log(all[0].name.substr(62))
      // setDatas([...all,{id:all[0].name.substr(62)}])
      const all4 = all.map((k)=>{
        console.log(k)
        return{
          ...k,id:all[0].name.substr(62)
        }
      })
      console.log(all4)

      // setDatas(all)
      // all.map((obj)=>{
      //   console.log(obj.fields);
      //   setDatas([obj.fields])
      // })
      const all2 = all.filter(i=> i.fields.name.stringValue=="Santro")
      console.log(all2)
    })
  }, [])

  // const mapp=()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
  //     console.log(res.data)
  //   })
  // }
 
  return (
    <div>
      <thead>
        {console.log("Hi")}
        <tr>
          <td>Price</td>
          <td>image</td>
          
        </tr>
      </thead>
      {/* <button onClick={mapp} >CLick me</button> */}
      <tbody>
        {/* {datas.map((itm)=>{
          console.log(itm.fields.name.stringValue)
          return(
            <tr>

              <td>{itm.fields.name.stringValue}</td>
              <td><img style={{width:'500px'}} src={itm.fields.url.stringValue} alt=""/></td>
            </tr>
          )
        })} */}
      {/* {demo2.map((itm)=>{
        console.log("Hi")
        return(
        <tr>

        <td>{itm.fields.name.stringValue}</td>
        <td><img style={{width:'500px'}} src={itm.fields.url.stringValue} alt=""/></td>
      </tr>
      )})} */}
      </tbody>
    </div>
  )
}

export default App1
