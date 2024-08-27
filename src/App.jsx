
import Footer from "../src/components/Footer.jsx"
import Contact from '../src/components/Contact.jsx'
import Header from "../src/components/Header.jsx"
import Home from "../src/components/Home.jsx"
import ProductDetails from "../src/components/ProductDetails.jsx"
import ProductList from "../src/components/ProductList.jsx"
import { Route,Routes } from "react-router"
import Navbar from "./components/Navbar.jsx"
import './App.css'

function App() {
  return (
    <>
    <h1 className='mt-10'>header</h1>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/productdetails' element={<ProductDetails/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
    </Routes>
  <Navbar/>
    </>
  )
}

export default App
