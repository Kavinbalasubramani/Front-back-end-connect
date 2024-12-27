import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState("")

  const getData=async()=>{
    const res=await axios.get("/getData");
    setData(res.data);
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <div className="App">
     <h1>{data}</h1> 
    </div>
  );
}

export default App;
