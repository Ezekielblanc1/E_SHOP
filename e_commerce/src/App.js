import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from '../src/components/pages/homepage/homepage.component'
import ShopPage from '../src/components/pages/shop_page/shop_page.component'



function App() {
 return (
   <div>
       <Route exact path = '/' component = {HomePage}/> 
       <Route path = '/shop' component = {ShopPage}/>
   </div>
 )
}

export default App;
