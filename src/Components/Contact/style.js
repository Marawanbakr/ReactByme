import styled from 'styled-components'

export const ContactTitle = styled.div
`
    min-height: 600px;
    background-size: cover;
    padding-top: 3px;
    padding-bottom: 80px;
    position: relative;
    background-image: url(./../imags/69345114-outline-of-world-map-on-white-background.jpg);
`   
export const Overlay = styled.div
`
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    background-color:rgba(225,225,225,.6);
`
export const Container = styled.div
`
    position: relative;
    z-index: 2;
`
export const ContactUs = styled.h2
`
    font-weight: bold;
    font-size: 30px;
    color:var(--main--color);
    margin: 0 0 60px;
    text-align: center;
`
export const Form = styled.form
`
    overflow:hidden;
    max-width: 800px;
    margin:auto;
`
export const Left = styled.div
`
    float: left;
    width: 49%;
`
export const Right = styled.div
`
    float: right;
    width: 49%;
}`

export const Textarea = styled.textarea
`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #CCC;
    height: 150px;
    background-color: rgba(218, 218, 218, 0.19);
    :focus::-webkit-input-placeholder{
        opacity: 0;
        transition:.3s ;
    }
    :focus{
        outline: 1px solid var(--main--color);
    }
    :focus:-ms-input-placeholder{
        opacity: 0;
        transition:.3s ;
    }
    :focus::placeholder{
        opacity: 0;
        transition:.3s;
    }
`
export const Input = styled.input
`  display: block;
    height: 40px;      
   width: 100%;
   padding: 10px;
   margin-bottom: 15px;
   border: 1px solid #CCC;
   background-color: rgba(218, 218, 218, 0.19);
   :not([type="submit"]):focus{
            outline: 1px solid var(--main--color);
   }
    [type="submit"] {
            padding: 10px;
            width: 100%;
            border-color: transparent;
            background-color: var(--main--color);
            color:#FFF;
            cursor: pointer;
   }
   :not([type="submit"]):focus::-webkit-input-placeholder
   {
    opacity: 0;
    transition:.3s ;
   }
   :not([type="submit"]):focus:-ms-input-placeholder {
    opacity: 0;
    transition:.3s ;
   }
   :not([type="submit"]):focus::placeholder {
    opacity: 0;
    transition:.3s;
   }
`