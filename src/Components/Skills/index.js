import React  from 'react';
import
{ SkillsSection,
  Title,
  SkillsBox,
  SkillsName,
  SkillProgres,
  Span,
}
from './style.js';

const Skills = () => {

  

   return(
     
  <SkillsSection>
    <div className="containerrSkills">
      <Title>Our Skills</Title>
       <SkillsBox>
         <SkillsName>HTML</SkillsName>
         <SkillProgres>
             <Span data-progress="90%"></Span>
        </SkillProgres>
      </SkillsBox>
    <SkillsBox>
      <SkillsName>JavaScript</SkillsName>
      <SkillProgres>
       <Span data-progress="80%"></Span>
   </SkillProgres>
  </SkillsBox>
  <SkillsBox>
    <SkillsName>React</SkillsName>
    <SkillProgres>
     <Span data-progress="70%"></Span>
     </SkillProgres>
   </SkillsBox>
   <SkillsBox>
    <SkillsName>paython</SkillsName>
    <SkillProgres>
     <Span data-progress="60%"></Span>
     </SkillProgres>
   </SkillsBox>
   <SkillsBox>
    <SkillsName>PHP</SkillsName>
    <SkillProgres>
     <Span data-progress="50%"></Span>
     </SkillProgres>
   </SkillsBox>
   <SkillsBox>
    <SkillsName>CSS</SkillsName>
    <SkillProgres>
     <Span data-progress="80%"></Span>
     </SkillProgres>
   </SkillsBox>
 </div>
</SkillsSection>
 
    )
  
}
export default Skills