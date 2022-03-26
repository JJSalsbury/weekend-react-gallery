import { useState } from 'react';

function GalleryItem({galleryItem}) {
    console.log('clicked!')

    const [likes, setLikes] = useState(0);

    return(
        <>
        <div id="photoId">
        <img key="galleryItem.id" className="photo" src={galleryItem.path}/>
        </div>
        <div id="btnId">
        <button onClick={() => setLikes(likes +1) }>Click To Like!</button>
        </div>
        <div id="likesCounterId">
        <>{likes}</>
        </div>
        </>
    )
}

export default GalleryItem;