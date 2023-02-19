import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "./images";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
  
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
   
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
    
//   },
// ];

function AutoGallery() {
  {
    return (
      <div className='container'>
        <ImageGallery
          style={{alignItem:'center'}}
          items={images}
          showNav={false}
          autoPlay={true}
          showPlayButton={false}
          showThumbnails={false}
        />
        
      </div>
    );
  }
}

export default AutoGallery;
