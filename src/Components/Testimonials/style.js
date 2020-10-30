 
import styled from 'styled-components'

export const TistMonialSection = styled.div
`
 position: relative;
 padding-top: 80px;
 padding-bottom: 80px;
 margin-top: 38%;
 :before {
    content: '';
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-color:var(--main--color);
    height:200%;
}
   :after {
    content: '';
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    background-color:#333;
    height: 200%;
   }
`
export const Title = styled.h2
`
    font-weight: bold;
    font-size: 30px;
    color:#fff;
    margin: 0 0 50px;
    text-align: center;
    position: relative;
    z-index:2;
`
export const TsBox = styled.div
`
    position:relative;
    z-index: 2;
    width: calc(98% / 3);
    float:left;
    background-color: #fff;
    padding:20px;
    margin: 3px;
    border-bottom-left-radius: 70px;
    :not(:last-of-type) {
        margin-right:1;
    }
`

export const Pragraph2 = styled.p
`
    margin:0 0 20px;
    line-height: 1.5;
    font-size: 18px;
    color:#707070;
    font-style: italic;

}
   
`
export const PersonInfo = styled.div
`
    overflow:hidden;
`
export const Img = styled.img
`
    float: left;
    border-radius: 50%;
    margin-right: 20px;
    width: 80px;
    height: 80px;
     
`
export const InfoTitle = styled.h4
`
    margin:14px 0px 13px
`
export const Pragraph = styled.p
`
    color:#707070;
    margin:0;
`