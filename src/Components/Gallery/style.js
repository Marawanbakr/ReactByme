import styled from 'styled-components'

export const GallerySection = styled.div
`
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
`
export const GalleryTitle = styled(GallerySection)
`
    font-weight: bold;
    font-size: 30px;
    color:var(--main--color);
    margin: -65 0 60px;
    text-align: center;
`
export const ImgBox = styled(GallerySection)
`
text-align: center;
`
export const Img = styled.img
`
    height: 115.52px;
    width: 200px;
    padding: 3px;
    background-color: #CCC;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #ccc;   
// `
// export const Overlay = styled(GallerySection)
// { .popup-overlay

//     position: fixed;
//     background-color:rgba(204, 182, 182, 0.219);
//     left: 0;
//     top:0;
//     width: 100%;
//     height: 100%;
//     z-index: 1000;}

// .popup-box
// {
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50% , -50%);
//     background-color: #ffff;
//     border: 1px solid #CCC;
//     padding: 20px;
//     z-index: 1001;
// }
// .popup-box h3
// {
//  font-weight: bold;
//  text-align: center;
//  margin:0 0 20px;
//  color: var(--main--color)
// }
// .popup-box img
// {
//     max-width: 100%;
//     width: 400px;
//     height: 220px;

// }
// .close-button  
// {
//     position: absolute;
//     top: -15px;
//     right: -15px;
//     background-color: var(--main--color);
//     width: 40px;
//     height: 40px;
//     line-height: 40px;
//     text-align: center;
//     font-size: 20px;
//     color: #fff;
//     cursor: pointer;
//     font-weight: bold ;
//     font-family: Arial ,Tahoma;
//     border-radius: 50% ;
// }
// }
/* End Gallery */