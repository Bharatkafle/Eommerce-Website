import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import  Cart from "./pages/Cart/Cart"
import Header from './components/Header';
import Clothing from "../src/pages/CategoriesRoute/Clothing/Clothing"
import Collection from "./pages/CategoriesRoute/Art/Art"
import Entertainment from "./pages/CategoriesRoute/Entertainment/Entertainment"
import Jewelry from "./pages/CategoriesRoute/Jewelry/Jewelry"
import Living from "./pages/CategoriesRoute/Living/Living"
import Tool from "./pages/CategoriesRoute/Tools/Tools"
import Weeding from "./pages/CategoriesRoute/Wedding/Wedding"

import Shop from '../src/pages/Shop/Shop';

const App = () => {
  return (
    <div className="app">
      <Router>
         <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route path='clothing' element={<Clothing />} />
            <Route path='collection' element={<Collection />} />
            <Route path='entertainment' element={<Entertainment />} />
            <Route path='Jewelry' element={<Jewelry />} />
            <Route path='living' element={<Living />} />
            <Route path='tool' element={<Tool />} />
            <Route path='wedding' element={<Weeding/>} />
          </Route>
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shopnow' element={<Shop/>} />
          <Route  />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
