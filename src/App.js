import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
//components
import Form from './components/Form';
import PhotoList from './components/PhotoList';
import Nav from './components/Nav';
import apiKey from './components/config';



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
  
  querySearch = (query = 'dogs') => {
    this.setState({loading: true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
     
      if(query === "dogs"){
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })

      }  else if(query === "cats"){
        this.setState({
          cats: response.data.photos.photo,
          loading: false
        })

      }   else if(query === "bears"){
        this.setState({
          bears: response.data.photos.photo,
          loading: false
        })

      }  else {
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


  render() {
    console.log(this.state.photos)
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Dean's React App</h1>
          <Form onSearch={this.querySearch}/>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dogs"/>}/>
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
