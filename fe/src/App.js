
import { useEffect, useState } from "react";
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import About from "./Component/About/About";
import Projects from './Component/Projects/Projects';
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Nav from "./Component/Nav/Nav";
import axios, { Axios } from 'axios';
import './App.scss';
import { Helmet } from "react-helmet";

  
function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
   async function getdata () {
      const res = await axios.get("v1/project");
      return res;
   }
   getdata().then((res) => setData(res.data));
   getdata().catch((err) => console.log(err));
  },[]);
  return (
    <>
      <div className='main__container flex flex-col'>
       <Header></Header>
       <Banner></Banner>
       <About></About>
       <Projects data={data}></Projects>
       <Contact></Contact>
       <Nav></Nav>
       <Footer></Footer> 
      </div>
    </>
  );
}

export default App;
