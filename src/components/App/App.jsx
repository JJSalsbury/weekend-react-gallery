
import React from 'react';
import './App.css';

// import galleryItems from '../gallery.data.js';
// const galleryItems = require('./gallery.data.js');

//Import useState/useEffect Hook
import { useState, useEffect } from 'react';
//Import Axios
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';



function App() {

//created state variable and set it's value to an empty array. 
const [galleryList, setGalleryList] = useState([]);

// const [newImage, setNewImage] = useState('');

const fetchImages = () => {
  //make a get request
  axios.get('/gallery').then(response => {
    //response has a lot
    console.log('Your galleryItems Array []', response.data);
    setGalleryList(response.data);
  }).catch(err => {
    // alert('error getting Gallery Item')
    console.log(err);
  });
};

const addLike = (galleryItem) => {
    console.log('Update like');
    axios.put(`/gallery/like/${galleryItem.id}`)
        .then(response => {
            //retrieves updated item list:
            fetchImages();
            console.log('Updated:', galleryItem.likes)
        }).catch(err => {
            console.log('Error in update', err);
        })

}


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
        <h1 className="App-title">My Photo Gallery<p id="subHeaderId">Tank - The World's Best Dog.&#128054;</p><p id="headerInstructionsId">Click on a photo to see a photo description. And don't forget to click like!</p></h1>
      </header>
      <p id="quoteId">"A dog will teach you unconditional love. If you can have that in your life, things won't be too bad." <br></br>-Robert Wagner</p>
      <GalleryList
      className="App-gallery"
      galleryList={galleryList}
      addLike={addLike}
      />
    </div>
  );
}

export default App;
