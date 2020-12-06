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

  addLikes = (event, id) => { // the event was pressed 'onClick' and the id is passed in
    console.log('id is...', id);
    axios.put(`/gallery/like/${id}`) // the id is sent as the params to the server-side
    .then( (response) => {
      console.log('Response:', response); // we get an OK back from the DB that it was updated
      this.getImages() // call getImages again to update the DOM
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
          <h1 className="App-title">a Wedding Story</h1>
        </header>
        <br/>
        <GalleryList addLikes={this.addLikes} imageList={this.state.imageList}/>
        
      </div>
    );
  }
}

export default App;
