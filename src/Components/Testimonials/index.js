import React  from 'react';
import
{
  TistMonialSection,
  Title,
  TsBox,
  Pragraph2,
  PersonInfo,
  Img,
  InfoTitle,
  Pragraph,
}from './style.js'
import image1 from './image/1.png'
import image2 from './image/2.jpeg'
import image3 from './image/3.jpeg'


const Testimonials = () => {

   return(
    <TistMonialSection>
    <div className="container">
     <Title>Testimonials</Title>
       <TsBox>
       <Pragraph2>Lorem ipsum dolor sit ame,dolores odio commodi re</Pragraph2>
       <PersonInfo>
       <Img src={image1} alt="" />
         <InfoTitle>Ahmed Younes</InfoTitle>
         <Pragraph>The W3c</Pragraph>
        </PersonInfo>
      </TsBox>
       <TsBox>
        <Pragraph2>Lorem ipsum dolor sit ame,dolores odio commodi re</Pragraph2>
        <PersonInfo>
        <Img src={image2} alt="" />
          <InfoTitle>Marwan Abubakr</InfoTitle>
          <Pragraph>EL Zeroo</Pragraph>
         </PersonInfo>
       </TsBox>
       <TsBox>
        <Pragraph2>Lorem ipsum dolor sit ame,dolores odio commodi re</Pragraph2>
        <PersonInfo>
        <Img src={image3} alt="" />
          <InfoTitle>Cecilia Olivera</InfoTitle>
          <Pragraph>The Future</Pragraph>
         </PersonInfo> 
       </TsBox>
   </div>
   <div className="clearfix"></div>
  </TistMonialSection>
    )
  
}
export default Testimonials;
