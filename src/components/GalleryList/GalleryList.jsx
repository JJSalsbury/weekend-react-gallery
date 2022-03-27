//Import GallaryItem
import GalleryItem from '../GalleryItem/GalleryItem';

//Destructing GalleryList OUT OF PROPS!!
function GalleryList({ galleryList, addLike }) {
  // console.log(galleryList);
  return (
    <>
      {galleryList.map(galleryItem =>
      (<GalleryItem
        key={galleryItem.id}
        galleryItem={galleryItem}
        addLike={addLike}
      />)
      )}
    </>
  );
}

//Set GalleryList for export
export default GalleryList;