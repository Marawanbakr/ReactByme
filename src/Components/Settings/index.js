import React  from 'react';
import 
{
  SitSection,
  SitToggle,
  Icon,
  OptionBox,
  TitleBox,
  UlList,
  ListItem,
  Span,
  ResetOption
}from './style.js'

const Settings = () => {

  window.onload = function(){
    document.querySelector(".fa-gear").onclick =function (){
    
      this.classList.toggle("fa-spin");

      document.querySelector(".SitSection").classList.toggle("open")
    }
    }

   return(
      
         <SitSection>
      <SitToggle>
        <Icon className="fa fa-gear"></Icon>
      </SitToggle>
      <div className="settings-container">
        <OptionBox>
          <TitleBox>Colors</TitleBox>
          <UlList>
            <ListItem className="active" data-color="#ff9800"></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem> 
            <ListItem></ListItem>
          </UlList>
        </OptionBox>
        <OptionBox>
          <TitleBox>Random Background </TitleBox>
         <div className="random-background">
             <Span className="yes active"data-background="yes">Yes</Span>
             <Span className="no"data-background="NO">No</Span>
         </div>
        </OptionBox>
        <OptionBox>
          <TitleBox> Show Bullets </TitleBox>
         <div className="bullets-option">
             <Span className="yes active" data-display="show">Yes</Span>
             <Span className="no" data-display="hide">No</Span>
         </div>
        </OptionBox>
        <ResetOption>Reset Options</ResetOption>
      </div>
    </SitSection>
    )
  
}

export default Settings ;


