import { useState, useEffect } from 'react';

function GalleryItem({galleryItem, addLike}) {
    // console.log('clicked!')

    const [isShowing, setIsShowing] = useState(false);
 

    const handleLikes = () => {
        console.log('Added like!');
        addLike(galleryItem);
    }

    const toggleShowHide = () => {
        console.log('Checked Description!');

        setIsShowing(!isShowing);
        
        };
       
        console.log(isShowing);

   

    return(
        <>
        <div className="layout">
        <div id="photoId" onClick={toggleShowHide}>
        {isShowing ? <p>{galleryItem.description}</p> : <img key="galleryItem.id" className="photo" src={galleryItem.path}/>}
        </div>
        <div id="btnId">
        <button onClick={handleLikes}>Click To Like!</button>
        </div>
        <div id="likesCounterId">
        <>{galleryItem.likes} People Liked Your Photo! &#128054;</>
        </div>
        </div>
        </>
    )
}

export default GalleryItem;