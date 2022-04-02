import styled from 'styled-components';

interface TStyledButton{
    selected: boolean,
    buttonColor: string
}

export const StyledButton = styled.button<TStyledButton>`
    
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
    background-color: ${(props) => props.selected ? props.buttonColor : "#434A52"};
    margin-bottom: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0, .1);

    img{
        width: 60px;
        border-radius: 50%;
    }
`