//gallaryItems import
import GalleryItem from '../GalleryItem/GalleryItem';
// import '../modules/galleryItems';


//Destructing creatureList OUT OF PROPS!! (see below)
function GalleryList({galleryList}) {
    console.log(galleryList);
    return (
      <>
      {galleryList.map(galleryItem => 
       (<GalleryItem
       key={galleryItem.id}
       galleryItem={galleryItem}
        />)
      )}
      </>
    );
}

export default GalleryList;