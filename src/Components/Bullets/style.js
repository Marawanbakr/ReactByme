import styled from 'styled-components';


export const NavSection = styled.div
`
    position: fixed;
    right:0;
    top:50%;
    transform:translateY(-50%);
    width: 40px;
    z-index: 1000;
`
export const BulletSection = styled.div
`
    width: 20px;
    height: 20px;
    border: 3px solid var(--main--color);
    margin: 20px auto;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    :hover .tooltip {
        display: block;

    }
`
export const ToolTip = styled.div
`
    background-color: var(--main--color);
    width: 120px;
    color:#fff;
    padding:8px 10px;
    position: absolute;
    right: 32px;
    top:-10px;
    text-align: center;
    cursor:default;
    pointer-events: none;
    display: none;
    :before {
        content: '';
        border-style: solid;
        border-width: 10px;
        border-color: transparent transparent transparent var(--main--color);;
        height: 0;
        width: 0;
        position: absolute;
        right:-22px;
        top: 50%;
        transform:translateY(-50%);
    }
`