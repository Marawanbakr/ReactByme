import React  from 'react';
import
{
  AboutSection,
  AboutUs,
  InfoBox,
  Pragraph,
  ImageBox,
  Image
} 
from'./style.js';
import image from './1.png';

const About = () => {

   return(
     <div className="containerrAbout">
       <AboutSection>
         <InfoBox>
           <AboutUs>About Us</AboutUs>
           <Pragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos cumque fuga deserunt molestias, laudantium quasi labore, nisi facere obcaecati ipsam neque ducimus voluptates aliquid magni necessitatibus aliquam nemo temporibus!</Pragraph>
         </InfoBox>
         <ImageBox>
         <Image src={image} alt="" />
         </ImageBox>
       </AboutSection>
     </div>
      
    )
  
}
export default About