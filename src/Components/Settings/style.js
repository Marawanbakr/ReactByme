import styled from 'styled-components'


export const SitSection = styled.div
`
    position: fixed;
    left: -200px;
    top: 0px;
    background-color: #fff;
    width: 200px;
    z-index: 1000;
    transition: .3s;
    min-height: 100vh;
    border:1px solid #fff
    .opne {
        left:0

    }
`
export const SitToggle = styled.div
`
    position: absolute;
    right: -30px;
    top: 100px;
    background-color: #fff;   
    text-align: center;
    cursor: pointer;
    font-size:20px;
`
export const Icon = styled.i
`
    width: 30px;
    padding: 8px 0;
`
export const OptionBox = styled.div
`
  padding: 10px;
  text-align: center;
  background-color:#EEE;
  margin: 10px;
`
export const TitleBox = styled.h4
`
  margin: 0;
  color:#666;
  font-size: 14px;
`
export const UlList = styled.ul
`
   list-style:none ;
   text-align: center;
   padding:0;
   margin:10px 0 0;
`
export const ListItem = styled.li
`
  width: 24px;
  height: 24px;
  background-color: rgba(22, 20, 22, 0.082);
  cursor: pointer;
  display: inline-block;
  border:3px solid #fff
  .active {
        border:2px solid rgb(126, 118, 120);
        margin:5px 0 ;
    }
    :first-child {
        background-color:#FF9800;
        border-radius:20px
    }

    :nth-child(2){
        background-color:#e91e63;
        border-radius:20px
    }

    :nth-child(3){
        background-color:#c54ac5;
        border-radius:20px
    }
    :nth-child(4){
        background-color:#676776;
        border-radius:20px
    }
    :nth-child(5){
        background-color:#279cca;
        border-radius:20px
    }

 
`
export const Span = styled.span
`
    width: 50px;
    color:rgb(0, 0, 0);
    margin-top: 10px;
    display: inline-block;
    font: size 12px;
    padding:4px 10px;
    font-weight: bold;
    border-radius: 4px;
    opacity: .5;
    cursor: pointer;
    background-color: var(--main--color);

    .active{
        opacity:1

    }
`

export const ResetOption = styled.button
`
    background-color:#f73a2c;
    width: 187px;
    border: none;
    margin: 10px auto;
    display: block;
    color:#fff;
    font-weight: bold;
    padding:10px;
    border-radius: 4px;
    cursor: pointer;
`

