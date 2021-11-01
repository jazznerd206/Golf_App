import { createGlobalStyle } from 'styled-components';
// import MH from '../assets/mh_headshot.jpeg';
// import Oxy_WOFF from '../fonts/oxygen-mono-v8-latin/oxygen-mono-v8-latin-regular.woff'
// import Oxy_WOFF2 from '../fonts/oxygen-mono-v8-latin/oxygen-mono-v8-latin-regular.woff2'

export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Oxygen Mono';
    src:    url(${Oxy_WOFF2}) format('woff2'),
            url(${Oxy_WOFF}) format('woff');
    } */
  * {
    /* font-family: 'Oxygen Mono'; */
    ::-webkit-scrollbar {
      display: none;
    }
  }
  html, body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: visible;
  }
  #root {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}
  
  #root::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    opacity: .06; 
    z-index: -1;
    /* background: url(${MH}); */
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-origin: padding-box;
    background-clip: border-box;
    background-color: #ccc;
    @media (max-width: 768px) {
        background: left left;
    }
}
`