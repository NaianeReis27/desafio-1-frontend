import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`


*{
  box-sizing: border-box; 
  font-family: 'Source Sans Pro', sans-serif;
}

html,
body,
.App {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

body{
    background-color: var(--background-color);
}

:root {
  --white-color: #FFFFFF;
  --color-modal: #D1DCE3;
  --background-color: #F5F7FA;
  --modal-color-font: #656565;
  --outline-color-input: #66AFE9;
  --color-font-blue:  #3D75BB;
  --color-font-blue-span:  #5D9CEC;
}


`;

