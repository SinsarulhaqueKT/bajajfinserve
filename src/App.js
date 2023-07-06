import React from 'react'
import './App.css';
import './Navbar.css';
import './Mainhome.css';

import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Emi from './Components/Emi';
import Alert from './Components/Alert';
import Cart from './Components/Cart';
import MyAccount from './Components/MyAccount';
import Partners from './Components/Partners';
import DropDown from './Components/DropDown';

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/'element={<NavBar/>}>
    <Route index element={<Home/>}/>
    <Route path='Emi'element={<Emi/>}/>
    <Route path='Alert'element={<Alert/>}/>
    <Route path='Cart'element={<Cart/>}/>
    <Route path='MyAccount'element={<MyAccount/>}/>
   <Route path='Partners'element={<Partners/>}/>

  </Route>
</Routes>
</BrowserRouter>
      
     
    </div>
  )
}

export default App
