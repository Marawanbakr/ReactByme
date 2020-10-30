import React  from 'react';
import
{
  TimelineSection,
  Title,
  TimeContent,
  Year,
  Left,
  Right,
  Content,
  TitleContent,
  Pragraph,
  ClearFix

} from './style.js';

const Timeline = () => {

   return(
    <TimelineSection>
    <div className="containerrTimeLine">
      <Title>TimeLine</Title>
      <TimeContent>
        <Year>2020</Year>

        <Left>
          <Content>
            <TitleContent>Testing Heading</TitleContent>
            <Pragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fuga placeat mollitia ratione nobis maiores impedit similique dolore! Debitis id molestiae ex culpa, unde facere officia voluptatem consequatur atque perspiciatis?</Pragraph>
          </Content>
        </Left>
        <ClearFix></ClearFix>
        <Right>
          <Content>
            <TitleContent>Testing Heading</TitleContent>
            <Pragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fuga placeat mollitia ratione nobis maiores impedit similique dolore! Debitis id molestiae ex culpa, unde facere officia voluptatem consequatur atque perspiciatis?</Pragraph>
          </Content>
        </Right>
        <ClearFix></ClearFix>
      </TimeContent>
    </div>
  </TimelineSection>
    )
  
}
export default Timeline