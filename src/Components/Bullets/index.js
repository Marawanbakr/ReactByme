import React  from 'react';
import 
{
    NavSection,
    BulletSection,
    ToolTip,
}from './style.js'
const Bullets = () => {

React.useEffect(()=> {
  const allBullets = document.querySelectorAll(".BulletSection");

allBullets.forEach(BulletSection => {

  // console.log("BulletSection")

  BulletSection.addEventListener("click",(e) => {
    console.log(e.target.dataset.section)

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior:'smooth'
    });
  });
})
}, [])
    return (
        <NavSection>

        <BulletSection className="BulletSection" data-section=".containerrHome">
        <ToolTip className="tooltip">Home</ToolTip>
        </BulletSection>

        <BulletSection className="BulletSection" data-section=".containerrAbout">
          <ToolTip className="tooltip">About</ToolTip>
        </BulletSection>

        <BulletSection className="BulletSection" data-section=".containerrSkills">
        <ToolTip className="tooltip">Skills</ToolTip>
        </BulletSection>  
        <BulletSection className="BulletSection" data-section=".containerrGallery">
        <ToolTip className="tooltip">Gallery</ToolTip>
        </BulletSection>

        <BulletSection className="BulletSection" data-section=".containerrTimeLine">
          <ToolTip className="tooltip">TimLine</ToolTip>
        </BulletSection>

      </NavSection>
    )
}

 export default Bullets;