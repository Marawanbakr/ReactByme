import styled from 'styled-components';

export const TimelineSection = styled.div
`
    padding-top:50px;
    padding-bottom:50px ;
    background-color: #EEE; 
`
export const Title = styled.h2
`
     font-weight: bold;
     font-size: 30px;
     color: var(--main--color);
     margin: 0 0 50px;
     text-align: center;
`
 export const TimeContent = styled.div
`
     position: relative;
     overflow: hidden;
     :before {
            content: '';
            width: 2px;
            height: 100%;
            background-color: var(--main--color);
            position:absolute;
            left: 50%;
            margin-left: -1px ;
            top:0;
     }
` 
 export const Year = styled.div
`
     margin: 20px auto;
     width:50px;
     background-color: var(--main--color);
     position:relative;
     z-index: 2;
     border-radius: 4px;
     text-align: center;
     color: #fff;
     padding: 2px 5px;
     font-weight: bold;
`
export const Left = styled.div
`
    width: calc(50% - 25px);
    margin-bottom:40px ;
    position: relative;
    float: left;
    :before {
            right:-35px ;
            content: '';
            width: 14px;
            height: 14px;
            background-color: #fff;
            border: 3px solid var(--main--color);
            position: absolute;
            border-radius: 50%;
            top: 20px;  
    }
`
export const Right = styled.div
`
    width: calc(50% - 25px);
    margin-bottom:40px ;
    position: relative;
    float: right;
    :before{
            left:-35px ;
            content: '';
            width: 14px;
            height: 14px;
            background-color: #fff;
            border: 3px solid var(--main--color);
            position: absolute;
            border-radius: 50%;
            top: 20px;  
    }
`
export const Content = styled.div
`
     padding:20px;
     background-color: #fff;
     left:before {
        content: '';
        border-style: solid;
        border-width: 10px;
        border-color: transparent transparent transparent #fff;
        height: 0;
        width: 0;
        position: absolute;
        right: -20px;
        top: 20px;
     }
     right:before {
        content: '';
        border-style: solid;
        border-width: 10px;
        border-color: transparent  #fff transparent transparent;
        height: 0;
        width: 0;
        position: absolute;
        left:-20px;
        top: 20px;
     }

`
export const TitleContent = styled.div
`
     font-weight: bold;
     color:var(--main--color);
     margin:0 0 10px
`
export const Pragraph = styled.div
`
     color:#666;
     margin:0;
     line-height: 1.6;
 
`
export const ClearFix = styled.div
`
     clear:both
`