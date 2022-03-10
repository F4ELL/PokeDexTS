import styled from 'styled-components';

export const StyledButton = styled.button`
    
    width: 230px;
    height: 70px;
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;   
    padding-right: 20px;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to bottom, #44474C, #4A505A); 
    margin-bottom: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0, .1);

    img{
        width: 60px;
        border-radius: 50%;
    }
`