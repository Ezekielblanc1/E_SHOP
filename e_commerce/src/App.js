import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../src/components/pages/homepage/homepage.component'
import ShopPage from '../src/components/pages/shop_page/shop_page.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './components/pages/sign-in-andsign-up-page/signin&signup.component'



function App() {
 return (
   <div>
      <Header/>
      <Switch>
       <Route exact path = '/' component = {HomePage}/> 
       <Route path = '/shop' component = {ShopPage}/>
       <Route path = '/signin' component = {SignInAndSignUp}/>
      </Switch>
   </div>
 )
}

export default App;
