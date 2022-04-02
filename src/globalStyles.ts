import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        background-image: linear-gradient(to bottom, #d1d1d1 20%, #8E9598);
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 60px;
        gap: 40px;
    }

    .btn--poke{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        
    }
`

export default GlobalStyle