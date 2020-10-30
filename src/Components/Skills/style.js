import styled from 'styled-components';

export const SkillsSection = styled.div
`
    padding-top:50px;
    padding-bottom: 50px;
    background-color:#EEE;
`
export const Title = styled.h2
`    
    font-weight: bold;
    font-size: 30px;
    color:var(--main--color);
    margin: 0 0 50px;
    text-align:center
`
export const SkillsBox = styled.div
`
    background-color: #fff;
    display: flex;
    padding-bottom: 15px;
    margin-bottom: 15PX;
`
export const SkillsName = styled.div
`
 font-weight: bold;
 width: 140px;
 text-align: center;
 line-height: 30px;
`
export const SkillProgres = styled.div 
`
 height: 30px;
 width: calc(100% - 110px);
 background-color:#f6f6f6;
 border-radius: 6px;
 position: relative;
 overflow: hidden;
`
export const Span = styled.span
`
    position: absolute;
    left:0;
    top:0;
    width: 0%;
    height: 100%;
    background-color:var(--main--color);
    transition:all .2s
`

/* End Skills */