import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  body {
    margin: 0px;
    padding: 0px;
    background-color: var(--grey-4);
    width: 100vw;
    height: 100vh;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color:var(--grey-0);
  }
  h1,h2,h3{
      font-weight: 16px;
      font-weight: bold;
      color:var(--grey-0);
  }
  :root{
      --primary-color:#FF577F;
      --primary-focus:#FF427F;
      --primary-dark:#59323F;
      --grey-4:#121214;
      --grey-3: #212529;
      --grey-2: #343B41 ;
      --grey-1: #868E96;
      --grey-0:#F8F9FA;
      --success:#3FE864;
      --negative:#E83F5B; 
  }
`;

export default GlobalStyles;