//Import react and app.css for use in App.jsx
import React from 'react';
import './App.css';

//Import useState/useEffect Hook
import { useState, useEffect } from 'react';
//Import Axios
import axios from 'axios';
//Import GalleryList for use in App.jsx
import GalleryList from '../GalleryList/GalleryList';


function App() {

//created state variable and set it's value to an empty array. 
const [galleryList, setGalleryList] = useState([]);

//Created fetchImages function to get images from the Gallery Items array, in the gallery.data.js.
const fetchImages = () => {
  //Axios GET request to /gallery
  axios.get('/gallery').then(response => {
    //response has a lot
    console.log('Your galleryItems Array []', response.data);
    setGalleryList(response.data);
  }).catch(err => {
    // alert('error getting Gallery Item')
    console.log(err);
  });
};

//Created addLike function to handle likes.
const addLike = (galleryItem) => {
    console.log('Update like');
    //Axios PUT request to http including galleryItem.id (See PUT route in gallery.router.js)
    axios.put(`/gallery/like/${galleryItem.id}`)
        .then(response => {
            //Retrieves updated item list:
            fetchImages();
            //Log'd to see count update in console.
            console.log('Like Count:', galleryItem.likes)
        }).catch(err => {
            console.log('Error in update', err);
        })

}


  //equivalent of document.ready()
  //fetchImages function will get called when component loads.
  useEffect(() => {
    fetchImages();
  }, []);

  //Should display to DOM on page load.
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
