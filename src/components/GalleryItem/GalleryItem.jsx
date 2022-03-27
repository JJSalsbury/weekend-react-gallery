//Import useState, since state variables are declared.
import { useState } from 'react';

function GalleryItem({ galleryItem, addLike }) {
    // console.log('clicked!')

    //Created useState variable and set it's initial value to false.
    const [isShowing, setIsShowing] = useState(false);

    //Created handleLikes function to handle likes.
    const handleLikes = () => {
        console.log('Added like!');
        addLike(galleryItem);
    };

    //Created toggleShowHide function to handle picture/description change.
    const toggleShowHide = () => {
        console.log('Checked Description!');

        //set is showing to use in my toggle on click. Will set value to true.
        setIsShowing(!isShowing);
    };

    //console log'd to see the boolean value change when clicked.
    console.log(isShowing);

    //On click, will toggle between description and photo based on change of boolean value. 
    return (
        <>
            <div className="layout">
                <div id="photoDescriptionId" onClick={toggleShowHide}>
                    {isShowing ? <p>{galleryItem.description}</p> : <img key="galleryItem.id" className="photo" src={galleryItem.path} />}
                </div>
                <div id="btnId">
                    <button onClick={handleLikes}>Click To Like!</button>
                </div>
                <div id="likesCounterId">
                    <>{galleryItem.likes} People Liked Your Photo! &#128062;</>
                </div>
            </div>
        </>
    )
}

//Set GalleryItem for export.
export default GalleryItem;