import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';

function App() {

  const [list,setList] = useState([]);

  useEffect(()=>{
    
    const getData =async ()=>{
         
      try {
         const data = await axios.get("https://vercel-deploy-1-pi.vercel.app");
         setList(data.data);
         console.log(data)
      }catch(err){
         console.log('error data')
      }
    }
    getData();

  })



  return (
    <div className="App">
      
        {
          list.map((x)=> <h1>{x.name}</h1>)
        }
      
    </div>
  );
}

export default App;
