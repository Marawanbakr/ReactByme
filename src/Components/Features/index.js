import React  from 'react';
import image1 from './image/1.png'
import image2 from './image/2.png'
import image3 from './image/3.png'
import image4 from './image/4.png'
import image5 from './image/5.png'
import image6 from './image/6.png'

import
{
  FeaturesTitle,
  FeaturesH,
  FeatBox,
  Imge,
  HFour,
  Pragraph,
} from './style.js'


const Features = () => {

   return(
     
  <FeaturesTitle>
    <FeaturesH>Our features</FeaturesH>
     <div className="container">
      <FeatBox>
      <Imge src={image1} alt="" />
          <HFour>Development</HFour>
      <Pragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit aliquid laudantium dolores hic recusandae voluptatem commodi perspiciatis in</Pragraph>
    </FeatBox>

    <FeatBox>
    <Imge src={image2} alt="" />
        <HFour>Development</HFour>
        <Pragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit aliquid laudantium dolores hic recusandae voluptatem commodi perspiciatis in</Pragraph>
   </FeatBox>
   <FeatBox>
   <Imge src={image3} alt="" />
     <HFour>Development</HFour>
      <Pragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit aliquid laudantium dolores hic recusandae voluptatem commodi perspiciatis in</Pragraph>
   </FeatBox>
  <FeatBox>
  <Imge src={image4} alt="" />
      <HFour>Development</HFour>
       <Pragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit aliquid laudantium dolores hic recusandae voluptatem commodi perspiciatis in</Pragraph>
</FeatBox>
   <FeatBox>
     <Imge src={image5} alt="" /> 
       <HFour>Development</HFour>
       <Pragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit aliquid laudantium dolores hic recusandae voluptatem commodi perspiciatis in</Pragraph>
</FeatBox>
    <FeatBox>
    <Imge src={image6} alt="" />
      <HFour>Development</HFour>
      <Pragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit aliquid laudantium dolores hic recusandae voluptatem commodi perspiciatis in</Pragraph>
</FeatBox>
    </div>
  </FeaturesTitle>    
  
  )
  
}
export default Features