/* Start Landing Page*/
import styled from 'styled-components'

export const Image = styled.div`
background-image:url('./imgs/01.png')
background-size: cover;
padding-top: 3px;
padding-bottom: 80px;
position: relative;
`

export const LandingPage = styled.div
`
{
    min-height: 100vh;
    background-size:cover;
    position: relative;
`
export const Container = styled.div
`
    position: relative;
    z-index: 1000;
`
export const OverLay = styled.div
`
    background-color: #11091726;
    position: absolute;
    width:100%;
    height:100% ;
    left:0;
    top:0;
    z-index: 1;
`    
export const Headr = styled.div
`
    position: relative;
    z-index: 2; 
    color:#fff;
    display: flex;
    padding: 10px;
`
export const Logo = styled.div
`
    width: 300px;
    padding: 15px;
    font-weight: bold;
    font-size: 25px;

`
export const LinksContainer = styled.div
`
    width: 100%;
    text-align: right;
`
export const Ulist = styled.ul
`
    list-style: none;
    text-align: right;
    padding-left: 0;
`
export const Anchor = styled.a
`
    color:#000;
    text-decoration: none;
    transition: .3s;
    :hover{
        color:var(--main--color)
    }
    .active {
        color:var(--main--color)
    }

`
export const ListItem = styled.li
`
    display: inline-block;
    margin-left:10px ;
`

export const Toggle = styled.button
`
    background:none;
    border: none;
    width: 40px;
    cursor: pointer;
    margin-top: 15px;
    display: none;
    position: relative;

    .menu-active:before{

    content: '';
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    bottom: -18px;
    left: 10px;
    }
    :focus{
        outline: none;

    }
`
export const Span = styled.span
`
    display: block;
    background-color:#fff;
    height: 3px;
    margin-bottom: 4px;
`
export const Text = styled.div
`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -44%);
    z-index: 2;
    color: #000000c9;
    text-align: center;
    width: 95%;
`
export const TextTitel = styled.h1
`
    font-size: 34px;
    margin: 0 0 12 px;
    padding: 5px;
    transform: translate(-20px, -6Px);
`
export const Span2 = styled.span
`
  color: var(--main--color);
`
export const Pragraph =styled.p
`
    /* transform: translate(-500px, -50px); */
    line-height: 1.6;
    font-size: 20px;
    margin:0;
    transform: translate(-4px, -38px);
    font-size: x-large;
`
