import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

 :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: rgba(247, 249, 251, 1);
    --grey: #efefef;
    --blue: rgba(56, 198, 247);
  }

  html {
    background: var(--white);
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    -webkit-box-shadow: var(--cast) var(--cast) 0 var(--grey);
            box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  img {
    max-width: 100%;
  }

  .tilt {
    -webkit-transform: rotate(-2deg);
        -ms-transform: rotate(-2deg);
            transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

export default GlobalStyles;
