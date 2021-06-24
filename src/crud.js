import logo from './logo.svg';
import './App.css';
import {Firebase} from './firebase/config'

function App() {
  return (
    <div className='App'>
      <button onClick={()=>
      // {
      //       Firebase.firestore().collection('products').get().then(snapshot=>{
      //         snapshot.forEach((obj)=>{
      //           console.log(obj.data(),obj.id)
      //         })
      //       });
      // }
      // The above code is to fetch the data from firebase database
      
      // {
      //   Firebase.firestore().collection('products').add({
      //     name:'MI',
      //     price:1200,
      //   })
      // }
      // The above code is to post the data to firebase database

      {
        Firebase.firestore().collection('products').delete().then(
          console.log("Deleted")
        )
      }
      // The above code is to delete the data from firebase database as per id

      // {
      //   Firebase.firestore().collection('products').doc('WY5hNPrbXxKc1PvyySqg').set({
      //     name:'updated'
      //   })
      // }
      }>Click</button>
    </div>
  );
}

export default App;
