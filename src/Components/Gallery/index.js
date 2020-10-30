import React  from 'react';
import 
{
  GallerySection,
  GalleryTitle,
  ImgBox,
  Img

} from './style.js';
import img1 from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'
import img5 from './img/5.jpeg'
import img6 from './img/6.jpeg'
import img7 from './img/7.jpeg'
import img8 from './img/8.jpeg'
import img9 from './img/9.jpg'
import img10 from './img/10.jpeg'




const Gallery = () => {

   return(
    <GallerySection>
    <div className="containerrGallery">
      <GalleryTitle>Our Gallery</GalleryTitle>
      <ImgBox alt="">
        <Img src= {img1} alt="Image One" />
        <Img src= {img2} alt="Image One" />
        <Img src= {img3} alt="Image One" />
        <Img src= {img4} alt="Image One" />
        <Img src= {img5} alt="Image One" />
        <Img src= {img6} alt="Image One" />
        <Img src= {img7} alt="Image One" />
        <Img src= {img8} alt="Image One" />
        <Img src= {img9} alt="Image One" />
        <Img src= {img10} alt="Image One" />

      </ImgBox>
    </div>
  </GallerySection>
    )
  
}
export default Gallery ;