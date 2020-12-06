import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  state = {
    imageList: []
  } // empty array to store data coming from server

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    // function to get data from server
    axios.get('/gallery') // calling axios to GET
    .then( (response) => {
      // The info we want is in the response data property
      console.log('Response:', response.data);
      this.setState({
        imageList: response.data
      })
    })
    .catch( (error)=> {
      alert('Something bad happened');
      console.log('Error', error)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList images={this.state.imageList}/>
        <p>{JSON.stringify(this.state.imageList)}</p>
      </div>
    );
  }
}

export default App;
