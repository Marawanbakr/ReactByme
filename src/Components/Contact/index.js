import React  from 'react';
import
{
  ContactTitle,
  Overlay,
  Container,
  ContactUs,
  Form,
  Left,
  Right,
  Textarea,
  Input,
}from './style.js';

const Contact = () => {

   return(
  <ContactTitle>
     <Overlay></Overlay>
       <Container>
      <ContactUs>Contact Us</ContactUs>
      <Form actio="">
       <Left>
         <Input type="text" placeholder = "Your name" name="username" />
         <Input type="text" placeholder = "Your phone" name="phone" />
         <Input type="text" placeholder = "Your Email" name="email" />
         <Input type="text" placeholder = "Your subject" name="subject" />
       </Left>
       <Right>
          <Textarea name="mmessage" placeholder="Your Message"></Textarea>
          <Input type="submit" value="Send" />
        </Right>
       </Form>
       </Container>
    </ContactTitle>

    )
  
}
export default Contact ;