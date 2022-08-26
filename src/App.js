
import { useEffect,useState } from 'react';
import Cards from "./components/card"
import Navbar from "./components/navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Searh from "./components/searh";
import axios from 'axios';


export default function Example() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [word, setWord] = useState("")

  useEffect(()=>{
     getAll()
},[loading]) 

const getAll = () =>{
  axios.get('http://localhost:3000/products')
  .then(res =>{
    setProducts(res.data)
    setLoading(true)
  })
  .catch(error=>{

  })

}

const search = () =>{
  if(word==="")getAll();
  
  axios.get(`http://localhost:3000/products?q=${word}`)
  .then(res =>{
    setProducts(res.data)
   
  })
  .catch(error=>{

  })

}


  return (
  <>
    <Navbar/>
    <Searh setWord={setWord} search={search}/>
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
      </Routes>
      </div>
    </div>
  </>
  )
  
}