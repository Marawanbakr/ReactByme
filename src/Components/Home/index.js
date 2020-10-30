import React  from 'react';
// import image from './imgs/02.jpeg'
// import { Link } from "react-router-dom";
// import image from './imgs/01.png'
import
{
  LandingPage,
  Container,
  OverLay,
  Headr,
  Logo,
  LinksContainer,
  Ulist,
  Anchor,
  ListItem,
  Toggle,
  Span,
  Text,
  TextTitel,
  Span2,
  Pragraph,
  Image,

} from './style.js'

const Home = () => {

  // // window.onload = function(){

  // var landingPage = document.querySelector(".landingPage");

  // var imgArray = ["01.png","02.jpeg","02jpg","03.jpeg","04.jpg","05.jpg"]

  // setInterval( () =>{

  //   var randomNumber = Math.floor(Math.random()* imgArray.length);

  //   landingPage.style.backgroundImage = 'url("imgs/'+imgArray[randomNumber]+'")'

  // },1000)


   return(
     <div className="containerrHome">
         <LandingPage>
      <OverLay></OverLay>
      <Container>
        <Headr>
          <Image />
          {/* <Image src={image} alt="" /> */}
          <Logo>Special Design</Logo>
         <LinksContainer>
          <Ulist>
            <ListItem><Anchor href="#" data-section=".about-us">About</Anchor></ListItem>
            <ListItem><Anchor href="#" data-section=".skills">Skills</Anchor></ListItem>
            <ListItem><Anchor href="#" data-section=".gallery">Gallery</Anchor></ListItem>
            <ListItem><Anchor href="#" data-section=".timeline">TimeLine</Anchor></ListItem>
            <ListItem><Anchor href="#" data-section=".features">Features</Anchor></ListItem>
            <ListItem><Anchor href="#" data-section=".testimonials">Testimonials</Anchor></ListItem>
          </Ulist> 
          <Toggle>
            <Span></Span>
            <Span></Span>
            <Span></Span>
          </Toggle>
         </LinksContainer>
      </Headr>
    </Container>
      <Text>
        <TextTitel>We Are <Span2> Creative </Span2>Agency</TextTitel>
      <Pragraph>
      Lorem ipsum dolor sit amet consectetur adipisicin elit.Repllendus <br/> odit nihil ullam nesciunt quidem iste
      </Pragraph>
      </Text>
    </LandingPage>
    </div>
    )
  
}
export default Home
