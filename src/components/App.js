import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
//components
import Header from './Header';
import Form from './Form';
import PhotoList from './PhotoList';
import Nav from './Nav';
import apiKey from './Config';



class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    this.querySearch(); 
  }
  
  querySearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=190567686%40N08&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });

  };


  render(){
    console.log(this.state.photos)
    return (
      <BrowserRouter>
      <div className="container">
        <Header />
        <Form onSearch={this.querySearch}/>
        <Nav />
        <PhotoList data={this.state.photos} />
        
      </div>
      </BrowserRouter>
    );

  }
 
}

export default App;
