import styled from 'styled-components'


export const FeaturesTitle = styled.div
`
    padding-top: 80px;
    padding-bottom: 80px;
    background-color:#181746;

`
export const FeaturesH = styled.h2
`
    font-weight: bold;
    font-size: 30px;
    color:var(--main--color);
    margin:0 0 60px;
    text-align: center;
`
export const FeatBox = styled.div
`
    width: calc(100% / 3);
    float: left;
    text-align: center;
    margin-bottom: 40px;;
`
export const Imge = styled.img
`
    width: 60%;
    height: 150px;
`
export const HFour = styled.h4
`
   font-size: 22px;
   margin: 15px 0 40px;
   position: relative;
`
export const h = styled(HFour)
`
    content:'';
    width: 40px;
    height: 4px;
    background-color: var(--main--color);
    position: absolute;
    left: 50%;
    margin-left: -20px;
    bottom: -22px;
`
export const Pragraph = styled.p
`
    width: 80%;
    margin: 0 auto;
    line-height: 1.7;
    color:#706f6f;
`
/* End Features */