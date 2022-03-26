
import React from 'react';
import './App.css';

// import galleryItems from '../gallery.data.js';
// const galleryItems = require('./gallery.data.js');

//Import useState/useEffect Hook
import { useState, useEffect } from 'react';
//Import Axios
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

//module import


function App() {

const [galleryList, setGalleryList] = useState([]);

// const [newImage, setNewImage] = useState('');

const fetchImages = () => {
  //make a get request
  axios.get('/gallery').then(response => {
    //response has a lot
    console.log(response.data);
    setGalleryList(response.data);
  }).catch(err => {
    // alert('error getting Gallery Item')
    console.log(err);
  });
};

  //equivalent of document.ready()
  //will get called when component loads
  useEffect(() => {
    fetchImages();
  }, []);

  // const addImage = (event) => {
  //   event.preventDefault();


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList
      galleryList={galleryList}
      />
    </div>
  );
}

export default App;
