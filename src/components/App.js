import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//components
import Header from './Header';
import Form from './Form';
import PhotoList from './PhotoList';
import Nav from './Nav';
import apiKey from './config';



class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      dogs: [],
      cats: [],
      bears:[],
      loading: true
    };
  }

  componentDidMount(){
    this.querySearch(); 
  }
  
  querySearch = (query) => {
    this.setState({loading: true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
     
      if(query === "dogs"){
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })

      }   else if(query === "cats"){
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })

      }   else if(query === "bears"){
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })

      }else{
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      });
    }
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });

  }


  render(){
    console.log(this.state.photos)
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Form onSearch={this.querySearch}/>
          <Nav />
          <Switch>
            <Route path="/" render={() => <PhotoList data={this.state.dogs}/>} />
            <Route path="/dogs" render={() => <PhotoList data={this.state.dogs}/>} />
            <Route path="/cats" render={() => <PhotoList data={this.state.cats}/>} />
            <Route path="/bears" render={() => <PhotoList data={this.state.bears}/>} />
            { /*<PhotoList data={this.state.photos} />*/}
          </Switch>
        </div>
      </BrowserRouter>
    );

  }
 
}

export default App;
