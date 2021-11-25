import './App.css';
import { Link } from "react-router-dom";
import React, {useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

const Testapi = ()=>{
    const [data, setData] = useState(null);
    const searchAPI = async()=>{
      try{
        const response = await axios.get('/v1/question');  
        setData(response.data.list);  
        console.log(response.data.list);
      }catch(e){
        console.log(e);
      }
    }
    console.log(data);
    searchAPI();
    return (
      <div className="App">
        <Header />
        <main>
        {data && <p>{JSON.stringify(data, null, 2)}</p>}
        </main>
        <Aside />
        <Footer />
      </div>
    );
  }

export default Testapi;