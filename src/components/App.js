import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
//components
import Header from './Header';
import Form from './Form';
import PhotoList from './PhotoList';
import Nav from './Nav';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="container">
        <Header />
        <Form />
        <Nav />
        <PhotoList />
        
      </div>
      </BrowserRouter>
    );

  }
 
}

export default App;
