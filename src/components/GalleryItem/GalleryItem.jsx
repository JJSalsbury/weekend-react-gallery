import { useState, useEffect } from 'react';

function GalleryItem({galleryItem, addLike}) {
    // console.log('clicked!')

    const [likes, setLikes] = useState(false);

    const handleLikes = () => {
        console.log('Added like!');
        addLike(galleryItem);
    }

    const handleToggle = () => {
        console.log('Checked Discription!');
        
    }

    return(
        <>
        <div id="photoId" onClick={handleToggle}>
        <img key="galleryItem.id" className="photo" src={galleryItem.path}/>
        </div>
        <div id="btnId">
        <button onClick={handleLikes}>Click To Like!</button>
        </div>
        <div id="likesCounterId">
        <>{galleryItem.likes} People Liked Your Photo</>
        </div>
        </>
    )
}

export default GalleryItem;