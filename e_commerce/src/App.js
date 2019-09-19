import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from '../src/components/pages/homepage/homepage.component'


const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
)

function App() {
 return (
   <div>
       <Route exact path = '/' component = {HomePage}/> 
       <Route exact path = '/hats' component = {HatsPage}/>
   </div>
 )
}

export default App;
