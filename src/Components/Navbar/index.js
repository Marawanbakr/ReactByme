import React  from 'react';
import { Link } from 'react-router-dom';
import 
{
    NavbarSection,
    Logo,
    Title,
    Ulist,
    ListItem,
    Anchor,
} from './style.js';
const Navbar = () => {

   return(
    
    <NavbarSection>
        
        <div className="container">
            
            <Logo>
                <Title>Ultra Profile</Title>
            </Logo>

            <Ulist>
                <ListItem><Link to="/">Home</Link></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#">about</Anchor></ListItem>
                <ListItem><Link to="/contact">Contact</Link></ListItem>
            </Ulist>
            
        </div>
        
    </NavbarSection>
    )
  
}
export default Navbar   