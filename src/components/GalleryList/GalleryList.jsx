//gallaryItems import
// import StudentItem from '../StudentItem/StudentItem';
import '../modules/galleryItems';


//Destructing creatureList OUT OF PROPS!! (see below)
function GalleryList({gallaryItems}) {
    console.log(gallaryItems);
    return (
     <>
      {gallaryItems.map(photoItem => 
       (<GalleryItem
       key={photoItem.id}
       item={photoItem}
        />)
      )}
    </>
    );
}

export default StudentList;