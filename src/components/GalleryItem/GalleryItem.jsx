import { useState, useEffect } from 'react';

function GalleryItem({galleryItem, addLike}) {
    // console.log('clicked!')

    // const [likes, setLikes] = useState(0);
    const [isShowing, setIsShowing] = useState(false);
 

    const handleLikes = () => {
        console.log('Added like!');
        addLike(galleryItem);
    }

    const toggleShowHide = () => {
        console.log('Checked Description!');
        // if (galleryItem.description === true) {
        //     return 
        // }
        setIsShowing(!isShowing);
        
        // if(isShowing === false) {
        //     console.log('false');
        // } else if (isShowing === true) {
        //     console.log('true');
        // }
        };
       
        console.log(isShowing);

   

    return(
        <>
        <div id="photoId" onClick={toggleShowHide}>
        {isShowing ? <p>{galleryItem.description}</p> : <img key="galleryItem.id" className="photo" src={galleryItem.path}/>}
        </div>
        <div id="btnId">
        <button onClick={handleLikes}>Click To Like!</button>
        </div>
        <div id="likesCounterId">
        <>{galleryItem.likes} People Liked Your Photo</>
        {/* {setIsShowing()} */}
        </div>
        </>
    )
}

export default GalleryItem;